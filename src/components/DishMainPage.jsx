import React from 'react';
import { Route, Link } from "react-router-dom";
import LastStep from './LastStep';
import Step from './Step';
import StepZero from './StepZero';
import { withRouter } from "react-router-dom";
import EventEmitter from '../events';

class DishMainPage extends React.Component {
    constructor(props) {
        super(props);
        const { pathname } = this.props.location;
        let currentStep = -1;
        if (pathname.endsWith('step-by-step')) {
            currentStep = 0;
        } else if (pathname.endsWith('last-step')) {
            currentStep = this.props.allSteps.length;
        } else if (pathname.includes('step-by-step-')) {
            currentStep = pathname[pathname.length - 1];
        }
        this.state = {
            word: undefined,
            currentStep: currentStep
        }
        this.increaseStep = this.increaseStep.bind(this);
        this.decreaseStep = this.decreaseStep.bind(this);
    }

    componentDidMount() {
        EventEmitter.subscribe('wordSaid', (data) => { this.handleWordSaid(data) })
    }

    componentWillUnmount() {
        EventEmitter.unsubscribe('wordSaid');
    }

    handleWordSaid(word) {
        const actionsNext = ['następny', 'następny krok', 'dalej'];
        const actionsBack = ['wróć', 'wstecz', 'poprzedni', 'poprzedni krok'];

        let nNext = actionsNext.includes(word);
        let nBack = actionsBack.includes(word);

        if (nNext === true) {
            console.log('%cRozpoznano słowo: ' + word + ' - Następny krok', "color: green");

            let numberOfSteps = this.props.allSteps.length;
            if (this.state.currentStep === numberOfSteps) {
                return;
            }

            let nextStep = this.props.mainPath + '/';
            if (this.state.currentStep === numberOfSteps - 1) {
                nextStep += 'last-step';
            } else if (this.state.currentStep === -1) {
                nextStep += 'step-by-step';
            } else {
                nextStep += 'step-by-step-' + (this.state.currentStep + 1);
            }
            this.goToUrl(nextStep)
            this.increaseStep();
        }
        else if (nBack === true) {
            console.log('%cRozpoznano słowo: ' + word + ' - Poprzedni krok', "color: green");
            if (this.state.currentStep === 0) {
                return;
            }

            let previousStep = this.props.mainPath + '/';
            if (this.state.currentStep === 1) {
                previousStep += 'step-by-step'
            } else {
                previousStep += 'step-by-step-' + (this.state.currentStep - 1);
            }
            this.goToUrl(previousStep)
            this.decreaseStep();
        }

    }

    increaseStep() {
        this.setState({ currentStep: this.state.currentStep + 1 })
    }

    decreaseStep() {
        this.setState({ currentStep: this.state.currentStep - 1 })
    }

    goToUrl(route) {
        this.props.history.push(route);
    }

    render() {
        let imageSource = this.props.imageSource;
        let dishName = this.props.dishName;
        let shortDesc = this.props.shortDesc;
        let desc = this.props.desc;
        let time = this.props.time;
        let ingrOn = this.props.ingrOn;
        let ingredients = this.props.ingredients;
        let naczynia = this.props.naczynia;
        let allSteps = this.props.allSteps;
        let dishSourceUrl = this.props.dishSourceUrl;
        const mainPath = this.props.mainPath;
        let sampleImageSource = this.props.sampleImageSource;
        let startRecognition = this.props.startRecognition;
        let stopRecognition = this.props.stopRecognition;

        const li = []
        for (let index = 0; index < ingredients.length; index++) {
            const element = ingredients[index];
            li.push(<li key={"ingredient-" + index}>{element}</li>)
        }

        const li2 = []
        for (let index = 0; index < allSteps.length; index++) {
            const element = allSteps[index].stepDescription;
            li2.push(<li key={"ingredient-" + index} >{element}</li>)
        }

        var rows = [];
        for (let index = 0; index < allSteps.length; index++) {
            rows.push(<Route path={mainPath + '/' + allSteps[index].stepURL} key={"route-" + index}>
                <Step stepNumber={allSteps[index].stepNumber}
                    dishName={dishName}
                    stepDesc={allSteps[index].stepDescription}
                    image={allSteps[index].stepImg}
                    nextStepURL={mainPath + '/' + allSteps[index].nextStepUrl}
                    previousStepURL={mainPath + '/' + allSteps[index].previousStepURL}
                    increaseStep={this.increaseStep}
                    decreaseStep={this.decreaseStep} />
            </Route>);
        }

        return <div className="mainDish">
            <Route exact path={mainPath}>
                <img className="mainDishImg" src={imageSource} alt={dishName}></img>
                <div className="mainDishName"> {dishName} </div>
                <div className="mainDishShortDescFirst"> {shortDesc}</div>
                <div className="mainDishShortDesc">{desc}</div>
                <div className="mainDishTime">Czas przygoToUrlwania: {time} </div>
                <div className="recipeStart">
                    <div className="recipeStartIngredients">Składniki {ingrOn}:</div>
                    <div className="recipeStartIngrList">
                        <ul> {li} </ul>
                    </div>
                </div>
                <div className="stepbByStep" align="center">
                    <Link className="goToStepByStep" onClick={() => this.increaseStep()} to={mainPath + "/step-by-step"} >
                        Przepis krok po kroku
                </Link>
                </div>
                <div className="fullRecipe">
                    <div className="fullRecipeTitle">Pełny przepis:</div>
                    <b>Potrzebne naczynia:</b> {naczynia}
                    <ol> {li2} </ol>
                </div>
                <div className="dishSource">
                    Oryginalny przepis: {dishSourceUrl}
                </div>
            </Route>

            <Route path={mainPath + "/step-by-step"}>
                <StepZero dishName={dishName}
                    ingredients={ingredients}
                    naczynia={naczynia}
                    stepZeroURL={mainPath + '/' + allSteps[0].stepURL}
                    startRecognition={startRecognition}
                    increaseStep={this.increaseStep}
                    decreaseStep={this.decreaseStep}
                />
            </Route>
            {rows}
            <Route path={mainPath + '/' + allSteps[allSteps.length - 1].nextStepUrl}>
                <LastStep dishName={dishName}
                    image={sampleImageSource}
                    stopRecognition={stopRecognition}
                    increaseStep={this.increaseStep}
                    decreaseStep={this.decreaseStep} />
            </Route>


        </div>

    }
}

export default withRouter(DishMainPage);
