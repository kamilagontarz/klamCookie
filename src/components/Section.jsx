import React from 'react';
import './app/App.css';
import ShowMore from './ShowMore';
import Subsection from './Subsection';

class Section extends React.Component {
    render() {
        let sectionType = this.props.sectionType;
        // NoweWpisy
        // PopularneWpisy
        // PrzepisyWeganskie
        // Szybkie dania
        // Dla początkujących

        if ("NoweWpisy" === sectionType) {
            return <div className="section">
                <div className="titleAndMore">
                    <div className="smallTitle"> nowe wpisy: </div>
                    <ShowMore type="NoweWpisy" />
                </div>
                <Subsection type="NoweWpisy" />
            </div>
        }
        else if ("PopularneWpisy" === sectionType) {
            return <div className="section">
                <div className="smallTitle"> popularne wpisy: </div>
                <ShowMore type="PopularneWpisy" />
                <Subsection type="PopularneWpisy" />
            </div>
        }
        else if ("PrzepisyWeganskie" === sectionType) {
            return <div className="section">
                <div className="smallTitle"> przepisy weganskie: </div>
                <ShowMore type="PrzepisyWeganskie" />
                <Subsection type="PrzepisyWeganskie" />
            </div>
        }
        else if ("SzybkieDania" === sectionType) {
            return <div className="section">
                <div className="smallTitle"> szybkie dania: </div>
                <ShowMore type="SzybkieDania" />
                <Subsection type="SzybkieDania" />
            </div>
        }
        else if ("DlaPoczatkujacych" === sectionType) {
            return <div className="section">
                <div className="smallTitle"> dla początkujących </div>
                <ShowMore type="DlaPoczatkujacych" />
                <Subsection type="DlaPoczatkujacych" />
            </div>
        }
    }
}

export default Section;