import express, { Request, Response } from "express";
import "dotenv/config";

import { routes } from "./routes";

const app = express();

const PORT = process.env.NODE_PORT || 3000;

app.use(express.json());
app.use(routes);

app.get("/", (_req: Request, res: Response) => {
  return res.json({ running: true });
});

app.listen(PORT, () => {
  if (process.env.NODE_ENV === "development") {
    console.log(`Server running on http://localhost:${PORT}!`);
  }
});
