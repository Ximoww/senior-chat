import React from "react";
import InfoBar from "../components/InfoBar";
import Navigation from "../components/Navigation";
import "../styles/profile.css";
import pdp from "../styles/assets/pdp.png";
import fakeimg from "../styles/assets/fake-img.png";

const Profile = () => {
  return (
    <div>
      <Navigation />
      <InfoBar />

      <div className="info">
        <img src={pdp} alt="" className="pdp" />
        <h1 className="name">Xx_Gerard_du_59xX</h1>
        <div className="info-stat">
          <h2>Abonnées : 542</h2>
          <h2>Likes : 8541</h2>
        </div>
        <h3 className="historique-p">Historique de post</h3>
        <div className="fake-post">
          <img src={fakeimg} alt="" className="fake-img" />
          <div className="description">
            <p>Moi à la plage avec les petits !!!!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
