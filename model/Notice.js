const mongoose = require("mongoose");
// mongoose.set('strictQuery', true);

const NoticeSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    link: { type: String },
  },
  { collection: "all-notices" },
  { timestamps: true }
);

mongoose.models = {};
const Notices = mongoose.model("Notices", NoticeSchema);
module.exports = Notices;
