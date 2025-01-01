import React from "react";
import NewsBanner from "../../components/news-banner/NewsBanner";
import NewsData from "../../components/news-data/NewsData";

function Home() {
  return (
    <div>
      <NewsBanner />
      <NewsData heading={"World Popular news"} />
    </div>
  );
}

export default Home;
