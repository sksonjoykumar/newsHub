export const fetchData = async (url, onSuccess, onError) => {
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "e9fb446b2fmsh351a037ba5bead3p1e9a18jsn14a3e05e7f6c",
      "x-rapidapi-host": "real-time-news-data.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP Error status ${response.status}`);
    }
    const data = await response.json();
    onSuccess(data);
  } catch (error) {
    onError(error.message);
  }
};
