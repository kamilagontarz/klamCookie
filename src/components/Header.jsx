import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';
  
class Header extends React.Component {
    render() {
        return <Router>
        <div className="header">
            <Link to="/">klamCookie</Link>
        </div>
        </Router>
    }
}

export default Header;