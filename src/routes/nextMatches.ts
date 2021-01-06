import express from "express";

import nextMatchesCtrl from "../controllers/nextMatches";

const router = express.Router();

router.get("/", nextMatchesCtrl.getAll);

router.get("/:champ", nextMatchesCtrl.getAllByChamp);

router.post("/", nextMatchesCtrl.createMany);

router.delete("/:champ", nextMatchesCtrl.deleteAllByChamp);

export default router;
