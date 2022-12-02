import "./Landing.css";
import React from "react";
import Snowfall from 'react-snowfall';
// import tree from "../../public/tree2.jpg";

function Landing({List}) {
  const scrollDown = () => {
    window.scrollTo({
      top: List.current?.scrollIntoView({behavior: 'smooth'})
    });
  };
    return (
      <div className="landing">
        <Snowfall />
        <div className="heading">
            <h1>Christmas in <strong>Berlin</strong></h1>  
        </div>
        <div className="buttons">
          <div className="button" onClick={() => scrollDown(List)}>
            <p>Discover</p>
          </div>
          <div className="button" onClick={scrollDown}>
            <p>Get Inspired</p>
          </div>
        </div>
      
        
      </div>
    );
  }
  
  export default Landing;