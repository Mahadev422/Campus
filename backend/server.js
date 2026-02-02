import express from "express";
import { configDotenv } from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import path from 'path';
import { fileURLToPath } from "url";
// local file
import clubRouter from "./src/routes/club.route.js";
import authRouter from "./src/routes/auth.route.js";
import userRouter from "./src/routes/user.route.js";
import eventRouter from "./src/routes/event.route.js";

configDotenv();

const app = express();
app.use(express.json());
app.use(cookieParser());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get("/", (req, res) => {
  console.log("Hii");
  return res.json({ ok: true, msg: "Hii" });
});
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/club", clubRouter);
app.use("/api/event", eventRouter);

app.use(express.static(path.join(__dirname, '../frontend/dist')));

app.get("/*", (req, res) => {
  res.sendFile(
    path.join(__dirname, "../frontend/dist/index.html")
  );
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.info("Connected");

    // listening app
    const PORT = process.env.PORT;
    app.listen(PORT, () => {
      console.log(`Server is runnig  in http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error(err.message);
  });
