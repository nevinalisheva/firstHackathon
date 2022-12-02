import React from "react";
import "./Calander.css";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const element = <FontAwesomeIcon icon={faCoffee} />;

/* ReactDOM.render(element, document.getElementById("root")); */

const Nav = () => {
  return (
    <div>
      <nav className="nav">
        <ul>
          <li>
            <a href="#" className="nav-link">
              <FontAwesomeIcon icon="fa-sharp fa-solid fa-coffee" />
            </a>
          </li>
          <li>cala</li>
          <li>wellcome</li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
