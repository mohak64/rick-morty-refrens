import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "../../App.scss";
import ricks from "../Navbar/ricks.png";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bgblack " data-bs-theme="dark">
      <div className="container">
        <Link to="/" className="navbar-brand fs-3 ubuntu d-flex">
          <img className="ricksimage" src={ricks} alt="" />
          <span className="cwt ml2">R&M</span>
        </Link>
        <style jsx>{`
          button[aria-expanded="false"] > .close {
            display: ${isMenuOpen ? "block" : "none"};
          }
          button[aria-expanded="true"] > .open {
            display: ${isMenuOpen ? "none" : "block"};
          }
        `}</style>
        <button
          className="navbar-toggler border-0  text-light"
          type="button"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
        >
          <span className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"} text-light`} />
        </button>
        <div
          className={`collapse navbar-collapse justify-content-end ${isMenuOpen ? "show" : ""}`}
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav fs-5">
            <NavLink to="/" className="nav-link" onClick={toggleMenu}>
              Characters
            </NavLink>
            <NavLink to="/episodes" className="nav-link" onClick={toggleMenu}>
              Episode
            </NavLink>
            <NavLink
              activeClassName="active"
              className="nav-link"
              to="/location"
              onClick={toggleMenu}
            >
              Location
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
