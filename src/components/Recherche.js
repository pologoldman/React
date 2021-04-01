import React from "react";
import './Recherche.scss';
import loupe from '../pictures/loupe.png'
const Recherche = () => {
  return (
    <div className="recherche">
      <img
        alt=""
        className="loupe311"
        src={loupe}
      />
      <p className="title_r">Recherche</p>
    </div>
  );
};

export default Recherche;