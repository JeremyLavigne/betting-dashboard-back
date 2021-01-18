import { Request, Response } from "express";
import NextMatch from "../models/nextMatches";
import { INextMatch } from "../ts/app.types";

const getAll = (req: Request, res: Response): void => {
  NextMatch.find()
    .then((nextMatches: Array<INextMatch>) => {
      res.status(200).send(nextMatches);
    })
    .catch(() => {
      res.status(404).send("Error");
    });
};

const getAllByChamp = (req: Request, res: Response): void => {
  console.log(req.params.champ);
  NextMatch.find({ championship: req.params.champ })
    .then((nextMatches: Array<INextMatch>) => {
      res.status(200).send(nextMatches);
    })
    .catch(() => {
      res.status(404).send("Error");
    });
};

const createMany = (req: Request, res: Response): void => {
  NextMatch.insertMany(req.body)
    .then((nextMatches) => {
      res.status(201).send(nextMatches);
    })
    .catch(() => {
      res.status(400).send("Error");
    });
};

const deleteAllByChamp = (req: Request, res: Response): void => {
  NextMatch.deleteMany({ championship: req.params.champ })
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
