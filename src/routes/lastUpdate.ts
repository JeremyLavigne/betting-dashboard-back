import express from "express";

import lastUpdateCtrl from "../controllers/lastUpdate";

const router = express.Router();

router.get("/", lastUpdateCtrl.getAll);

router.get("/:champ", lastUpdateCtrl.getAllByChamp);

router.post("/", lastUpdateCtrl.createMany);

router.delete("/:champ", lastUpdateCtrl.deleteAllByChamp);

export default router;
