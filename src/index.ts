import express from "express";
import usersRoutes from "./routes/users";

const app = express();

app.use("/api/users", usersRoutes);

const PORT = 3000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
