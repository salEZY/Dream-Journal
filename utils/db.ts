import mongoose from "mongoose";
import log from "./logger";

const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_ATLAS);
    log.info("Connect to Atlas DB");
  } catch (err) {
    log.info(err.message);
    log.error("Error connecting to DB");
    process.exit(1);
  }
};

export default connectToDB;
