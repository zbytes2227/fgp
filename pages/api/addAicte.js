import { body, validationResult } from "express-validator";
import validator from "validator";
import connectDb from "../../middleware/mongoose";
import { parse } from "cookie";
import jwt from "jsonwebtoken";
import Aicte from "@/model/Aicte";

const handler = async (req, res) => {
  if (req.method === "POST") {
    try {

    const cookies = parse(req.headers.cookie || "");
    const token = cookies.admin_access_token;  
    let decoded = await jwt.verify(token, process.env.TOKEN_ADMIN);
    if (!decoded._id==process.env.ADMIN_USERNAME) {
      return res.status(403).json({ success: false, errors: "Unable to Authenticate" });
    }

      // Validation middleware
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ success: false, errors: errors.array() });
      }

      // Sanitize and validate input
      const sanitizedTitle = validator.trim(req.body.title);
      const sanitizedLink = validator.isURL(req.body.link) ? req.body.link : "";

      if (!sanitizedTitle) {
        return res
          .status(400)
          .json({
            success: false,
            msg: "Title cannot be empty or contain only spaces.",
          });
      }

      // Save to MongoDB
      const newMsg = new Aicte({
        title: sanitizedTitle,
        link: sanitizedLink,
      });

      await newMsg.save();

      return res.json({ success: true, msg: "New Aicte Added Successfully." });
    } catch (err) {
      console.error(err);
      res
        .status(500)
        .json({ success: false, msg: "Server error. Contact the Developers." });
    }
  }
};

// Validation rules
const validationRules = [
  body("title").notEmpty().withMessage("Title cannot be empty"),
  body("link")
    .optional({ nullable: true })
    .isURL()
    .withMessage("Link must be a valid URL"),
];

export default connectDb(handler);

// import Notices from "../../model/Notice";
// import connectDb from "../../middleware/mongoose";

// const handler = async (req, res) => {
//   if (req.method == "POST") {
//     try {
//       console.log(req.body);
//       const newMsg = new Notices({
//         title: req.body.title,
//         link: req.body.link,
//       });

//       await newMsg.save();
//       console.log("okay");
//       return res.json({ success: true, msg: "New Notice Added Successfuly.." });
//     } catch (err) {
//       console.error(err);
//       res
//         .status(500)
//         .json({ success: false, msg: "Server error..Contact the Developers." });
//     }
//   }
// };

// export default connectDb(handler);
