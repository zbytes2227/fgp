import { body, validationResult } from "express-validator";
import validator from "validator";
import connectDb from "../../middleware/mongoose";
import { parse } from "cookie";
import jwt from "jsonwebtoken";
import Tpc from "@/model/Tpc";

const handler = async (req, res) => {
  if (req.method === "POST") {
    try {
      const cookies = parse(req.headers.cookie || "");
      const token = cookies.admin_access_token;
      let decoded = await jwt.verify(token, process.env.TOKEN_ADMIN);
      if (!decoded._id==process.env.ADMIN_PASSWORD) {
        return res
          .status(403)
          .json({ success: false, errors: "Unable to Authenticate" });
      }

      const noticeId = req.body.notice_id;
      console.log(noticeId);

      // Delete the notice directly using deleteOne
      const result = await Tpc.deleteOne({ _id: noticeId });

      if (result.deletedCount === 0) {
        return res
          .status(404)
          .json({ success: false, msg: "Notice not found." });
      }

      return res.json({ success: true, msg: "TPC record deleted successfully." });
    } catch (err) {
      console.error(err);
      res
        .status(500)
        .json({ success: false, msg: "Server error. Contact the Developers." });
    }
  }
};

export default connectDb(handler);
