import React from "react";

function ImagePopup({ card, onClose }) {
  const src = card?.querySelector(".element__image").src;
  const text = card?.querySelector(".element__text").textContent;
  return (
    <div
      className={`popup popup_type_picture-background ${
        card && (card = "popup_opened")
      }`}
    >
      <div className="popup__picture-container">
        <button className="popup__close-icon" type="button" aria-label="close" onClick={onClose}>
          {" "}
        </button>
        <img
          className="popup__picture"
          src={src}
          alt="картинка"
        />
        <h3 className="popup__place-name">{text}</h3>
      </div>
    </div>
  );
}
export default ImagePopup;
