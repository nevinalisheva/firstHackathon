// import React, { useState } from "react";
import "./Calander.css";
import CalanderCard from "./CalanderCard";
import Snowfall from "react-snowfall";

const Calander = ({ children }) => {
  const arr = [...Array(25).keys()].slice(1);
  //console.log(arr);
  return (
    <div className="page" id="page">
    <Snowfall />
      <div className="container">
        {arr.map((date) => {
          return (
            <div key={date}>
              <CalanderCard date={date} />
            </div>
          );
        })}
        {children}
      </div>
    </div>
  );
};

export default Calander;
