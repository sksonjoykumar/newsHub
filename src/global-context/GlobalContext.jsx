import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { fetchData } from "../global-api-call/globalApiCall";

// store context
export const StoreContext = createContext();
function GlobalContext({ children }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [worldNewsData, setWorldNewsData] = useState([]);
  const [limit, setLimit] = useState(100);

  useEffect(() => {
    const onSuccess = (data) => {
      setWorldNewsData(data);
      setError(null);
    };
    const onError = (error) => {
      setError(error);
      toast.error(error);
    };
    const url = `https://api.mediastack.com/v1/news?access_key=e3bb6b8f2a8baed3aa5bed26ddaaf131&limit=${limit}`;

    setLoading(true);
    fetchData(url, onSuccess, onError).finally(() => setLoading(false));
  }, [limit]);


  // context value
  const contextValue = {
    loading,
    setLoading,
    error,
    setError,
    worldNewsData,
    setLimit,
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
}

export default GlobalContext;
