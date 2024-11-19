import express, { Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();
// Create an Express application
const app = express();

const PORT = process.env.PORT || 3000;

console.log(`PORT from env file: ${process.env.PORT}`);

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
