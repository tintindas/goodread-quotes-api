import express, { Application, Request, Response } from "express";

const app: Application = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(5500, () => {
  console.log(`Server started on port 5500`);
});
