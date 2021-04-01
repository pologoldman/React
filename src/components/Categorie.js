import React from "react";
import './Categorie.scss';
import './Button.scss';
import Button from './Button';
import soins from'../pictures/soins.png';
import alim from '../pictures/alimentation.png';
import intendance from '../pictures/intendance.png';
import croix_rouge from '../pictures/croix-rouge.png';
import medecin from '../pictures/medecin.png';
import autres from '../pictures/autres.png';
import stars from '../pictures/star.png'

function Categorie () {
    const button = [
        { img: soins, title: "Soins", color : 'rgba(145, 190, 30, 1)', chiffre:'7'},
        { img: alim, title: "Alimentation", color : '#FFD205', chiffre:'5'},
        { img: intendance, title: "Intendance", color : '#00AAC3', chiffre:'4'},
        { img: croix_rouge, title: "Parmédical", color : '#EA0B0B', chiffre:'6'},
        { img: medecin, title: "Médical", color : '#EF7D00', chiffre:'2'},
        { img: autres, title: "Autres", color : '#EF7D00', chiffre:' '},
    ];
    const button1 = [
        { img: medecin, title: "Médical", color : '#EF7D00', chiffre:'2'},
        { img: autres, title: "Autres", color : '#EF7D00', chiffre:' '},
    ];
    return (
        <div>
            <div className='categorie'>
                {button.map((button) => (
                    <Button
                    title={button.title}
                    color={button.color}
                    img={button.img}
                    chiffre={button.chiffre}
                    />
                ))}
            </div>
            <div>
                <div className='title_second'>
                    <div className='title'>
                        <h2>
                            Favoris
                        </h2>
                    </div>
                    <img src={stars} alt=''/>
                </div>
                <div className='categorie'>
                    {button1.map((button1) => (
                        <Button
                        title={button1.title}
                        color={button1.color}
                        img={button1.img}
                        chiffre={button1.chiffre}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Categorie;
