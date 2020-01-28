import React from 'react';
import ShowMoreListSingleRecipe from './ShowMoreListSingleRecipe';

class ShowMoreList extends React.Component {
    render() {
        let category = this.props.category;
        return <div className="showMoreList">
            <div className="showMoreListTitle"> {category} </div>
            <ShowMoreListSingleRecipe
                link="danie-1"
                imgSource="img/sample_pizza_smaller.jpg"
                recipeName="Włoska pizza z kamienia"
                shortDesc={<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                 Vivamus blandit sem vitae augue tincidunt tempus.
                 Sed gravida, metus vel vestibulum interdum, ligula nisi
                     tristique ante, sed viverra purus justo in enim.</p>}
                time="1,5h"
            />
            <ShowMoreListSingleRecipe
                link="danie-2"
                imgSource="img/sample_muffin_smaller.jpg"
                recipeName="Wegańskie muffiny"
                shortDesc={<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                 Vivamus blandit sem vitae augue tincidunt tempus.
                 Sed gravida, metus vel vestibulum interdum, ligula nisi
                     tristique ante, sed viverra purus justo in enim.</p>}
                time="45 min"
            />
            <ShowMoreListSingleRecipe
                link="danie-3"
                imgSource="img/sample_snack_smaller.jpg"
                recipeName="Wege Tacos"
                shortDesc={<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                 Vivamus blandit sem vitae augue tincidunt tempus.
                 Sed gravida, metus vel vestibulum interdum, ligula nisi
                     tristique ante, sed viverra purus justo in enim.</p>}
                time="45 min - 1h"
            />
            <ShowMoreListSingleRecipe
                link="danie-4"
                imgSource="img/sample_snack2_smaller.jpg"
                recipeName="Sałatka z grillowanych warzyw"
                shortDesc={<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                 Vivamus blandit sem vitae augue tincidunt tempus.
                 Sed gravida, metus vel vestibulum interdum, ligula nisi
                     tristique ante, sed viverra purus justo in enim.</p>}
                time="30 min"
            />
            <ShowMoreListSingleRecipe
                link="danie-5"
                imgSource="img/sample_tost_smaller.jpg"
                recipeName="Kanapka Grilled Cheese"
                shortDesc={<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                 Vivamus blandit sem vitae augue tincidunt tempus.
                 Sed gravida, metus vel vestibulum interdum, ligula nisi
                     tristique ante, sed viverra purus justo in enim.</p>}
                time="15 min"
            />
            <ShowMoreListSingleRecipe
                link="danie-6"
                imgSource="img/sample_waffles_smaller.jpg"
                recipeName="Włoska pizza z kamienia"
                shortDesc={<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                 Vivamus blandit sem vitae augue tincidunt tempus.
                 Sed gravida, metus vel vestibulum interdum, ligula nisi
                     tristique ante, sed viverra purus justo in enim.</p>}
                time="30 min"
            />

        </div>
    }
}

export default ShowMoreList;