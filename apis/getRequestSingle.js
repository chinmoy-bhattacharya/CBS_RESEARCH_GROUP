const getRequest_single = async (url, requireId) => {
  try {
    const response = await fetch(`${url}/${requireId}`, {
      method: "GET",
      next: { revalidate: 120 },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json(); // Parse the JSON data
    return data; // Return the data directly
  } catch (error) {
    console.error(error.message); // Log the error for debugging
    throw new Error("Sorry, we are unable to fetch the data."); // Throw a user-friendly error
  }
};

export default getRequest_single;
