const getRequest_single = async (url, requireId, retries = 3) => {
  try {
    const response = await fetch(`${url}/${requireId}`, {
      method: "GET",
      next: { revalidate: 120 },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    if (retries > 0 && error.code === "ECONNRESET") {
      console.warn(`Retrying... (${retries} attempts left)`);
      return await getRequest_single(url, requireId, retries - 1);
    }
    console.error(error.message);
    throw new Error("Sorry, we are unable to fetch the data.");
  }
};

export default getRequest_single;
