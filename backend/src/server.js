import cors from "cors";
import express from "express";
import mongoose from "mongoose";

import configureRoutes from "./routes/routes.js";

mongoose.connect("mongodb://localhost:27017/tasks");

const app = express().use(express.json()).use(cors());

configureRoutes(app);

app.listen(4321);
