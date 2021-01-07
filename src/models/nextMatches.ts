import mongoose from "mongoose";
import { INextMatch } from "../ts/app.types";

const nextMatchesSchema = new mongoose.Schema({
  championship: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  homeTeam: {
    type: String,
    required: true,
  },
  awayTeam: {
    type: String,
    required: true,
  },
  oddH: {
    type: Number,
    required: true,
  },
  oddD: {
    type: Number,
    required: true,
  },
  oddA: {
    type: Number,
    required: true,
  },
  fairOddH: {
    type: Number,
    required: true,
  },
  betAmount: {
    type: Number,
    required: true,
  },
  betOn: {
    type: Boolean,
    required: true,
  },
});

const LastUpdate = mongoose.model<INextMatch>("NextMatches", nextMatchesSchema);

export default LastUpdate;
