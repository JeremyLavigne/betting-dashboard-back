import mongoose from "mongoose";

export interface ILastUpdate extends mongoose.Document {
  championship: string;
  date: Date;
}
