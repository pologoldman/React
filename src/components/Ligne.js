import React from "react";
import  "./Ligne.scss";
import Toggle from "./Toggle";

function Ligne ({
  img,
  title,
  color
}){
  return (
    <div className='component5'>
      <div className="ligne">
        <div className='align'>
          <div className="icon" style={{backgroundColor: color}}>
            <img
              alt=""
              src={img}
            />
          </div>
          <p className="titleDate">{title}</p>
        </div>
        
        <Toggle/>
      </div>
    </div>
    
  );
};

export default Ligne;