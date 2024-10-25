import axios from "@/config/axios";
import PropTypes from "prop-types";

const cache = {};

const getRequest_all = async (url) => {
  // Check if the URL is in the cache
  if (cache[url]) {
    // Optionally, start a background fetch to update cache
    fetchAndCache(url);
    return cache[url]; // Return cached data immediately
  }

  return await fetchAndCache(url);
};

const fetchAndCache = async (url) => {
  try {
    const res = await axios.get(url);
    const apiRes = res.data;

    // Store the result in the cache
    cache[url] = apiRes;

    return apiRes;
  } catch (error) {
    console.log(error);
    throw new Error("Sorry, we are unable to fetch data.");
  }
};

getRequest_all.propTypes = {
  url: PropTypes.string,
};

export default getRequest_all;
