import express from "express";

import matchPlatedCtrl from "../controllers/matchPlayed";

const router = express.Router();

router.get("/", matchPlatedCtrl.getAll);

router.get("/:champ", matchPlatedCtrl.getAllByChamp);

router.post("/", matchPlatedCtrl.createMany);

router.delete("/:champ", matchPlatedCtrl.deleteAllByChamp);

export default router;
