import React from "react";
import "./Notification.scss";
import Soins from "./Soins";
import Alimentation from "./Alimentation";
import Intendance from "./Intendance";


const Notification = () => {
    return (
        <div>
            <div className="title">
                <h2>
                    Notifications
                </h2>
            </div>
            <div className="filter">

            </div>
            <div className="categorie">
                <Soins/>
                <Alimentation/>
                <Intendance/>
            </div>
        </div>
        
    );
};

export default Notification;