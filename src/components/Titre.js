import React from "react";
import "./Titre.scss";
import {Link} from "react-router-dom";


const Titre = () => {
  return (
    <div className="component2">
        <Link to='/note' classeName='.MuiLink-underlineNone' styles={'z-index:99'}><p className="titreAnnul">Annuler</p></Link>
        <p className="titreNouvelleNote">
            Nouvelle note
        </p>
        <p className="titreAjouter">Ajouter</p>
    </div>
  );
};

export default Titre;