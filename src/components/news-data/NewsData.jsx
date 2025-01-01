import React, { useContext, useState } from "react";
import { StoreContext } from "../../global-context/GlobalContext";
import { ScaleLoader } from "react-spinners";
import { toast } from "react-toastify";
import Pagination from "../pagination/Pagination";

function NewsData({ heading }) {
  const { loading, error, newNewsData } = useContext(StoreContext);
  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 16;

  const startIndex = (currentPage - 1) * itemPerPage;
  const endIndex = startIndex + itemPerPage;

  const currentItems = Array.isArray(newNewsData)
    ? newNewsData.slice(startIndex, endIndex)
    : [];

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <ScaleLoader color="#61C96F" loading size={80} speedMultiplier={1} />
      </div>
    );
  }

  if (error) {
    return toast.error(error.message);
  }

  if (!newNewsData || newNewsData.length === 0) {
    return (
      <div className="text-gray-500 text-center my-14">No articles found.</div>
    );
  }

  return (
    <>
      <div className="px-4 md:px-20 mt-5">
        <h1 className="font-inter font-semibold text-2xl md:text-3xl text-[#FF014F] dark:text-[#3A80E9]">
          {heading}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-7 mt-4">
          {currentItems.map((item, index) => (
            <div
              key={item.url || index}
              className="border dark:border-gray-700 p-3 rounded-md shadow-sm bg-white dark:bg-gray-800 hover:scale-175 transition-all duration-300"
            >
              <div className="flex gap-2 md:gap-4 font-inter">
                <a href={item.link} target="blank" title="Open Link">
                  <p className="text-sm font-semibold text-gray-800 dark:text-gray-300 hover:text-red-400 dark:hover:text-red-400 transition-all duration-200">
                    {item.title}
                  </p>
                </a>
                <img
                  src={item.photo_url}
                  alt="News Img"
                  className="w-20 h-[5rem] rounded-sm object-cover border dark:border-gray-700 text-sm text-gray-600 dark:text-gray-400 text-center"
                />
              </div>

              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 leading-tight">
                {item.snippet ? item.snippet.toString().slice(0, 180) : ""}...
              </p>

              <div className="flex justify-between flex-wrap mt-2">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <span className="font-semibold text-[#0F925C]"> Source:</span>{" "}
                  {item.source_name}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300 hover:text-red-400 dark:hover:text-red-400 transition-all duration-200">
                  <a href={item.source_url}>
                    <span className="font-semibold underline">Source link</span>
                  </a>
                </p>
              </div>

              <div className="mt-1">
                <p className="text-sm text-gray-800 dark:text-gray-300">
                  <span className="font-semibold"> Date:</span>{" "}
                  {item.published_datetime_utc
                    ? item.published_datetime_utc.toString().slice(0, 10)
                    : "Unknown"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Pagination
        totalItems={newNewsData.length || 0}
        itemPerPage={itemPerPage}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
    </>
  );
}
export default NewsData;