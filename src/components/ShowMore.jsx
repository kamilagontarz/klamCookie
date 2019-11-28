import React from 'react';

class ShowMore extends React.Component {
    render() {
        let moreType = this.props.type; 
        // Nowe wpisy
        // Popularne wpisy
        // Przepisy wegańskie
        // Szybkie dania
        // Dla początkujących

        if (moreType = "NoweWpisy"){
            return <div className = "showMore">
            <a href = "#" className = "showMoreLink"> pokaż więcjej >> </a>
            </div>
        }
        else if (moreType="PopularneWpisy"){
            return <div className = "showMore">
            <a href = "#" className = "showMoreLink"> pokaż więcjej >> </a>
            </div>
        }
        else if (moreType="PrzepisyWeganskie"){
            return <div className = "showMore">
            <a href = "#" className = "showMoreLink"> pokaż więcjej >> </a>
            </div>
        }
        else if (moreType="SzybkieDania"){
            return <div className = "showMore">
            <a href = "#" className = "showMoreLink"> pokaż więcjej >> </a>
            </div>
        }
        else if (moreType="DlaPoczatkujacych"){
            return <div className = "showMore">
            <a href = "#" className = "showMoreLink"> pokaż więcjej >> </a>
            </div>
        }
    }
}

export default ShowMore;