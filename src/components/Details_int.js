import React from "react";
import Ligne from './Ligne';
import Lignedouble from "./Lignedouble";
import calendar from '../pictures/calendar.png';
import clock from '../pictures/clock.png';
import chat from '../pictures/chat.png';
import bed from '../pictures/bed.png';
import check from '../pictures/check.png';
import picture from '../pictures/picture.png';

function Details_int () {
    const line = [
        { img1: calendar, title1: "Date", color1 : '#91BE1E',img2: clock, title2: 'Heure', color2: '#00AAC3'},
    ];
    const line1 = [
        { img1: chat, title1: "Prévenir", color1 : '#F17C01',img2: bed, title2: 'Chambre', color2: '#EA0B0B'},
    ];
    const line2 = [
        {img: check, title: "Date", color: '#568FFF'},
    ];
    const line3 = [
        { img: picture, title: "Ajouter un document", color : '#FFD205'},
    ];
    return (
        <div>
            <div>
                {line.map((line) => (
                    <Lignedouble
                    title1={line.title1}
                    color1={line.color1}
                    img1={line.img1}
                    title2={line.title2}
                    color2={line.color2}
                    img2={line.img2}
                    />
                ))}
            </div>
            <div >
                {line1.map((line1) => (
                    <Lignedouble
                    title1={line1.title1}
                    color1={line1.color1}
                    img1={line1.img1}
                    title2={line1.title2}
                    color2={line1.color2}
                    img2={line1.img2}
                    />
                ))}
            </div>
            <div >
                {line2.map((line2) => (
                    <Ligne
                    title={line2.title}
                    color={line2.color}
                    img={line2.img}
                    />
                ))}
            </div>
            <div >
                {line3.map((line3) => (
                    <Ligne
                    title={line3.title}
                    color={line3.color}
                    img={line3.img}
                    />
                ))}
            </div>
        </div>
    );
}

export default Details_int;
