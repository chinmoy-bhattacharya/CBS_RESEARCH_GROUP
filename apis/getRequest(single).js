import axios from "@/config/axios";
import PropTypes from "prop-types";

const getRequest_single = async (url, requireId) => {
  try {
    const res = await axios.get(`${url}/${requireId}`);
    const apiRes = await res.data;
    return apiRes;
  } catch (error) {
    console.log(error.message);
    throw new Error("Sorry we are unable to fetching");
  }
};
getRequest_single.propType = {
  url: PropTypes.string,
  requireId: PropTypes.string,
};

export default getRequest_single;
