import React from "react";
import "../pages/index.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isAddPlacePopupOpen);
  }
  const [selectedCard, setSelectedCard] = React.useState();

  function closeAllPopups() {
    if (isEditProfilePopupOpen) {
      setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
    }
    if (isAddPlacePopupOpen) setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
    if (isEditAvatarPopupOpen) setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
    if (selectedCard) setSelectedCard(undefined);
  }

  function handleCardClick(evt) {
    setSelectedCard(evt.target.closest(".element"));
  }
  return (
    <body className="body">
      <div className="page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onEditAvatar={handleEditAvatarClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
        />
        <Footer />
        <PopupWithForm
          name="saved"
          title="Редактировать&nbsp;профиль"
          isOpened={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        >
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
        <PopupWithForm
          name="create"
          title="Новое место"
          isOpened={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >
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
        <PopupWithForm
          name="update-avatar"
          title="Обновить аватар"
          isOpened={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        >
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
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </div>
      <template id="element">
        <div className="element">
          <img className="element__bin" src="" alt="мусорка" />
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
