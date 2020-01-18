import React from 'react';
import { Link } from "react-router-dom";

class About extends React.Component {
    render() {
      
        return <div className="aboutMain">
            
            <img className="aboutImage" src="img/about.jpg"></img>
            <div className = "abotuTitle">
                O projekcie
            </div>
            <div className = "aboutDescription">
                <p>
                Projekt został przygotowany w ramach zaliczenia z przedmiotu "Projektowanie interfejsów mutlimedialnych". Poniżej znajdują się informacje dotyczące projektu. 
                </p>
                <p>
                    <h3>Ogólny opis projektu i instrukcje dla użytkownika: </h3>
                </p>
                <p>
                    <h3>Wykorzystane technologie: </h3>
                </p>
                <p>
                    <h3>Źródła: </h3>
                    <ul>
                        <li> Zdjęcia i grafiki: https://stocksnap.io/</li>
                    </ul>
                </p>
                <p className = "aboutDescriptionStudent">
                    <h3> Autor: </h3>
                          Kamila Gontarz
                <br></br> nr albumu: 61691 
                <br></br> kierunek studiów:	Informatyka
                <br></br> przedmiot: Projektowanie interfejsów multimedialnych (projekt) 
                </p>
            </div>
        </div>
    }
}

export default About;