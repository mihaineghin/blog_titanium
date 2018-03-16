import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  const menuArr = Array.from(props.pages);
  const menuCollection = menuArr.map((el, index) => {
    const parsingItem = el.split(' ').join('').toLowerCase();
    return <Link className="menu-item" to={`/${parsingItem}`} key={index}>{el}</Link>;
  });
  return (
    <div className="navbar" >
      <div className="navbar-container">
        <div className="nav-menu">
          {menuCollection}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
