import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import UsNews from "./components/us-news/UsNews";
import WorldNews from "./components/world-news/WorldNews";
import PoliticsNews from "./components/politics-news/PoliticsNews";
import BusinessNews from "./components/business-news/BusinessNews";
import EntertainmentNews from "./components/entertainment-news/EntertainmentNews";
import TravelNews from "./components/travel-news/TravelNews";
import SportsNews from "./components/sports-news/SportsNews";
import Footer from "./components/footer/Footer";
import TechNews from "./components/tech-news/TechNews";

function App() {
  return (
    <>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/us"
            element={<UsNews heading={" Popular USA News"} />}
          />
          <Route path="/world" element={<WorldNews />} />
          <Route path="/politics" element={<PoliticsNews />} />
          <Route path="/business" element={<BusinessNews />} />
          <Route
            path="/tech"
            element={<TechNews heading={"Popular Technology"} />}
          />
          <Route path="/entertainment" element={<EntertainmentNews />} />
          <Route path="/travel" element={<TravelNews />} />
          <Route path="/sports" element={<SportsNews />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
