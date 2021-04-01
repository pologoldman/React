import React from 'react';
import './Toggle.scss';

const Toggle = () =>{
    return(
        <div className='switch'>
            <label class="switch">
            <input type="checkbox"/>
            <span class="slider round"></span>
            </label>
        </div>
    );
};

export default Toggle;