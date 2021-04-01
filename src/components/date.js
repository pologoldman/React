import  React,{ Component, useState , useEffect } from 'react'

export const DateTime = () => {

    const [currentDate, setCurrentDate] = useState('');
      
        useEffect(() => {
          var hours = new Date().getHours(); //Current Hours
          var min = new Date().getMinutes(); //Current Minutes
          setCurrentDate(
               hours + ':' + min 
          );
        }, []);
      
    return (
        <div className="heure">
            <p> {currentDate}</p>
        </div>
    )
}
export default DateTime;