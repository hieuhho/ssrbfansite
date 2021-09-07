import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import "./Navbar.css";

function Navbar() {
	const [dropdown, setDropdown] = useState(false);

	const toggleDropdown = () => setDropdown(!dropdown);

	return (
		<nav className={dropdown ? "nav__active" : ""}>
			{/* Logo */}
			<Link className="home-link" to="/">
				<img className="logo" src={logo} alt="title" />
			</Link>

			{/* Hamburger Menu */}
			<div className="hamburger" onClick={toggleDropdown}>
				<i className={"fas fa-bars"} />
			</div>

			{/* Nav Links */}
			<ul className={dropdown ? "nav-menu nav-menu__active" : "nav-menu"}>
				<li className="nav-item" onClick={toggleDropdown}>
					<Link to="/projects">Projects</Link>
				</li>
				<li className="nav-item" onClick={toggleDropdown}>
					<Link to="/videos">Videos</Link>
				</li>
				<li className="nav-item" onClick={toggleDropdown}>
					<Link to="/fanarts">Fanarts</Link>
				</li>
				<li className="nav-item" onClick={toggleDropdown}>
					<Link to="/about">About</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
