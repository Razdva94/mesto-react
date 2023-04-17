import React from "react";
import bin from "../images/bin.svg";

function Card({ card }) {
  return (
    <div className="element">
      <img className="element__bin" src={bin} alt="мусорка" />
      <img className="element__image" src={card.link} alt="Картинка места" />
      <div className="element__text-container">
        <h2 className="element__text">{card.name}</h2>
        <div className="element__like-container">
          <button
            aria-label="like"
            type="button"
            className="element__like-icon"
          >
            {" "}
          </button>
          <span className="element__like-number">{card.likes.length}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;