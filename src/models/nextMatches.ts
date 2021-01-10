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
  fairOddD: {
    type: Number,
    required: true,
  },
  fairOddA: {
    type: Number,
    required: true,
  },
  betAmountH: {
    type: Number,
    required: true,
  },
  betAmountD: {
    type: Number,
    required: true,
  },
  betAmountA: {
    type: Number,
    required: true,
  },
  betOnH: {
    type: Boolean,
    required: true,
  },
  betOnD: {
    type: Boolean,
    required: true,
  },
  betOnA: {
    type: Boolean,
    required: true,
  },
});

const NextMatch = mongoose.model<INextMatch>("NextMatches", nextMatchesSchema);

export default NextMatch;
