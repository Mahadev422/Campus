import express from "express";
import { configDotenv } from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import path from "path";
import { fileURLToPath } from "url";

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


app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/club", clubRouter);
app.use("/api/event", eventRouter);


const distPath = path.join(__dirname, "../frontend/dist");
app.use(express.static(distPath));


app.use((req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});


mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.info("Connected");

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error(err.message);
  });
