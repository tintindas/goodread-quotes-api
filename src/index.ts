import express, { Application, Request, Response } from "express";
import { PORT, authors, baseUrl } from "./config";
import { getUrl, getMarkup } from "./utils";
import { buildQuoteArray } from "./scraper";

const app: Application = express();

// routes
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.get("/random", async (req: Request, res: Response) => {
  const query = authors[Math.floor(Math.random() * authors.length)];
  const url = getUrl(baseUrl, query);
  const markup = await getMarkup(url);
  const quotes = buildQuoteArray(markup);
  res.send(quotes[Math.floor(Math.random() * quotes.length)]);
});

app.get("/query", (req: Request, res: Response) => {
  res.send("Return quote pertaining to query string");
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
