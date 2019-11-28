import React from 'react';
import { Link, useLocation } from 'react-router-dom';

/**
 * Basic header component, doesn't need any props
 * Will display a back button if we're not on the home page
 */
function Header() {
  const {pathname} = useLocation();

  return (
    <div className="navbar navbar-light bg-light">
      <div className="navbar-brand">
        {pathname !== "/" && (<Link to="/" className="btn btn-primary" style={{marginRight: "10px"}} data-testid="backButton">&lt;</Link>)}
        The Best Survey App
      </div>
    </div>
  );
}

export default Header;