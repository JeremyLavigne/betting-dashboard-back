import { Request, Response } from "express";
import MatchPlayed from "../models/matchPlayed";
import { IMatchPlayed } from "../ts/app.types";

const getAll = (req: Request, res: Response): void => {
  MatchPlayed.find()
    .then((matchesPlayed: Array<IMatchPlayed>) => {
      res.status(200).send(matchesPlayed);
    })
    .catch(() => {
      res.status(404).send("Error");
    });
};

const getAllByChamp = (req: Request, res: Response): void => {
  MatchPlayed.find({ championship: req.params.champ })
    .then((matchesPlayed: Array<IMatchPlayed>) => {
      res.status(200).send(matchesPlayed);
    })
    .catch(() => {
      res.status(404).send("Error");
    });
};

const createMany = (req: Request, res: Response): void => {
  MatchPlayed.insertMany(req.body)
    .then((matchesPlayed) => {
      res.status(201).send(matchesPlayed);
    })
    .catch(() => {
      res.status(400).send("Error");
    });
};

const deleteAllByChamp = (req: Request, res: Response): void => {
  MatchPlayed.deleteMany({ championship: req.params.champ })
    .then(() => {
      res.status(202).send("dropped all table");
    })
    .catch(() => {
      res.status(400).send("Error");
    });
};

export default {
  getAll,
  getAllByChamp,
  createMany,
  deleteAllByChamp,
};
