import React from 'react';
import { Link } from 'react-router-dom';

class Step extends React.Component {
    render() {
        let dishName = this.props.dishName;
        let stepNumber = this.props.stepNumber;
        let stepDesc = this.props.stepDesc;
        let image = this.props.image;
        let next = this.props.nextStepURL;
        let previous = this.props.previousStepURL;

        return <div className="stepMain">
            <h1> {dishName} </h1>
            <h2> - Krok {stepNumber} -</h2>
            <img className="stepImg" src={image} alt=""></img>
            <div className="stepDesc">
                {stepDesc}
            </div>
            <div className="buttonsSection">
                <div className="stepbByStep" align="right">
                    <Link onClick={() => this.props.decreaseStep()} to={previous} className="goToStepByStep" > ⯇ Poprzedni krok </Link>
                </div>



                <div className="stepbByStep" align="right">
                    <Link onClick={() => this.props.increaseStep()} to={next} className="goToStepByStep" > Następny krok ⯈ </Link>
                </div>

            </div>
        </div>


    }
}

export default Step;