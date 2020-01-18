import React from 'react';

class StepZero extends React.Component {
    render() {
        let dishName = this.props.dishName;
        let ingredients = this.props.ingredients;
        let naczynia = this.props.naczynia;

        const liIngr = []
        for (let index = 0; index < ingredients.length; index++) {
            const element = ingredients[index];
            liIngr.push(<li>{element}</li>)
        }

    
        const li2 = []
        for (let index = 0; index < naczynia.length; index++) {
            const element = naczynia[index];
            li2.push(<li>{element}</li>)
        }

        let url = ""
        if("Włoska pizza z kamienia" == dishName){
            url = "/danie-1-step-by-step-1";
        }
        else if ("Wegańskie muffiny" == dishName){
            url = "/danie-2-step-by-step-1";
        }
        else if ("Wege tacos" == dishName){
            url = "/danie-3-step-by-step-1";
        }
        else if ("Sałatka z grillowanych warzyw" == dishName){
            url="/danie-4-step-by-step-1"
        }
        else if("Kanapka Grilled Cheese" == dishName){
            url="/danie-5-step-by-step-1"
        }


        return <div className = "stepZeroMain">
                    <img className = "stepZeroImg" src="img/step-0-v2.jpg"></img>
               <h1>Zanim zaczniemy!</h1> 
               <p>Sprawdź, czy masz w kuchni wszystkie składniki potrzebne do przygotowania dania {dishName}
               <ul> {liIngr} </ul>
                   </p> 
               <p>Upewnij się też, że masz pod ręką wszystkie sprzęty i akcesoria potrzebne do przygotowania dania 
               <ul> {li2} </ul>
               </p>
               <div className="stepbByStep" align="right"> <a className="goToStepByStep" href={url}> Przejdź do pierwszego kroku </a></div>
               </div>
               
              
    }
}

export default StepZero;