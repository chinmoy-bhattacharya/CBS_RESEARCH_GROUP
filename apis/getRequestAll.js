const getRequest_all = async (url) => {
  try {
    const response = await fetch(url, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json(); // Parse the JSON data
    return data; // Directly return the data
  } catch (error) {
    console.error("Error fetching data:", error); // Log the error for debugging
    throw error; // Rethrow the original error
  }
};

export default getRequest_all;
