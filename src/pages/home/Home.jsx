import React from "react";
import NewsDate from "../../components/news-data/NewsDate";
import NewsBanner from "../../components/news-banner/NewsBanner";

function Home() {
  return (
    <div>
      <NewsBanner/>
      <NewsDate />
    </div>
  );
}

export default Home;
