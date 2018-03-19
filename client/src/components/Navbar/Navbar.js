import React from 'react';
import { Link } from 'react-router-dom';



const Navbar = (props) => {
  const logout = () => {
    localStorage.removeItem('id_token');
    console.log(props)
  };

  const menuArr = Array.from(props.pages);
  const menuCollection = menuArr.map((el, index) => {
    const parsingItem = el.split(' ').join('').toLowerCase();
    if (parsingItem === 'logout') {
      return <Link onClick={logout} className="menu-item" to={`/login`} key={index}>{el}</Link>;
    }
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
