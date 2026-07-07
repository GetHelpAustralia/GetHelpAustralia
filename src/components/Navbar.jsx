import logo from "@/images/stopitnow.png";
import React, { useState } from "react";
import Button from "./Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-expand-md col-md-10 mx-auto">
      <div className="container-fluid">
        <a
          className="navbar-brand"
          target="_blank"
          href="https://www.stopitnow.org.au"
        >
          <img
            src={logo}
            alt="Stop It Now!"
            height="137"
            // className="img-fluid"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto mb-2 mb-md-0 fw-semibold">
            <li className="nav-item">
              <a
                className="nav-link secondary-color"
                aria-current="page"
                href="/"
              >
                HOME
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link secondary-color"
                target="_blank"
                href="https://www.stopitnow.org.au/helpline"
              >
                HELP AND SUPPORT
              </a>
            </li>
            <li className="nav-item">
              <a
                id="help-button-link"
                target="_blank"
                href="https://www.stopitnow.org.au/helpline"
              >
                <Button id="help-button" classes="nav-link rounded px-2">
                  HELPLINE
                </Button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
