import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { fetchData } from "../global-api-call/globalApiCall";
import { newNewsData } from "../news-api-data/newsData";

// store context
export const StoreContext = createContext();
function GlobalContext({ children }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [newsData, setNewsData] = useState([]);

  // useEffect(() => {
  //   const onSuccess = (data) => {
  //     setNewsData(data);
  //     setError(null);
  //   };

  //   const onError = (errorMessage) => {
  //     setError(errorMessage);
  //     toast.error(errorMessage);
  //   };

  //   const url =
  //     "https://real-time-news-data.p.rapidapi.com/top-headlines?limit=100&country=US&lang=en";

  //   setLoading(true);
  //   fetchData(url, onSuccess, onError).finally(() => setLoading(false));
  // }, []);

  // context value
  const contextValue = {
    loading,
    setLoading,
    error,
    setError,
    newNewsData,
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
}

export default GlobalContext;
