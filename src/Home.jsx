import React, { createContext, useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Latest from "./components/Latest";
import Navbar from "./components/Navbar";

export const NewsContext = createContext(null);

const Home = () => {
  const [news, setNews] = useState([]);
  const location = useLocation();
  useEffect(() => {
    fetch("news.json")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);

  const newsInfo = {news,setNews}

  const showLatest = [
    "/login",
    "/register"
  ].includes(location.pathname);

  const showHeader = [
    "/login",
    "/register"
  ].includes(location.pathname);

  return (
    <NewsContext.Provider value={newsInfo}>
      {
        !showHeader && <Header />
      }
      {
        !showLatest && <Latest />
      }
      <Navbar />
      <Outlet />
      <Footer />
    </NewsContext.Provider>
  );
};

export default Home;
