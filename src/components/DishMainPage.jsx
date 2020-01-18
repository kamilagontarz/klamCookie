import React from 'react';
import { Link } from "react-router-dom";

class DishMainPage extends React.Component {
    render() {
        let imageSource = this.props.imageSource;
        let dishName = this.props.dishName;
        let shortDesc = this.props.shortDesc;
        let desc = this.props.desc;
        let time = this.props.time;
        let ingrOn = this.props.ingrOn;
        let ingredients = this.props.ingredients;
        let url = this.props.url;
        let naczynia = this.props.naczynia;
        let allSteps = this.props.allSteps;
        let dishSourceUrl = this.props.dishSourceUrl;

        const li = []
        for (let index = 0; index < ingredients.length; index++) {
            const element = ingredients[index];
            li.push(<li>{element}</li>)
        }

        const li2 = []
        for (let index = 0; index < allSteps.length; index++) {
            const element = allSteps[index];
            li2.push(<li>{element}</li>)
        }

        return <div className="mainDish">
            <img className="mainDishImg" src={imageSource}></img>
            <div className="mainDishName"> {dishName} </div>
            <div className="mainDishShortDescFirst"> {shortDesc}</div>
            <div className="mainDishShortDesc">{desc}</div>
            <div className="mainDishTime">Czas przygotowania: {time} </div>
            <div className="recipeStart">
                <div className="recipeStartIngredients">Składniki {ingrOn}:</div>
                <div className="recipeStartIngrList">
                    <ul> {li} </ul>
                </div>
            </div>
            <div className="stepbByStep" align="center"> <a class="goToStepByStep" href={url} > Przepis krok po kroku</a></div>
            <div className="fullRecipe">
                <div className="fullRecipeTitle">Pełny przepis:</div>
                <b>Potrzebne naczynia:</b> {naczynia}
                <ol> {li2} </ol>
            </div>
            <div className="dishSource">
                Oryginalny przepis: {dishSourceUrl}
            </div>
        </div>

    }
}

export default DishMainPage;