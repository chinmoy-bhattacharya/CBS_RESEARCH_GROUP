import axios from "@/config/axios";

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

export default getRequest_all;
