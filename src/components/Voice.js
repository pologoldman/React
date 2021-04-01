import React from "react";
import "./Voice1.scss";
import play from '../pictures/play.png'
import niveauRouge from '../pictures/korian_rouge.png'
import kelly from '../pictures/kelly.png'

const NoteVocal = () => {
  return (
    <div className="noteVocal">
      <div className="flexWrapperOne">
        <img
          alt=""
          className="ellipse10"
          src={kelly}
        />
        <div className="flexWrapperTwo">
          <div className="flexWrapperThree">
            <p className="kellyRenardInfirmiere">
              Kelly Renard - Infirmière
            </p>
            <p className="num1003">10:03</p>
          </div>
          <div className="relativeWrapperOne">
            <p className="kellyALaisseUneNoteAudio">
              Kelly a laissé une note audio
            </p>
            <img
              alt=""
              className="niveauDurgence"
              src={niveauRouge}
            />
          </div>
        </div>
      </div>
      <div className="relativeWrapperTwo">
        <div className="vocal">
          <img
            alt=""
            className="play1"
            src={play}
          />
          <div className="voice">
            <div className="rectangle678" />
            <div className="rectangle678" />
            <div className="rectangle678" />
            <div className="rectangle683" />
            <div className="rectangle678" />
            <div className="rectangle678" />
            <div className="rectangle678" />
            <div className="rectangle678" />
            <div className="rectangle683" />
            <div className="rectangle683" />
            <div className="rectangle690" />
            <div className="rectangle691" />
            <div className="rectangle705" />
            <div className="rectangle705" />
            <div className="rectangle703" />
            <div className="rectangle700" />
            <div className="rectangle702" />
            <div className="rectangle696" />
            <div className="rectangle694" />
            <div className="rectangle704" />
            <div className="rectangle698" />
            <div className="rectangle695" />
            <div className="rectangle692" />
            <div className="rectangle695" />
            <div className="rectangle698" />
            <div className="rectangle701" />
            <div className="rectangle692" />
            <div className="rectangle700" />
            <div className="rectangle119" />
            <div className="rectangle703" />
            <div className="rectangle705" />
            <div className="rectangle705" />
            <div className="rectangle705" />
            <div className="rectangle705" />
            <div className="rectangle703" />
            <div className="rectangle701" />
            <div className="rectangle698" />
            <div className="rectangle106" />
            <div className="rectangle705" />
            <div className="rectangle705" />
            <div className="rectangle703" />
            <div className="rectangle700" />
            <div className="rectangle702" />
            <div className="rectangle702" />
            <div className="rectangle713" />
            <div className="rectangle712" />
            <div className="rectangle713" />
            <div className="rectangle702" />
            <div className="rectangle700" />
            <div className="rectangle702" />
            <div className="rectangle700" />
            <div className="rectangle712" />
            <div className="rectangle712" />
            <div className="rectangle713" />
            <div className="rectangle712" />
            <div className="rectangle712" />
            <div className="rectangle712" />
          </div>
        </div>
        <div className="time">
          <div className="rectangle583" />
          <p className="num0009">00:09</p>
        </div>
      </div>
    </div>
  );
};

export default NoteVocal;