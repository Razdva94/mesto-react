/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import "../pages/index.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";

function App() {
  return (
    <body className="body">
      <div className="page">
        <Header />
        <Main />
        <Footer />
        <PopupWithForm name="saved" title="Редактировать&nbsp;профиль">
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
        </PopupWithForm>
        <PopupWithForm name="create" title="Новое место">
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
        </PopupWithForm>
        <PopupWithForm name="delete" title="Вы уверены?" />
        <PopupWithForm name="update-avatar" title="Обновить аватар">
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
        </PopupWithForm>
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
