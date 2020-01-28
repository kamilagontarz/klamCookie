import React from 'react';

class About extends React.Component {
    render() {
        return <div className="aboutMain">
            <img className="aboutImage" src="img/about.jpg" alt=""></img>
            <div className="abotuTitle">
                O projekcie
            </div>
            <div className="aboutDescription">
                <p>
                    Projekt został przygotowany w ramach zaliczenia z przedmiotu "Projektowanie interfejsów mutlimedialnych". Poniżej znajdują się informacje dotyczące projektu.
                </p>
                <h3>Ogólny opis projektu i instrukcje dla użytkownika: </h3>
                <h3>Wykorzystane technologie: </h3>
                <h3>Źródła: </h3>
                <ul>
                    <li key="1"> Zdjęcia i grafiki: https://stocksnap.io/</li>
                </ul>
                <div className="aboutDescriptionStudent">
                    <h3> Autor: </h3> Kamila Gontarz
                    <br></br> nr albumu: 61691
                    <br></br> kierunek studiów:	Informatyka
                    <br></br> przedmiot: Projektowanie interfejsów multimedialnych (projekt)
                </div>
            </div>
        </div>
    }
}

export default About;