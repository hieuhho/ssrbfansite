import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import milestone from '../../images/milestone.svg'
import logo from '../../images/logo.svg'
import Dropdown from "./Dropdown";

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className="navbar">
        <img className="milestone" src={milestone} alt="milestone" />
        {/* <img className="logo" src={logo} alt="logo" /> */}
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu} >
          Shishiro Botan Fansite
          <i class="fas fa-leaf" />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/activity" className="nav-links" onClick={closeMobileMenu}>
              Botan's Activity History
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/videos"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Videos
            </Link>
          </li>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to="/projects"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Projects <i className="fas fa-caret-down" />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className="nav-item">
            <Link
              to="/fanarts"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Fanarts
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/about"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
