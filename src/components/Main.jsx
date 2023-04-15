import React from "react";
import editButton from "../images/Vector(1).svg";
import profileAddButton from "../images/Vector(2).svg";

function handleEditAvatarClick() {
  const popupAvatar = document.querySelector(".popup_type_update-avatar");
  popupAvatar.classList.add("popup_opened");
}
function handleEditProfileClick() {
  const popupSave = document.querySelector(".popup_type_saved");
  popupSave.classList.add("popup_opened");
}
function handleAddPlaceClick() {
  const popupAddPlace = document.querySelector(".popup_type_create");
  popupAddPlace.classList.add("popup_opened");
}

function Main() {
  return (
    <main className="main">
      <section className="profile">
        <button
          type="button"
          className="profile__avatar-hover"
          onClick={handleEditAvatarClick}
        >
          {" "}
        </button>
        <img className="profile__avatar" src="#" alt="Аватар" />
        <div className="profile__profile-info">
          <h1 className="profile__title"> </h1>
          <button
            type="button"
            className="profile__button-container"
            onClick={handleEditProfileClick}
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
          onClick={handleAddPlaceClick}
        >
          <img className="profile__cross" src={profileAddButton} alt="крест" />
        </button>
      </section>
      <section className="elements"></section>
    </main>
  );
}

export default Main;
