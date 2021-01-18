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

const getByChamp = (req: Request, res: Response): void => {
  LastUpdate.find({ championship: req.params.champ })
    .then((lastUpdate: ILastUpdate) => {
      res.status(200).send(lastUpdate);
    })
    .catch(() => {
      res.status(404).send("Error");
    });
};

const createForChamp = (req: Request, res: Response): void => {
  LastUpdate.create(req.body)
    .then((lastUpdate: ILastUpdate) => {
      res.status(201).send(lastUpdate);
    })
    .catch(() => {
      res.status(400).send("Error");
    });
};

const updateForChamp = (req: Request, res: Response): void => {
  LastUpdate.updateOne(req.body)
    .then((lastUpdate: ILastUpdate) => {
      res.status(201).send(lastUpdate);
    })
    .catch(() => {
      res.status(400).send("Error");
    });
};

const deleteByChamp = (req: Request, res: Response): void => {
  LastUpdate.deleteMany({ championship: req.params.champ })
    .then(() => {
      res.status(202).send("Deleted");
    })
    .catch(() => {
      res.status(400).send("Error");
    });
};

export default {
  getAll,
  getByChamp,
  createForChamp,
  updateForChamp,
  deleteByChamp,
};
