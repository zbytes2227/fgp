const mongoose = require("mongoose");

const connectDb = (handler) => async (req, res) => {
  if (mongoose.connections[0].readyState) {
    return handler(req, res);
  }
  await mongoose.connect("mongodb+srv://fgpadmin:AVXVsohYOuScIlcv@clusterfgp.8y3v8ia.mongodb.net/?retryWrites=true&w=majority");
  return handler(req, res);
};
export default connectDb;