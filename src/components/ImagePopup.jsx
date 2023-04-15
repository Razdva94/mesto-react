import React from "react";

function ImagePopup() {
  return (
    <div className="popup popup_type_picture-background">
      <div className="popup__picture-container">
        <button className="popup__close-icon" type="button" aria-label="close">
          {" "}
        </button>
        <img className="popup__picture" src="#" alt="картинка" />
        <h3 className="popup__place-name"> </h3>
      </div>
    </div>
  );
}
export default ImagePopup;
