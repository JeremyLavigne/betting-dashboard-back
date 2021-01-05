import express, { Request, Response } from "express";

const router = express.Router();

router.get("/api/last-update", (req: Request, res: Response) => {
  return res.send("last update got");
});

router.post("/api/last-update", (req: Request, res: Response) => {
  return res.send("last update created");
});

export default router;
