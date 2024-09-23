import express from "express";
import userRoutes from "./routes/users.routes.js";
import morgan from "morgan";

const app = express();

app.use(morgan("dev"));

app.use(express.json());

app.use(userRoutes);

export default app;
