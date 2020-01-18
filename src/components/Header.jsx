import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

class Header extends React.Component {
    render() {
        return <div className="header">
            <Link to="/">klamCookie</Link>
        </div>
    }
}

export default Header;