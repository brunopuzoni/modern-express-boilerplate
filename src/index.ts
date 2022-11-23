import express, { Request, Response } from "express";
import "dotenv/config";
import "express-async-errors";

import { routes } from "./routes";

const app = express();

const PORT = process.env.NODE_PORT || 3000;

app.use(express.json());
app.use(routes);

app.get("/", (_req: Request, res: Response) => {
  return res.json({ running: true });
});

app.use((err: Error, _req: Request, res: Response) => {
  if (err instanceof Error) {
    return res.status(400).json({
      message: err.message,
    });
  }

  return res.status(500).json({
    status: "error",
    message: "Internal Server Error",
  });
});

app.listen(PORT, () => {
  if (process.env.NODE_ENV === "development") {
    console.log(`Server running on http://localhost:${PORT}!`);
  }
});
