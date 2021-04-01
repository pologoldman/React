import React from "react";
import './Button.scss';


function Button({
  img,
  title = "Soins",
  onClick,
  color = 'green',
  chiffre ='6'
}) {
  return (
    <div className='frame24'>
        <div className='flexWrapperTwo_b'>
            <div className='flexWrapperOne_b' style={{ backgroundColor: color }}>
            <img className='img-b 'src={img} alt='' />
            </div>
            <p className='titleSoins'>{title}</p>
        </div>
        <p className='chiffre'>{chiffre}</p>
    </div>
  );
}

export default Button;
