import React from 'react';
import { Link } from "react-router-dom";
class ShowMoreListSingleRecipe extends React.Component {
    render() {
        let link = this.props.link;
        let imgSource = this.props.imgSource;
        let recipeName = this.props.recipeName;
        let shortDesc = this.props.shortDesc;
        let time = this.props.time;
        return <Link to={link}>
            <div className="showMoreListSingleReicpe">
                <img className="showMoreListSingleReicpeImage" src={imgSource} alt="">
                </img>

                <div className="showMoreListNameAndDesc">

                    <div className="showMoreListRecipeName">
                        {recipeName}
                    </div>

                    <div className="showMoreListRecipeDesc">
                        {shortDesc}
                    </div>

                    <div className="showMoreListRecipeTime">
                        Czas przygotowania: {time}
                    </div>

                </div>

            </div>
        </Link>

    }
}

export default ShowMoreListSingleRecipe;