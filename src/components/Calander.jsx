import React, { useState } from "react";
import "./Calander.css";
import CalanderCard from "./CalanderCard";

const Calander = ({ children }) => {
  const arr = [...Array(25).keys()].slice(1);
  console.log(arr);
  return (
    <div className="container">
      {arr.map((date) => {
        return <CalanderCard date={date} />;
      })}
      {children}
    </div>
  );
};

export default Calander;
