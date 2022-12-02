import React from "react";
import ReactDOM from "react-dom";

const Popup = ({ date, children, toggleModal }) => {
  //   if (!open) return null;

  return ReactDOM.createPortal(
    <div className="modal">
      <div className="overlay"></div>
      <div className="modal-content">
        <h2>{date}</h2>
        <button onClick={toggleModal}>close</button>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus autem iure vel eligendi inventore voluptates quaerat
          doloremque, deserunt ipsa maiores corporis aperiam pariatur debitis,
          facere cupiditate, voluptatum dolor quos consequatur harum qui
          voluptas ipsum cumque? Aliquid rerum quo quia laboriosam?
        </p>
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default Popup;
