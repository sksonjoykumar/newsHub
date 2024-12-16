import React, { useContext } from "react";
import { StoreContext } from "../../global-context/GlobalContext";

function NewsBanner() {
  const { worldNewsData } = useContext(StoreContext);

  if (
    !worldNewsData ||
    !worldNewsData.data ||
    worldNewsData.data.length === 0
  ) {
    return <div></div>;
  }

  return (
    <div className="px-4 md:px-20">
      <div className="mt-8 flex gap-6 flex-wrap sm:flex-nowrap">
        <div className="item-1">
          <img
            src={worldNewsData.data[0].image}
            alt="News Img"
            className="rounded-md hover:scale-175 transition-all duration-300 h-auto lg:h-80 w-full object-cover border border-[#0F925C]"
          />

          <div className="flex justify-between flex-wrap mt-2">
            <p className="text-sm text-gray-800 dark:text-gray-300">
              <span className="font-semibold">Author: </span>
              {worldNewsData.data[0].author}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              <span className="font-semibold text-[#0F925C]"> Source:</span>{" "}
              {worldNewsData.data[0].source}
            </p>
          </div>
          <div className="mt-1">
            <p className="text-sm text-gray-800 dark:text-gray-300 text-start">
              <span className="font-semibold text-[#0F925C]"> Date:</span>{" "}
              {worldNewsData.data[0].published_at.slice(0, 10)}
            </p>
          </div>
          <div className="mt-1">
            <a
              href={worldNewsData.data[0].url}
              target="blank"
              title="Open Link"
            >
              <p className="text-left text-base font-semibold text-gray-800 dark:text-gray-300 hover:text-red-400 dark:hover:text-red-400  transition-all duration-200 ">
                {worldNewsData.data[0].description.slice(0, 180)}...
              </p>
            </a>
          </div>
        </div>
        <div className="item-2">
          <img
            src={worldNewsData.data[1].image}
            alt="News Img"
            className="rounded-md hover:scale-175 transition-all duration-300 h-auto lg:h-80 w-full object-cover border border-[#0F925C]"
          />

          <div className="flex justify-between flex-wrap mt-2">
            <p className="text-sm text-gray-800 dark:text-gray-300">
              <span className="font-semibold">Author: </span>
              {worldNewsData.data[1].author}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              <span className="font-semibold text-[#0F925C]"> Source:</span>{" "}
              {worldNewsData.data[1].source}
            </p>
          </div>
          <div className="mt-1">
            <p className="text-sm text-gray-800 dark:text-gray-300 text-start">
              <span className="font-semibold text-[#0F925C]"> Date:</span>{" "}
              {worldNewsData.data[1].published_at.slice(0, 10)}
            </p>
          </div>
          <div className="mt-1">
            <a
              href={worldNewsData.data[1].url}
              target="blank"
              title="Open Link"
            >
              <p className="text-left text-base font-semibold text-gray-800 dark:text-gray-300 hover:text-red-400 dark:hover:text-red-400  transition-all duration-200 ">
                {worldNewsData.data[1].description.slice(0, 180)}...
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsBanner;
