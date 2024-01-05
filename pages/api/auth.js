import argon2 from "argon2";
import connectDb from "@/middleware/mongoose";
import jwt from "jsonwebtoken";
import { parse } from "cookie";
import { serialize } from "cookie";

const handler = async (req, res) => {
  if (req.method == "GET") {
    const cookies = parse(req.headers.cookie || "");
    const token = cookies.admin_access_token;

    try {
      let decoded = await jwt.verify(token, process.env.TOKEN_ADMIN);

      if (decoded._id !== process.env.ADMIN_USERNAME) {
        return res.status(400).json({ success: false, msg: "User Not Found" });
      }
      return res.status(200).json({ success: true, msg: "send" });
    } catch (err) {
      // Handle token verification errors
      return res.status(400).json({ success: false, msg: "User Invalid" });
    }
  }
};

export default connectDb(handler);
