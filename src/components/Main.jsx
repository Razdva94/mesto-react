import React from "react";
import editButton from "../images/Vector(1).svg";
import profileAddButton from "../images/Vector(2).svg";

function Main({ onEditAvatar, onEditProfile, onAddPlace }) {
  return (
    <main className="main">
      <section className="profile">
        <button
          type="button"
          className="profile__avatar-hover"
          onClick={onEditAvatar}
        >
          {" "}
        </button>
        <img className="profile__avatar" src="#" alt="Аватар" />
        <div className="profile__profile-info">
          <h1 className="profile__title"> </h1>
          <button
            type="button"
            className="profile__button-container"
            onClick={onEditProfile}
          >
            <img
              className="profile__edit-button"
              src={editButton}
              alt="кнопка"
            />
          </button>
          <p className="profile__text"></p>
        </div>
        <button
          type="button"
          className="profile__add-button"
          onClick={onAddPlace}
        >
          <img className="profile__cross" src={profileAddButton} alt="крест" />
        </button>
      </section>
      <section className="elements"></section>
    </main>
  );
}

export default Main;
