const mongoose = require("mongoose");
// mongoose.set('strictQuery', true);

const AicteSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    link: { type: String },
  },
  { collection: "all-aicte" },
  { timestamps: true }
);

mongoose.models = {};
const Aicte = mongoose.model("Aicte", AicteSchema);
module.exports = Aicte;
