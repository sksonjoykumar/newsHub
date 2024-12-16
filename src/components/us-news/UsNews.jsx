import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { fetchData } from "../../global-api-call/globalApiCall";
import { ScaleLoader } from "react-spinners";

function UsNews({ heading }) {
  const [usNewsData, setUsNewsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const onSuccess = (data) => {
      setUsNewsData(data);
      setError(null);
    };
    const onError = (error) => {
      setError(error.message);
      toast.error(error.Message);
    };

    const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=31646d6d1188473ba51430f3ead439c9`;

    setLoading(true);
    fetchData(url, onSuccess, onError).finally(() => setLoading(false));
  }, []);

  // loading
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <ScaleLoader color="#61C96F" loading size={80} speedMultiplier={1} />
      </div>
    );
  }

  // error
  if (error) {
    return toast.error(error.message);
  }

  // No articles found
  if (!usNewsData.articles || usNewsData.articles.length === 0) {
    return (
      <div className="text-gray-500 text-center my-14">No articles found.</div>
    );
  }

  return (
    <div className="px-4 md:px-20">
      <div className="heading my-5">
        <h1 className="font-inter font-semibold text-xl md:text-2xl text-[#FF014F] dark:text-[#3A80E9]">
          {heading}
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-7 mt-4">
        {usNewsData.articles.map((item, index) => (
          <div
            key={item.url || index}
            className="border dark:border-gray-700 p-3 rounded-md shadow-sm bg-white dark:bg-gray-800 hover:scale-175 transition-all duration-300"
          >
            <div className="flex gap-2 md:gap-4 font-inter">
              <a href={item.url} target="blank" title="Open Link">
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-300 hover:text-red-400 dark:hover:text-red-400  transition-all duration-200 ">
                  {item.title}
                </p>
              </a>
              <img
                src={item.urlToImage}
                alt="News Img"
                className="w-20 h-[5rem] rounded-sm object-cover border dark:border-gray-700 text-sm text-gray-600 dark:text-gray-400 text-center"
              />
            </div>

            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 leading-tight">
              {item.content}
            </p>

            <div className="flex justify-between flex-wrap mt-2">
              <p className="text-sm text-gray-800 dark:text-gray-300">
                <span className="font-semibold">Author: </span>
                {item.author}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <span className="font-semibold text-[#0F925C]"> Source:</span>{" "}
                {item.source.name}
              </p>
            </div>

            <div className="mt-1">
              <p className="text-sm text-gray-800 dark:text-gray-300 text-end">
                <span className="font-semibold"> Date:</span>{" "}
                {item.publishedAt.slice(0, 10)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UsNews;
