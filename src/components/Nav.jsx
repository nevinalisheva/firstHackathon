import React from "react";
import "./Calander.css";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FaBeer } from "react-icons/fa";

const element = <FontAwesomeIcon icon={faCoffee} />;

/* ReactDOM.render(element, document.getElementById("root")); */

const Nav = () => {
  return (
    <div>
      <nav className="nav">
        <ul>
          <li>
            <a href="#" className="nav-link">
              <FaBeer />
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              <FaBeer />
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              <FaBeer />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
