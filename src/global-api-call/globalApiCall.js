export const fetchData = async (url, onSuccess, onError) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP Error status ${response.status}`);
    }
    const data = await response.json();
    onSuccess(data);
  } catch (error) {
    onError(error.message);
  }
};
