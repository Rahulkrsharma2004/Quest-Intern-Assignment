import React, { useEffect, useState } from "react";
import "../style/Navbar.css";
import {RiMenuFill} from "react-icons/ri"

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);


  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "navbar-blur" : ""}`}>
      <div className="navbar-logo">
        <img
          style={{ backgroundColor: "transparent" }}
          src="data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Frame%20578'%3e%3cg%20id='Vector'%3e%3cpath%20d='M19.3503%200.666016V6.88824L13.128%2013.1105V6.88824H6.90582V10.9962C6.90582%2012.1642%207.85211%2013.1105%209.02008%2013.1105H13.128L6.90582%2019.3327C3.46933%2019.3327%200.683594%2016.5469%200.683594%2013.1105V0.666016H19.3503Z'%20fill='white'/%3e%3cpath%20d='M19.3503%2013.1105L13.128%2013.1105L13.128%2019.3327H19.3503V13.1105Z'%20fill='white'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e"
          alt="Quest Logo"
        />
        <h2 style={{ backgroundColor: "transparent" }}>Quest</h2>
      </div>
      <div className="navbar-links">
        <p style={{ backgroundColor: "transparent" }}>Playbook</p>
        <div className="dropdown" onMouseLeave={closeDropdown}>
          <p
            onMouseEnter={toggleDropdown}
            style={{ backgroundColor: "transparent" }}>
            Resources
          </p>
          {isDropdownOpen && (
            <div className="dropdown-menu">
              <p className="dropDownItem">Docs</p>
              <p className="dropDownItem">Newsletter</p>
              <p className="dropDownItem">Join Quest Club</p>
              <p className="dropDownItem">UI Components Figma</p>
            </div>
          )}
        </div>
        <p style={{ backgroundColor: "transparent" }}>Blogs</p>
      </div>
      <div className="navbar-buttons">
        <button className="btn-primary">Get Started</button>
        <button className="btn-secondary">Book Demo</button>
      </div>
      <div>
        <RiMenuFill
          className="hameburgerMenu"
          onClick={() =>setShowNavbar(!showNavbar)}
        />
      </div>
    </nav>
  );
};

export default Navbar;
