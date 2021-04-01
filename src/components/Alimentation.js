import React from "react";
import "./Notification_bouton.scss";
import alimentation from '../pictures/alimentation.png'

const Alimentation = () => {
    return (
      <div className="Two">
        <div className="image alimentation">
          <img
            alt=""
            src={alimentation} 
          />
        </div>
        <p className="mot">Alimentation</p>
      </div>
    );
};

export default Alimentation;