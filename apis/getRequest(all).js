import axios from "@/config/axios";
import PropTypes from "prop-types";

const getRequest_all = async (url) => {
  try {
    const res = await axios.get(url);
    const apiRes = await res.data;
    return apiRes;
  } catch (error) {
    console.log(error);
    throw new Error("Sorry we are unable to fetching");
  }
};
getRequest_all.propType = {
  url: PropTypes.string,
};
export default getRequest_all;
