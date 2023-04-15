/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import "../pages/index.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  return (
    <body className="body">
      <div className="page">
        <Header />
        <Main />
        <Footer />
      </div>
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
      <template id="element">
        <div className="element">
          <img
            className="element__bin"
            src="<%=require('./images/bin.svg')%>"
            alt="мусорка"
          />
          <img className="element__image" src="#" alt="Картинка места" />
          <div className="element__text-container">
            <h2 className="element__text"> </h2>
            <div className="element__like-container">
              <button
                aria-label="like"
                type="button"
                className="element__like-icon"
              >
                {" "}
              </button>
              <span className="element__like-number"></span>
            </div>
          </div>
        </div>
      </template>
      <template id="myElement">
        <div className="element">
          <img className="element__image" src="#" alt="Картинка места" />
          <div className="element__text-container">
            <h2 className="element__text"> </h2>
            <div className="element__like-container">
              <button
                aria-label="like"
                type="button"
                className="element__like-icon"
              >
                {" "}
              </button>
              <span className="element__like-number"></span>
            </div>
          </div>
        </div>
      </template>
    </body>
  );
}

export default App;
