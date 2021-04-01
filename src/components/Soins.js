import React from "react";
import "./Notification_bouton.scss";
import soins from '../pictures/soins.png'

const Soins = () => {
    return (
      <div className="Two">
        <div className="image soins">
          <img
            alt=""
            src={soins} 
          />
        </div>
        <p className="mot">Soins</p>
      </div>
    );
};

export default Soins;