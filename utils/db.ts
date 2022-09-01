import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_ATLAS);
    console.log("Connect to Atlas DB");
  } catch (err) {
    console.log(err.message);
    console.log("Error connecting to DB");
    process.exit(1);
  }
};

export default connectToDB;
