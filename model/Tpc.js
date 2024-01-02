const mongoose = require("mongoose");
// mongoose.set('strictQuery', true);

const TpcSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    link: { type: String },
  },
  { collection: "all-tpc" },
  { timestamps: true }
);

mongoose.models = {};
const Tpc = mongoose.model("tpc", TpcSchema);
module.exports = Tpc;
