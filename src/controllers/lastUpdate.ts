import { Request, Response } from "express";
import LastUpdate from "../models/lastUpdate";
import { ILastUpdate } from "../ts/app.types";

const getAll = (req: Request, res: Response): void => {
  LastUpdate.find()
    .then((lastUpdates: Array<ILastUpdate>) => {
      res.status(200).send(lastUpdates);
    })
    .catch(() => {
      res.status(404).send("Error");
    });
};

const getAllByChamp = (req: Request, res: Response): void => {
  LastUpdate.find({ championship: req.params.champ })
    .then((lastUpdates: Array<ILastUpdate>) => {
      res.status(200).send(lastUpdates);
    })
    .catch(() => {
      res.status(404).send("Error");
    });
};

const createMany = (req: Request, res: Response): void => {
  LastUpdate.insertMany(req.body)
    .then((t) => {
      res.status(201).send(t);
    })
    .catch(() => {
      res.status(400).send("Error");
    });
};

const deleteAllByChamp = (req: Request, res: Response): void => {
  LastUpdate.deleteMany({ championship: req.params.champ })
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
