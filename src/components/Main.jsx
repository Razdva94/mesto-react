import React from "react";
import editButton from "../images/Vector(1).svg";
import profileAddButton from "../images/Vector(2).svg";
import api from "../utils/api";
import bin from "../images/bin.svg";

function Main({ onEditAvatar, onEditProfile, onAddPlace }) {
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();
  const [userName, setUserName] = React.useState();
  function getUserInfo() {
    api.getInitialProfile().then((userData) => {
      setUserName(userData.name);
      setUserAvatar(userData.avatar);
      setUserDescription(userData.about);
    });
  }
  React.useEffect(() => {
    getUserInfo();
  }, []);
  const [cards, setCards] = React.useState([]);
  function getCards() {
    api.getInitialCards().then((cardsData) => {
      setCards(...cards, cardsData);
    });
  }
  React.useEffect(() => {
    getCards();
  }, []);
  const cardsRender = cards.map((card, i) => (
    <div key={i}>
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
    </div>
  ));
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
        <img className="profile__avatar" src={userAvatar} alt="Аватар" />
        <div className="profile__profile-info">
          <h1 className="profile__title">{userName}</h1>
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
          <p className="profile__text">{userDescription}</p>
        </div>
        <button
          type="button"
          className="profile__add-button"
          onClick={onAddPlace}
        >
          <img className="profile__cross" src={profileAddButton} alt="крест" />
        </button>
      </section>
      <section className="elements">{cardsRender}</section>
    </main>
  );
}

export default Main;
