import React from "react";
import notification from "./notification.png";

const Notification = () => {
  return (
    <div className="notification">
      <img src={notification} alt="notification" className="notification-img" />
    </div>
  );
};

export default Notification;
