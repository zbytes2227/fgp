import argon2 from "argon2";
import connectDb from "@/middleware/mongoose";
import jwt from "jsonwebtoken";
import { serialize } from 'cookie';

const handler = async (req, res) => {

    if (req.method == 'POST') {
        try {
            if(req.body.password==process.env.ADMIN_PASSWORD && req.body.email==process.env.ADMIN_USERNAME){
                const token = jwt.sign({ _id: process.env.ADMIN_USERNAME }, process.env.TOKEN_ADMIN, { expiresIn: "1h" });
                return res.setHeader('Set-Cookie', serialize('admin_access_token', token, {
                    httpOnly: true,
                    sameSite: "strict",
                    secure: true,
                    path: '/',
            }))
            .json({ success: true, msg: "Login Successful" });
        }else{
            return res.json({ success: false, msg: "Wrong Credentials" });
        }
        } catch (err) {
            console.error(err);
            return res.status(500).json({ success: false, msg: "Internal Server Error" });
        }
    }


};

export default connectDb(handler);