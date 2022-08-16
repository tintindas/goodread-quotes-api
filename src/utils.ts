import axios from "axios";

const baseUrl =
  "https://www.goodreads.com/search?q=QUERY&search_type=quotes&tab=quotes&utf8=%E2%9C%93";

const getUrl = (baseUrl: string, query: string) => {
  return baseUrl.replace("QUERY", query);
};

const addPageNumberToUrl = (url: string, pageNumber: string) => {
  return `${url}&page=${pageNumber}`;
};

const getMarkup = async (url: string) => {
  const res = await axios.get(url);
  const page = await res.data;
  return page;
};

export { getUrl, getMarkup, addPageNumberToUrl };
