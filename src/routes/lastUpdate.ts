import express, { Request, Response } from "express";

import LastUpdate from "../models/lastUpdate";

const router = express.Router();

router.get("/api/last-update", (req: Request, res: Response) => {
  LastUpdate.find().then((listOfLastUpdates: Response) => {
    return res.status(200).send(listOfLastUpdates);
  });
});

router.post("/api/last-update", (req: Request, res: Response) => {
  const test = { championship: "PL", date: new Date() };
  LastUpdate.create(test).then((t) => {
    return res.status(201).send(t);
  });
});

router.delete("/api/last-update", (req: Request, res: Response) => {
  LastUpdate.deleteMany().then(() => {
    return res.status(202).send("dropped all table");
  });
});

export default router;
