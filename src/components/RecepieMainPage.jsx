import React from 'react';
import { Link } from "react-router-dom";

class RecipieMainPage extends React.Component {
    render() {
        let imageSource = this.props.imageSource;
        let imageRecipeName = this.props.imageRecipeName;
        let url = this.props.imagerRecipeURL;
        return <div className="imageSection">

            <div className="imageSectionOnlyImage">
                <Link to={url}>
                    <img src={imageSource}></img>
                </Link>
            </div>
            <div className="RecipeName">

                <Link to={url}>
                    {imageRecipeName}
                </Link>
            </div>

        </div>

    }
}

export default RecipieMainPage;