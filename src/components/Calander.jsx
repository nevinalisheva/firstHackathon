import React, { useState } from "react";
import "./Calander.css";
import CalanderCard from "./CalanderCard";

const Calander = ({ children }) => {
  const arr = [...Array(25).keys()].slice(1);
  //console.log(arr);
  return (
    <div className="page">
      <h1 className="cal-title">Adventskalender</h1>
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
