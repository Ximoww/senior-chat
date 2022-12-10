import React from "react";
import InfoBar from "../components/InfoBar";
import Navigation from "../components/Navigation";
import "../styles/messagerie.css";
import pdp1 from "../styles/assets/pdp1.png";
import pdp2 from "../styles/assets/pdp2.png";
const Messagerie = () => {
  return (
    <div>
      <Navigation />
      <InfoBar />

      <div className="pdp1">
        <img src={pdp1} alt="PDP Gerard" />
      </div>
      <div className="pdp2">
        <img src={pdp2} alt="PDP Evelyn" />
      </div>
      <div className="pdp3">
        <img src={pdp1} alt="PDP Gerard" />
      </div>

      <div className="msg">
        <div className="msg1">
          <p>
            Salut ! Evelyne c'est toujours OK pour allez chez bertrand ce samedi
            ?
          </p>
        </div>
        <div className="msg2">
          <p>Super elle sera ravie ! A ce samedi.</p>
        </div>
        <div className="msg3">
          <p>Salut Gerard ! Bien sur ! Tu ramenera la tchote si tu veut :)</p>
        </div>
      </div>
    </div>
  );
};

export default Messagerie;
