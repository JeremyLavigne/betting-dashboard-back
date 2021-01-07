import mongoose from "mongoose";

export interface ILastUpdate extends mongoose.Document {
  championship: string;
  date: Date;
}

export interface INextMatch extends mongoose.Document {
  championship: string;
  date: Date;
  homeTeam: string;
  awayTeam: string;
  oddH: number;
  oddD: number;
  oddA: number;
  fairOddH: number;
  betAmount: number;
  betOn: boolean;
}
