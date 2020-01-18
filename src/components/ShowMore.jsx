import React from 'react';
import { Link } from "react-router-dom";

class ShowMore extends React.Component {
    render() {
        let moreType = this.props.type;
        // Nowe wpisy
        // Popularne wpisy
        // Przepisy wegańskie
        // Szybkie dania
        // Dla początkujących

        if ("NoweWpisy" == moreType) {
            return <div className="showMore">
                <Link to="/nowe-wpisy">
                    pokaż więcjej >>
                </Link>
            </div>
        }
        else if ("PopularneWpisy" == moreType) {
            return <div className="showMore">
                <Link to="/popularne-wpisy">
                    pokaż więcjej >>
                </Link>
            </div>
        }
        else if ("PrzepisyWeganskie" == moreType) {
            return <div className="showMore">
                <Link to="/przepisy-wege">
                    pokaż więcjej >>
                </Link>
            </div>
        }
        else if ("SzybkieDania" == moreType) {
            return <div className="showMore">
                <Link to="/szybkie-dania">
                    pokaż więcjej >>
                </Link>
            </div>
        }
        else if ("DlaPoczatkujacych" == moreType) {
            return <div className="showMore">
                <Link to="/dla-poczatkujacych">
                    pokaż więcjej >>
                </Link>
            </div>
        }
    }
}

export default ShowMore;