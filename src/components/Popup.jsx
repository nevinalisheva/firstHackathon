import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./Calander.css";
import axios from "axios";
const Popup = ({ date, children, toggleModal, today }) => {
  //   if (!open) return null;
  const [isActive, setIsActive] = useState(false);

  const handleClick = (event) => {
    // 👇️ toggle isActive state variable
    setIsActive((current) => !current);
  };
  return ReactDOM.createPortal(
    <div className="modal">
      <div className="overlay"></div>
      <div className="modal-content">
        <h2>
          {date} Dec - {25 - date} Days to Christmess
        </h2>

        {today === date ? (
          <div className="img-of-the-day">
            <div>
              <img
                className="icons rotate"
                src="https://cdn.pixabay.com/photo/2020/12/12/05/34/wreath-5824508_1280.png"
              />
            </div>
            <h3>Image of the day</h3>
            <img
              className="modal-img"
              src="https://images.pexels.com/photos/4551907/pexels-photo-4551907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
            <div className="joke">
              <h4>
                What does Santa suffer from if he gets stuck in a chimney?
                <br />
                <span className="show">Claus-trophobia!</span>
              </h4>
            </div>
          </div>
        ) : null}
        {today > date ? (
          <div className="img-of-the-day">
            <div>
              <img
                className="icons rotate"
                src="https://cdn.pixabay.com/photo/2021/01/20/14/07/gift-5934366_1280.png"
              />
            </div>
            <h3>Image of the day</h3>
            <img
              className="modal-img"
              src="https://i0.wp.com/www.german-way.com/wp-content/uploads/2022/01/chm_Berlin-Xmas21-Tor.jpg?ssl=1"
            />
            <div className="joke">
              <h4>
                What do you call a reindeer ghost?
                <br />
                <span className="show">Cari-boo!</span>
              </h4>
            </div>
          </div>
        ) : null}
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default Popup;
