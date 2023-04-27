import "../pages/index.css";
import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(null);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(null);

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(null);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }
  const [selectedCard, setSelectedCard] = React.useState({
    name: "",
    link: "",
  });

  function closeAllPopups() {
    if (isEditProfilePopupOpen) {
      setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
    }
    if (isAddPlacePopupOpen) setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
    if (isEditAvatarPopupOpen) setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
    setSelectedCard({ name: "", link: "" });
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  return (
    <div className="body">
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
        <ImagePopup onClose={closeAllPopups} card={selectedCard} />
      </div>
    </div>
  );
}

export default App;
