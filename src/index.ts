import express, { Application, Request, Response } from "express";

const app: Application = express();

// routes
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.get("/random", (req: Request, res: Response) => {
  res.send("Return a random quote.");
});

app.get("/query", (req: Request, res: Response) => {
  res.send("Return quote pertaining to query string");
});

app.listen(5500, () => {
  console.log(`Server started on port 5500`);
});
