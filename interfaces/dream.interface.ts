import mongoose from "mongoose";

export interface DreamDocument extends mongoose.Document {
  _id: string;
  title: string;
  description: string;
  date: string;
  type: string;
}
