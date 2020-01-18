import React from 'react';

class Step extends React.Component {
    render() {
        let dishName = this.props.dishName;
        let stepNumber = this.props.stepNumber;
        let stepDesc = this.props.stepDesc;
        let image = this.props.image;
        let next = this.props.nextStepURL;
        let previous = this.props.previousStepURL;

        return <div className = "stepMain">
                    <h1> {dishName} </h1>
                    <h2> - Krok {stepNumber} -</h2>
                    <img className = "stepImg" src={image}></img>
                   <div className = "stepDesc">
                    {stepDesc}
                    </div>
            <div className = "buttonsSection">
               <div className="stepbByStep" align="right"> 
                   <a className="goToStepByStep" href={previous}> ⯇ Poprzedni krok </a>
                </div>

                
     
               <div className="stepbByStep" align="right"> 
                   <a className="goToStepByStep" href={next}> Następny krok ⯈ </a>
                </div>
               
            </div>
            </div>
               
              
    }
}

export default Step;