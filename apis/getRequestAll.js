import axios from "@/config/axios.js";
import PropTypes from "prop-types";

const getRequest_all = async (url) => {
  try {
    const res = await axios.get(url, { cache: "no-store" });
    const apiRes = await res.data;
    return apiRes;
  } catch (error) {
    throw new Error(error);
  }
};
getRequest_all.propType = {
  url: PropTypes.string,
};
export default getRequest_all;
