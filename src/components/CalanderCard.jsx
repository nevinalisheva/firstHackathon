import React, { useState } from "react";
// import ReactDOM from "react-dom";
import "./Calander.css";
// import Modal from "react-modal";
import Popup from "./Popup";
//import { FaBeer } from "react-icons/fa";
import song from "../song.mp3";

const CalanderCard = ({ date, open }) => {
  const play = () => {
    new Audio(song).play();
  };
  const [isOpen, setIsOpen] = useState(false);
  //const [isplaying, setIsPlaying] = useState(isOpen);
  //   const [playing, setPlaying] = useState(false);
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  if (isOpen !== false) play();

  isOpen
    ? document.body.classList.add("modal-active")
    : document.body.classList.remove("modal-active");

  const currentdate = new Date();
  const today = currentdate.getDate();
  //   if (date !== today)
  return (
    <div
      className={date === today ? "card-today" : "card"}
      onClick={date <= today && toggleModal}
    >
      <div className="card-front">
        <h1>{date} </h1>
      </div>
      <div className="icons">{/* <FaBeer /> */}</div>

      {isOpen && <Popup date={date} today={today} toggleModal={toggleModal} />}
    </div>
  );
};

export default CalanderCard;
