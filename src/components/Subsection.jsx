import React from 'react';
import RecipieMainPage from './RecepieMainPage';

class Subsection extends React.Component {
  render() {
    let moreType = this.props.type;
    // Nowe wpisy
    // Popularne wpisy
    // Przepisy wegańskie
    // Szybkie dania
    // Dla początkujących

    if ("NoweWpisy" == moreType) {
      return <div className="subsection">
        <RecipieMainPage imageSource="img/sample_pizza_small.jpg" imageRecipeName="Włoska pizza z kamienia" imagerRecipeURL="danie-1" />
        <RecipieMainPage imageSource="img/sample_muffin_small.jpg" imageRecipeName="Wegańskie muffiny" imagerRecipeURL="danie-2" />
        <RecipieMainPage imageSource="img/sample_snack_small.jpg" imageRecipeName="Wege tacos" imagerRecipeURL="danie-3" />
        <RecipieMainPage imageSource="img/sample_snack2_small.jpg" imageRecipeName="Sałatka z grillowanych warzyw" imagerRecipeURL="danie-4" />
        <RecipieMainPage imageSource="img/sample_tost_small.jpg" imageRecipeName= "Kanapka grilled cheese" imagerRecipeURL="danie-5" />
        <RecipieMainPage imageSource="img/sample_waffles_small.jpg" imageRecipeName="Gofry owocowe" imagerRecipeURL="danie-6" />
      </div>
    }
    else if ("PopularneWpisy" == moreType) {
      return <div className="subsection">
        <RecipieMainPage imageSource="img/sample_pizza_small.jpg" imageRecipeName="Włoska pizza z kamienia" imagerRecipeURL="danie-1" />
        <RecipieMainPage imageSource="img/sample_muffin_small.jpg" imageRecipeName="Wegańskie muffiny" imagerRecipeURL="danie-2" />
        <RecipieMainPage imageSource="img/sample_snack_small.jpg" imageRecipeName="Wege tacos" imagerRecipeURL="danie-3" />
        <RecipieMainPage imageSource="img/sample_snack2_small.jpg" imageRecipeName="Sałatka z grillowanych warzyw" imagerRecipeURL="danie-4" />
        <RecipieMainPage imageSource="img/sample_tost_small.jpg" imageRecipeName= "Kanapka grilled cheese" imagerRecipeURL="danie-5" />
        <RecipieMainPage imageSource="img/sample_waffles_small.jpg" imageRecipeName="Gofry owocowe" imagerRecipeURL="danie-6" />
      </div>
    }
    else if ("PrzepisyWeganskie" == moreType) {
      return <div className="subsection">
<RecipieMainPage imageSource="img/sample_pizza_small.jpg" imageRecipeName="Włoska pizza z kamienia" imagerRecipeURL="danie-1" />
        <RecipieMainPage imageSource="img/sample_muffin_small.jpg" imageRecipeName="Wegańskie muffiny" imagerRecipeURL="danie-2" />
        <RecipieMainPage imageSource="img/sample_snack_small.jpg" imageRecipeName="Wege tacos" imagerRecipeURL="danie-3" />
        <RecipieMainPage imageSource="img/sample_snack2_small.jpg" imageRecipeName="Sałatka z grillowanych warzyw" imagerRecipeURL="danie-4" />
        <RecipieMainPage imageSource="img/sample_tost_small.jpg" imageRecipeName= "Kanapka grilled cheese" imagerRecipeURL="danie-5" />
        <RecipieMainPage imageSource="img/sample_waffles_small.jpg" imageRecipeName="Gofry owocowe" imagerRecipeURL="danie-6" />

      </div>
    }
    else if ("SzybkieDania" == moreType) {
      return <div className="subsection">
<RecipieMainPage imageSource="img/sample_pizza_small.jpg" imageRecipeName="Włoska pizza z kamienia" imagerRecipeURL="danie-1" />
        <RecipieMainPage imageSource="img/sample_muffin_small.jpg" imageRecipeName="Wegańskie muffiny" imagerRecipeURL="danie-2" />
        <RecipieMainPage imageSource="img/sample_snack_small.jpg" imageRecipeName="Wege tacos" imagerRecipeURL="danie-3" />
        <RecipieMainPage imageSource="img/sample_snack2_small.jpg" imageRecipeName="Sałatka z grillowanych warzyw" imagerRecipeURL="danie-4" />
        <RecipieMainPage imageSource="img/sample_tost_small.jpg" imageRecipeName= "Kanapka grilled cheese" imagerRecipeURL="danie-5" />
        <RecipieMainPage imageSource="img/sample_waffles_small.jpg" imageRecipeName="Gofry owocowe" imagerRecipeURL="danie-6" />

      </div>
    }
    else if ("DlaPoczatkujacych" == moreType) {
      return <div className="subsection">
<RecipieMainPage imageSource="img/sample_pizza_small.jpg" imageRecipeName="Włoska pizza z kamienia" imagerRecipeURL="danie-1" />
        <RecipieMainPage imageSource="img/sample_muffin_small.jpg" imageRecipeName="Wegańskie muffiny" imagerRecipeURL="danie-2" />
        <RecipieMainPage imageSource="img/sample_snack_small.jpg" imageRecipeName="Wege tacos" imagerRecipeURL="danie-3" />
        <RecipieMainPage imageSource="img/sample_snack2_small.jpg" imageRecipeName="Sałatka z grillowanych warzyw" imagerRecipeURL="danie-4" />
        <RecipieMainPage imageSource="img/sample_tost_small.jpg" imageRecipeName= "Kanapka grilled cheese" imagerRecipeURL="danie-5" />
        <RecipieMainPage imageSource="img/sample_waffles_small.jpg" imageRecipeName="Gofry owocowe" imagerRecipeURL="danie-6" />

      </div>
    }
  }
}

export default Subsection;