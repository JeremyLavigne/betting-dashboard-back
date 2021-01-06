import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import { json } from "body-parser";

// Routes
import lastUpdateRouter from "./routes/lastUpdate";

dotenv.config();
const app = express();

// Database
mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.tjm5l.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("connected to mongo");
  }
);

app.use(json());
app.use("/api/last-update", lastUpdateRouter);

app.listen(3000, () => {
  console.log("server is listening port 3000");
});
