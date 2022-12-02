import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./Calander.css";
import axios from "axios";
const Popup = ({ date, children, toggleModal, today }) => {
  //   if (!open) return null;
  const [daysTo, setDaysTo] = useState([]);
  //   useEffect(() => {
  //     const fetchdays = async () => {
  //       const res = await axios.get(
  //         "https://christmas-days.anvil.app/_/api/get_days"
  //       );
  //       console.log(res);
  //     };
  //     fetchdays();
  //   }, []);
  console.log(daysTo);
  return ReactDOM.createPortal(
    <div className="modal">
      <div className="overlay"></div>
      <div className="modal-content">
        <h2>{date}</h2>

        <div>
          <img
            className="icons rotate"
            src="https://cdn.pixabay.com/photo/2020/12/12/05/34/wreath-5824508_1280.png"
          />
        </div>

        {today === date ? (
          <div className="img-of-the-day">
            <h3>Image of the day</h3>
            <img
              className="modal-img"
              src="https://images.pexels.com/photos/4551907/pexels-photo-4551907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
          </div>
        ) : null}
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default Popup;
