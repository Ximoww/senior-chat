import React from "react";
import InfoBar from "../components/InfoBar";
import Navigation from "../components/Navigation";
import "../styles/home.css";
import fakeimg from "../styles/assets/fake-img.png";
import repasfamille from "../styles/assets/repas-famille.png";

const Home = () => {
  return (
    <div className="home">
      <div className="fake-post2">
        <img src={fakeimg} alt="" className="fake-img" />
        <div className="description">
          <p>Moi à la plage avec les petits !!!!</p>
        </div>
      </div>
      <div className="fake-post1">
        <img src={repasfamille} alt="" className="fake-img" />
        <div className="description">
          <p>Au repas de famille chez bertrand !</p>
        </div>
      </div>

      <InfoBar />
      <Navigation />
    </div>
  );
};

export default Home;
