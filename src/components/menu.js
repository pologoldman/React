import React from "react";
import "./Footer.scss";
import {Link} from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <Link to="/note"><div className="notes3">
        <img
          alt=""
          className="vector"
          src="https://static.overlay-tech.com/assets/a5ced673-8827-4778-981a-a9caa6513085.svg"
        />
        <img
          alt=""
          className="vectorTwo"
          src="https://static.overlay-tech.com/assets/ea1a1d39-00b9-4c18-a168-2ca333097d9d.svg"
        />
        <img
          alt=""
          className="vectorThree"
          src="https://static.overlay-tech.com/assets/6f941c6d-a7a2-41d9-b736-b350ff847403.svg"
        />
        <img
          alt=""
          className="vectorFour"
          src="https://static.overlay-tech.com/assets/8e9ac49e-a417-4774-8596-6ad9f021386d.svg"
        />
        <img
          alt=""
          className="vectorFive"
          src="https://static.overlay-tech.com/assets/56e306ee-5446-4ade-8d66-3adba6d8fd2a.svg"
        />
      </div></Link>
      <div className="message">
        <img
          alt=""
          className="vector"
          src="https://static.overlay-tech.com/assets/cc1ea4c8-8764-476a-b865-b2356c4f6527.svg"
        />
        <div className="ellipse9" />
      </div>
        <Link to='/'>
          <img
          alt=""
          className="vectorSix"
          src="https://static.overlay-tech.com/assets/f82cff4f-91ed-4c2d-b725-f489066bad8b.svg"
          />
        </Link>
      
      <div className="calendar1">
        <img
          alt=""
          className="vector"
          src="https://static.overlay-tech.com/assets/b8c0cf1f-19ba-4baa-875d-6cac1d68419b.svg"
        />
        <div className="calendar" />
        <div className="calendarTwo" />
        <div className="calendarThree" />
        <div className="calendarFour" />
        <div className="calendarFive" />
        <div className="calendarSix" />
        <div className="group" />
        <div className="groupTwo" />
        <div className="groupThree" />
        <div className="groupFour" />
        <div className="groupFive" />
        <div className="groupSix" />
        <div className="groupSeven" />
        <div className="groupEight" />
      </div>
      <img
        alt=""
        className="user1"
        src="https://static.overlay-tech.com/assets/ffe64221-5813-4d71-b615-f43a9f39397b.svg"
      />
    </div>
  );
};

export default Footer;