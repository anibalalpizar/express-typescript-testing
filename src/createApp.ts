import express from "express";
import usersRoutes from "./routes/users";

export function createApp() {
  const app = express();

  app.use(express.json());

  app.use("/api/users", usersRoutes);

  return app;
}
