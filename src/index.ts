import express from "express";
import mongoose from "mongoose";
import { json } from "body-parser";

import lastUpdateRouter from "./routes/lastUpdate";

const app = express();
app.use(json());

app.use(lastUpdateRouter);

mongoose.connect(
  "mongodb://localhost:27017/last-update",
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("connected to mongo");
  }
);

app.listen(3000, () => {
  console.log("server is listening port 3000");
});
