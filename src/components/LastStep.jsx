import React from 'react';

class LastStep extends React.Component {
    componentDidMount() {
        let stopRecognition = this.props.stopRecognition;
        stopRecognition();
      }
    render() {
        let dishName = this.props.dishName;
        let image = this.props.image;

        return <div className="stepMain">
            <h1> {dishName} </h1>
            <h2>  Danie gotowe - smacznego! </h2>
            <img className="stepImg" src={image} alt={dishName}></img>
            <div className="stepbByStep" align="right">
                <a className="goToStepByStep" href="/"> Wróć do strony głównej </a>
            </div>
        </div>


    }
}

export default LastStep;