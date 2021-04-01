import React from "react";
import "./Utilisateur.scss";
import adama from '../pictures/adama.png'

const Utilisateur = () => {
  return (
    <div className="utilisateur">
      <div className="ellipse48" />
      <div className="flexWrapperOne_u">
        <p className="titreU">Utilisateur actuel</p>
        <p className="utilisateurU">Adama Nguema</p>
      </div>
      <img
        alt=""
        className="ellipse29"
        src={adama}
      />
    </div>
  );
};

export default Utilisateur;