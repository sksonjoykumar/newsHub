import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { fetchData } from "../global-api-call/globalApiCall";

// store context
export const StoreContext = createContext();
function GlobalContext({ children }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const onSuccess = (data) => {
      setNewsData(data);
      setError(null);
    };

    const onError = (errorMessage) => {
      setError(errorMessage);
      toast.error(errorMessage);
    };
    const url = `https://newsapi.org/v2/everything?q=apple&from=2024-12-14&to=2024-12-14&sortBy=popularity&apiKey=31646d6d1188473ba51430f3ead439c9`;

    setLoading(true);
    fetchData(url, onSuccess, onError).finally(() => setLoading(false));
  }, []);

  // context value
  const contextValue = { loading, error, newsData };
  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
}

export default GlobalContext;
