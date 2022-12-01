import React from "react";
import "../styles/info-bar.css";
import notification from "../styles/assets/notification.png";
import plusbutton from "../styles/assets/plus-button.png";

const InfoBar = () => {
  return (
    <div className="info-bar">
      <img
        src={notification}
        alt="notification-icon"
        className="notification"
      />
      <img src={plusbutton} alt="plus-button" className="plusbutton" />
    </div>
  );
};

export default InfoBar;
