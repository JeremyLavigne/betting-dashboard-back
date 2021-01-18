import mongoose from "mongoose";
import { ILastUpdate } from "../ts/app.types";

const lastUpdateSchema = new mongoose.Schema({
  championship: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});

const LastUpdate = mongoose.model<ILastUpdate>("LastUpdate", lastUpdateSchema);

export default LastUpdate;
