import mongoose from "mongoose";
import { DreamDocument } from "../interfaces/dream.interface";

const dreamSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  type: {
    type: String,
    enum: ["happy", "sad", "exciting", "scary"],
    default: "happy",
  },
});

const Dream = mongoose.model<DreamDocument>("Dream", dreamSchema);
export default Dream;
