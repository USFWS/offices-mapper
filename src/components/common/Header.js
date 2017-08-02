import React from 'react';
import { Link, IndexLink } from 'react-router';

class Header extends React.Component {
  render() {
    return (
      <header>
        <nav>
          <ul className="main-nav">
            <li><a href='https://www.fws.gov/'><span>FWS.gov</span></a></li>
            <li><IndexLink to="/" activeClassName="active"><span>List</span></IndexLink></li>
            <li><Link to="/map" activeClassName="active"><span>Map</span></Link></li>
            <li><Link to="/about" activeClassName="active"><span>About</span></Link></li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
