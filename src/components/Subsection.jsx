import React from 'react';

class Subsection extends React.Component {
    render() {
        let moreType = this.props.type; 
        // Nowe wpisy
        // Popularne wpisy
        // Przepisy wegańskie
        // Szybkie dania
        // Dla początkujących

        if (moreType = "NoweWpisy"){
           return <div className = "subsection">
            <img className = "imageSection" src="img/sample.png"></img>
            <img className = "imageSection" src="img/sample2.png"></img>
            <img className = "imageSection" src="img/sample.png"></img>
            <img className = "imageSection" src="img/sample2.png"></img>
            <img className = "imageSection" src="img/sample.png"></img>
            <img className = "imageSection" src="img/sample2.png"></img>
          </div> 
        }
        else if (moreType = "PopularneWpisy"){
            return <div className = "subsection">
             <img className = "imageSection" src="img/sample.png"></img>
             <img className = "imageSection" src="img/sample2.png"></img>
             <img className = "imageSection" src="img/sample.png"></img>
             <img className = "imageSection" src="img/sample2.png"></img>
             <img className = "imageSection" src="img/sample.png"></img>
             <img className = "imageSection" src="img/sample2.png"></img>
           </div> 
         }
         else if (moreType = "PrzepisyWeganskie"){
            return <div className = "subsection">
             <img className = "imageSection" src="img/sample.png"></img>
             <img className = "imageSection" src="img/sample2.png"></img>
             <img className = "imageSection" src="img/sample.png"></img>
             <img className = "imageSection" src="img/sample2.png"></img>
             <img className = "imageSection" src="img/sample.png"></img>
             <img className = "imageSection" src="img/sample2.png"></img>
           </div> 
         }
         else if (moreType = "SzybkieDania"){
            return <div className = "subsection">
             <img className = "imageSection" src="img/sample.png"></img>
             <img className = "imageSection" src="img/sample2.png"></img>
             <img className = "imageSection" src="img/sample.png"></img>
             <img className = "imageSection" src="img/sample2.png"></img>
             <img className = "imageSection" src="img/sample.png"></img>
             <img className = "imageSection" src="img/sample2.png"></img>
           </div> 
         }
         else if (moreType = "DlaPoczatkujacych"){
            return <div className = "subsection">
             <img className = "imageSection" src="img/sample.png"></img>
             <img className = "imageSection" src="img/sample2.png"></img>
             <img className = "imageSection" src="img/sample.png"></img>
             <img className = "imageSection" src="img/sample2.png"></img>
             <img className = "imageSection" src="img/sample.png"></img>
             <img className = "imageSection" src="img/sample2.png"></img>
           </div> 
         }
    }
}

export default Subsection;