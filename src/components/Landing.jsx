import "./Landing.css";
import React from "react";


function Landing() {
 
    return (
      <div className="landing">
      
        <div className="heading">
            <h1>Christmas in <strong>Berlin</strong></h1>  
        </div>
        <div className="buttons">
          <div className= "button">
            <a href="/#list" className="landing-button">Discover</a>
          </div>
          <div className="button">
            <a className="landing-button" href="/#page">Advent Calendar</a>
          </div>
        </div>

      </div>
  );
}

export default Landing;
