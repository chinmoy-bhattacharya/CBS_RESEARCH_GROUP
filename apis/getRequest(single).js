import axios from "@/config/axios";

const getRequest_single = async (url, requireId) => {
  try {
    const res = await axios.get(`${url}/${requireId}`);
    const apiRes = await res.data;
    return apiRes;
  } catch (error) {
    console.log(error);
    throw new Error("Sorry we are unable to fetching");
  }
};

export default getRequest_single;
