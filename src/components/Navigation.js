import React from "react";
import "../styles/navigation.css";

const Navigation = () => {
  return (
    <div className="nav">
      <div className="navigation">
        <div className="container">
          <div className="profile"></div>
        </div>
        <div className="container">
          <div className="messagerie"></div>
        </div>
        <div className="container">
          <div className="amis"></div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
