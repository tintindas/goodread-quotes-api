import * as cheerio from "cheerio";

const buildQuoteArray = (markup: string) => {
  const quoteArray: Quote[] = [];
  const $ = cheerio.load(markup);
  $(".quoteText").each(function () {
    const innerText = $(this).text();
    const text = innerText.split('"')[1].trim();
    const author = innerText.split("—").slice(-1)[0].split("(")[0].trim();
    const sourceExists =
      innerText.split("—").slice(-1)[0].split("(").length > 1;
    const source = sourceExists
      ? innerText.split("—").slice(-1)[0].split("(")[1].split(")")[0]
      : undefined;

    const quote: Quote = source
      ? {
          text,
          author,
          source,
        }
      : { text, author };

    quoteArray.push(quote);
  });

  return quoteArray;
};
