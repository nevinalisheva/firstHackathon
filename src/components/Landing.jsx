import "./Landing.css";
import React from "react";
import Snowfall from 'react-snowfall';
// import tree from "../../public/tree.jpg";

function Landing() {
    return (
      <div className="landing">
        <Snowfall />
        <div className="heading">
            <h1>Welcome to Christmas in Berlin</h1>  
        </div>
        <div className="buttons">
        <div className="button">
                <a href="a">Discover</a>
        </div>
        <div className="button">
            <a href="a">Advent Calendar</a>
        </div>
        </div>
        
      </div>
    );
  }
  
  export default Landing;