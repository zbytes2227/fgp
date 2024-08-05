import Notices from "../../model/Notice";
import connectDb from "../../middleware/mongoose";

const handler = async (req, res) => {
  if (req.method === "GET") {
    try {
      const allNotices = await Notices.find();
      const reversedNotices = allNotices.reverse();
      return res.json({ success: true, notices: reversedNotices });
    } catch (err) {
      console.error(err);
      res.status(500).json({ success: false, msg: "Server error...." });
    }
  }
};
export default connectDb(handler);
