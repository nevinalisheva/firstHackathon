import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./Calander.css";
import Modal from "react-modal";
import Popup from "./Popup";

const CalanderCard = ({ date, open }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  //   if (isOpen) {
  //     document.body.classList.add("active-modal");
  //   } else {
  //     document.body.classList.remove("active-modal");
  //   }
  return (
    <div className="card" onClick={toggleModal}>
      <div className="card-inner">
        {/* <button onClick={toggleModal}>open modal</button> */}
        <div className="card-front">
          <h1>{date}</h1>
        </div>
        {/* <button onClick={toggleModal}>clickkkk</button> */}
        {isOpen && <Popup date={date} toggleModal={toggleModal} />}
      </div>
    </div>
  );
};

export default CalanderCard;
