import React from "react";
import { bannerNews } from "../../news-api-data/banner";

function NewsBanner() {
  return (
    <div className="px-4 md:px-20">
      <div className="flex gap-5 md:gap-10 flex-wrap lg:flex-nowrap">
        {bannerNews.map((item, index) => (
          <div key={index} className="mt-8 ">
            <div className="">
              <img
                src={item.photo_url}
                alt="News Img"
                className="rounded-md hover:scale-175 transition-all duration-300 h-auto lg:h-80 w-full object-cover border border-[#0F925C]"
              />

              <div className="flex justify-between flex-wrap mt-2">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <span className="font-semibold text-[#0F925C]">
                    {" "}
                    Source Name:
                  </span>{" "}
                  {item.source_name}
                </p>
                <p className="text-sm text-gray-800 dark:text-gray-300 text-start">
                  <span className="font-semibold text-[#0F925C]"> Date:</span>{" "}
                  {item.published_datetime_utc
                    ? item.published_datetime_utc.toString().slice(0, 10)
                    : ""}
                </p>
              </div>

              <div className="mt-1">
                <a href={item.source_url} target="blank" title="Open Link">
                  <p className="text-left text-base font-semibold text-gray-800 dark:text-gray-300 hover:text-red-400 dark:hover:text-red-400  transition-all duration-200 ">
                    {item.snippet ? item.snippet.toString().slice(0, 120) : ""}
                    ...
                  </p>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewsBanner;
