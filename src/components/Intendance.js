import React from "react";
import "./Notification_bouton.scss";
import intendance from '../pictures/intendance.png'

const Intendance = () => {
    return (
      <div className="Two">
        <div className="image intendance">
          <img
            alt=""
            src={intendance} 
          />
        </div>
        <p className="mot">Intendance</p>
      </div>
    );
};

export default Intendance;