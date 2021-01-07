import express from "express";

import lastUpdateCtrl from "../controllers/lastUpdate";

const router = express.Router();

router.get("/", lastUpdateCtrl.getAll);

router.get("/:champ", lastUpdateCtrl.getByChamp);

router.post("/", lastUpdateCtrl.createForChamp);

router.delete("/:champ", lastUpdateCtrl.deleteByChamp);

export default router;
