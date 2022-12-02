import React from "react";
import InfoBar from "../components/InfoBar";
import Navigation from "../components/Navigation";
import "../styles/navigation.css";

const Home = () => {
  return (
    <div className="home">
      <InfoBar />
      <Navigation />
    </div>
  );
};

export default Home;
