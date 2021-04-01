import React from "react";
import  "./Ligne.scss";
import Toggle from "./Toggle";

function Lignedouble ({
  img1,
  title1,
  color1,
  img2,
  title2,
  color2,
}){
  return (
    <div className='component5'>
      <div className="ligne">
        <div className='align'>
          <div className="icon" style={{backgroundColor: color1}}>
            <img
              alt=""
              src={img1}
            />
          </div>
          <p className="titleDate">{title1}</p>
        </div>
        
        <Toggle/>
      </div>
      <hr/>
      <div className="ligne">
        <div className='align'>
          <div className="icon" style={{backgroundColor: color2}}>
            <img
              alt=""
              src={img2}
            />
          </div>
          <p className="titleDate">{title2}</p>
        </div>
        
        <Toggle/>
      </div>
    </div>
    
  );
};

export default Lignedouble;