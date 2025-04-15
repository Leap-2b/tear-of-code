import mongoose from "mongoose";

export const connectMongoDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTION_URI || "");
    console.log("Mongodb success");
  } catch (error) {
    console.log({Mongodberror: error});
  }
};
