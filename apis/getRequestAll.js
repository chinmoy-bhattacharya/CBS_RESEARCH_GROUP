import axios from "@/config/axios.js";

const getRequest_all = async (url) => {
  try {
    const res = await axios.get(url, { cache: "no-store" });
    return res.data; // Directly return the data
  } catch (error) {
    console.error("Error fetching data:", error); // Log the error for debugging
    throw error; // Rethrow the original error
  }
};

export default getRequest_all;
