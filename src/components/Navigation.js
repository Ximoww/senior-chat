import React from "react";
import "../styles/navigation.css";
import profile from "../styles/assets/profile.png";
import amis from "../styles/assets/friend.png";
import messagerie from "../styles/assets/messagerie.png";

const Navigation = () => {
  return (
    <div className="nav">
      <div className="navigation">
        <div className="container">
          <img src={profile} alt="" className="profile" />
        </div>
        <div className="container">
          <img src={messagerie} alt="" className="messagerie" />
        </div>
        <div className="container">
          <img src={amis} alt="" className="amis" />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
