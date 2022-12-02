import React from "react";
import "../styles/navigation.css";
import profile from "../styles/assets/profile.png";
import amis from "../styles/assets/friend.png";
import messagerie from "../styles/assets/messagerie.png";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="nav">
      <div className="navigation">
        <div className="container">
          <NavLink to="/senior-chat/profile">
            <img src={profile} alt="" className="profile" />
          </NavLink>
        </div>

        <div className="container">
          <NavLink to="/senior-chat/messagerie">
            <img src={messagerie} alt="" className="messagerie" />
          </NavLink>
        </div>
        <div className="container">
          <NavLink to="/senior-chat/amis">
            <img src={amis} alt="" className="amis" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
