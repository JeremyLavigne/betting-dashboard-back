import mongoose from "mongoose";
import { IMatchPlayed } from "../ts/app.types";

const matchPlayedSchema = new mongoose.Schema({
  id: { type: String, required: true },
  homeTeam: { type: String, required: true },
  awayTeam: { type: String, required: true },
  date: { type: Date, required: true },
  homeTeamGoalsFor: { type: Number, required: true },
  awayTeamGoalsFor: { type: Number, required: true },
  homeTeamGoalsAgainst: { type: Number, required: true },
  awayTeamGoalsAgainst: { type: Number, required: true },
  result: { type: String, required: true },
  homeTeamShotsOnTarget: { type: Number, required: true },
  awayTeamShotsOnTarget: { type: Number, required: true },
  homeTeamCorner: { type: Number, required: true },
  awayTeamCorner: { type: Number, required: true },
  homeTeamShotsOff: { type: Number, required: true },
  awayTeamShotsOff: { type: Number, required: true },
  oddH: { type: Number, required: true },
  oddD: { type: Number, required: true },
  oddA: { type: Number, required: true },
  ppsResult: { type: String, required: true },
  homeTeamMatchNumber: { type: Number, required: true },
  awayTeamMatchNumber: { type: Number, required: true },
  homeTeamPpsPointsTotal: { type: Number, required: true },
  awayTeamPpsPointsTotal: { type: Number, required: true },
  homeTeamGameFormPoints: { type: Number, required: true },
  awayTeamGameFormPoints: { type: Number, required: true },
  homeTeamGameFormPointsOn6: { type: Number, required: true },
  awayTeamGameFormPointsOn6: { type: Number, required: true },
  homeTeamPowerRating: { type: Number, required: true },
  awayTeamPowerRating: { type: Number, required: true },
  homeTeamPowerRatingAdjustment: { type: Number, required: true },
  awayTeamPowerRatingAdjustment: { type: Number, required: true },
});

const MatchPlayed = mongoose.model<IMatchPlayed>(
  "MatchPlayed",
  matchPlayedSchema
);

export default MatchPlayed;
