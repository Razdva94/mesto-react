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
    <>
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
          <button type="button" className="profile__add-button" onClick={handleAddPlaceClick}>
            <img
              className="profile__cross"
              src={profileAddButton}
              alt="крест"
            />
          </button>
        </section>
        <section className="elements"></section>
      </main>
      <div className="popup popup_type_picture-background">
        <div className="popup__picture-container">
          <button
            className="popup__close-icon"
            type="button"
            aria-label="close"
          >
            {" "}
          </button>
          <img className="popup__picture" src="#" alt="картинка" />
          <h3 className="popup__place-name"> </h3>
        </div>
      </div>
      <div className="popup popup_type_saved">
        <div className="popup__container">
          <button
            className="popup__close-icon"
            type="button"
            aria-label="close"
          >
            {" "}
          </button>
          <form
            name="save"
            className="popup__form popup__form_type_save"
            noValidate
          >
            <h2 className="popup__title">Редактировать&nbsp;профиль</h2>
            <div className="popup__input-container">
              <input
                required
                type="text"
                minLength="2"
                maxLength="40"
                className="popup__input popup__input_type_name"
                id="name"
                placeholder="Имя"
              />
              <span className="popup__text-error name-error"></span>
            </div>
            <div className="popup__input-container">
              <input
                required
                type="text"
                minLength="2"
                maxLength="200"
                className="popup__input popup__input_type_job"
                id="about"
                placeholder="О себе"
              />
              <span className="popup__text-error about-error"></span>
            </div>
            <button type="submit" className="popup__button">
              Сохранить
            </button>
          </form>
        </div>
      </div>
      <div className="popup popup_type_create">
        <div className="popup__container">
          <button
            className="popup__close-icon"
            type="button"
            aria-label="close"
          >
            {" "}
          </button>
          <form name="create" className="popup__form" noValidate>
            <h2 className="popup__title">Новое место</h2>
            <div className="popup__input-container">
              <input
                required
                type="text"
                minLength="2"
                maxLength="30"
                className="popup__input popup__input_type_name"
                id="popup__name"
                placeholder="Название"
              />
              <span className="popup__text-error popup__name-error"></span>
            </div>
            <div className="popup__input-container">
              <input
                required
                type="url"
                className="popup__input popup__input_type_job"
                id="popup__link"
                placeholder="Ссылка на картинку"
              />
              <span className="popup__text-error popup__link-error"></span>
            </div>
            <button type="submit" className="popup__button">
              Создать
            </button>
          </form>
        </div>
      </div>
      <div className="popup popup_type_delete">
        <div className="popup__container">
          <button
            className="popup__close-icon"
            type="button"
            aria-label="close"
          >
            {" "}
          </button>
          <form
            name="confirm"
            className="popup__form popup__form_type_delete"
            noValidate
          >
            <h2 className="popup__title">Вы уверены?</h2>
            <button
              type="submit"
              className="popup__button popup__button_type_delete"
            >
              Да
            </button>
          </form>
        </div>
      </div>
      <div className="popup popup_type_update-avatar">
        <div className="popup__container">
          <button
            className="popup__close-icon"
            type="button"
            aria-label="close"
          >
            {" "}
          </button>
          <form
            name="change-avatar"
            className="popup__form popup__form_type_update-avatar"
            noValidate
          >
            <h2 className="popup__title">Обновить аватар</h2>
            <div className="popup__input-container">
              <input
                required
                type="url"
                className="popup__input"
                id="popup__url"
                placeholder="Ссылка на картинку"
              />
              <span className="popup__text-error popup__url-error"></span>
            </div>
            <button type="submit" className="popup__button">
              Сохранить
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Main;
