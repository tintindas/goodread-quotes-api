import axios from "axios";

const getUrl = (baseUrl: string, query: string) => {
  return baseUrl.replace("QUERY", query);
};

const addPageNumberToUrl = (url: string, pageNumber: string) => {
  return `${url}&page=${pageNumber}`;
};

const getMarkup = async (url: string) => {
  const res = await axios.get(url);
  const page: string = await res.data;
  return page;
};

export { getUrl, getMarkup, addPageNumberToUrl };
