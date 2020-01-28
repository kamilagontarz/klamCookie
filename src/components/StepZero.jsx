import React from 'react';
import { Link } from 'react-router-dom';

class StepZero extends React.Component {

    componentDidMount() {
        let startRecognition = this.props.startRecognition;
        startRecognition();
      }

    render() {
        let dishName = this.props.dishName;
        let ingredients = this.props.ingredients;
        let naczynia = this.props.naczynia;
        let stepZeroURL = this.props.stepZeroURL;
        const liIngr = []
        for (let index = 0; index < ingredients.length; index++) {
            const element = ingredients[index];
            liIngr.push(<li key={"ingredient-" + index} >{element}</li>)
        }


        const li2 = []
        for (let index = 0; index < naczynia.length; index++) {
            const element = naczynia[index];
            li2.push(<li key={"dish-" + index} >{element}</li>)
        }

        return <div className="stepZeroMain">
            <img className="stepZeroImg" src="/img/step-0-v2.jpg" alt=""></img>
            <h1>Zanim zaczniemy!</h1>
            <p>Sprawdź, czy masz w kuchni wszystkie składniki potrzebne do przygotowania dania {dishName}

            </p>
            <ul> {liIngr} </ul>
            <p>Upewnij się też, że masz pod ręką wszystkie sprzęty i akcesoria potrzebne do przygotowania dania
            </p>
            <ul> {li2} </ul>

            <div className="stepbByStep" align="right"> <Link onClick={() => this.props.increaseStep()} to ={stepZeroURL} className="goToStepByStep"> Przejdź do pierwszego kroku </Link></div>
        </div>


    }
}

export default StepZero;