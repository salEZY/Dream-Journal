import mongoose from "mongoose";
import { DreamDocument } from "../interfaces/dream.interface";

const dreamSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
    minLength: 4,
  },
  description: {
    type: String,
    required: true,
    minLength: 10,
    maxLength: 200,
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
