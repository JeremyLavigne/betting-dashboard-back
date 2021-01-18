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
  fairOddD: number;
  fairOddA: number;
  betAmountH: number;
  betAmountD: number;
  betAmountA: number;
  betOnH: boolean;
  betOnD: boolean;
  betOnA: boolean;
}

export interface IMatchPlayed extends mongoose.Document {
  id: string;
  homeTeam: string;
  awayTeam: string;
  date: Date;
  homeTeamGoalsFor: number;
  awayTeamGoalsFor: number;
  homeTeamGoalsAgainst: number;
  awayTeamGoalsAgainst: number;
  result: string;
  homeTeamShotsOnTarget: number;
  awayTeamShotsOnTarget: number;
  homeTeamCorner: number;
  awayTeamCorner: number;
  homeTeamShotsOff: number;
  awayTeamShotsOff: number;
  oddH: number;
  oddD: number;
  oddA: number;
  ppsResult: string;
  homeTeamMatchNumber: number;
  awayTeamMatchNumber: number;
  homeTeamPpsPointsTotal: number;
  awayTeamPpsPointsTotal: number;
  homeTeamGameFormPoints: number;
  awayTeamGameFormPoints: number;
  homeTeamGameFormPointsOn6: number;
  awayTeamGameFormPointsOn6: number;
  homeTeamPowerRating: number;
  awayTeamPowerRating: number;
  homeTeamPowerRatingAdjustment: number;
  awayTeamPowerRatingAdjustment: number;
}
