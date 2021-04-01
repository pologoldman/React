import React from "react";
import "./Header.scss";
import plus from "../pictures/plus.svg";
import loupe_note from '../pictures/loupe_note.png';
import burgeur from '../pictures/burger.png';
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <img
        alt=""
        className="group126"
        src={burgeur}
    />
      <p className="titleNote">Note du jour</p>
      <img
        alt=""
        className="loupeNote"
        src={loupe_note}
      />
      <Link to='/nouvelle-note'>
      <img
        alt=""
        className="loupeNote, plus"
        src={plus}
      /></Link>
    </div>
  );
};

export default Header;