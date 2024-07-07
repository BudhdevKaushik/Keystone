import express from "express";
import authRoutes from "./routes/authRoutes.mjs";

const app = express();

// middlewares
app.use(express.json());

// Un-Authorized Routes
app.use("/api/v1/auth", authRoutes);

//Authenticated Routes

export default app;
