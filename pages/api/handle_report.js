
import { parse } from "cookie";
import jwt from "jsonwebtoken";
import multer from 'multer';
import { google } from 'googleapis';
import connectDb from "../../middleware/mongoose";
import stream from 'stream';

const upload = multer({
  storage: multer.memoryStorage(),
});

export const config = {
  api: {
    bodyParser: false, // Disable body parsing for file uploads
  },
};

const handler = async (req, res) => {
  if (req.method === 'POST') {

    const cookies = parse(req.headers.cookie || "");
    const token = cookies.admin_access_token;  
    let decoded = await jwt.verify(token, process.env.TOKEN_ADMIN);
    if (!decoded._id==process.env.ADMIN_USERNAME) {
      return res.status(403).json({ success: false, errors: "Unable to Authenticate" });
    }


    upload.single('file')(req, res, async (err) => {
      if (err) {
        return res.status(500).json({ error: `Upload error: ${err.message}` });
      }

      if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
      }

      try {
        const authorize = async () => {
          const jwtClient = new google.auth.JWT(
            process.env.PDF_CLIENT_EMAIL,
            null,
            process.env.PDF_PRIVATE_KEY.split(String.raw`\n`).join('\n'),
            ['https://www.googleapis.com/auth/drive']
          );
          await jwtClient.authorize();
          return jwtClient;
        };

        const uploadFile = async (authClient, fileBuffer, fileName) => {
          const drive = google.drive({ version: 'v3', auth: authClient });
          const fileMetaData = {
            name: fileName,
            parents: ['1eZLMVk4qKLbtmlmoo98x4H3teCU9hT-T'], // A folder ID to which file will get uploaded
          };

          const bufferStream = new stream.PassThrough();
          bufferStream.end(fileBuffer);

          return new Promise((resolve, reject) => {
            drive.files.create(
              {
                resource: fileMetaData,
                media: {
                  mimeType: 'application/pdf',
                  body: bufferStream,
                },
                fields: 'id',
              },
              function (error, file) {
                if (error) {
                  return reject(error);
                }
                resolve(file.data.id);
              }
            );
          });
        };

        const setFilePermissions = async (authClient, fileId) => {
          const drive = google.drive({ version: 'v3', auth: authClient });
          return drive.permissions.create({
            fileId: fileId,
            resource: { role: 'reader', type: 'anyone' },
          });
        };

        const getFileUrl = async (authClient, fileId) => {
          const drive = google.drive({ version: 'v3', auth: authClient });
          const response = await drive.files.get({
            fileId: fileId,
            fields: 'webViewLink',
          });
          return response.data.webViewLink;
        };

        const authClient = await authorize();
        const fileId = await uploadFile(authClient, req.file.buffer, req.file.originalname);
        await setFilePermissions(authClient, fileId);
        const fileUrl = await getFileUrl(authClient, fileId);
        res.status(200).json({ success: true, url :fileUrl, msg:"File Upload Successfull" });
      } catch (error) {
        res.status(500).json({ error: `File upload failed: ${error.message}` });
      }
    });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};

export default connectDb(handler);
