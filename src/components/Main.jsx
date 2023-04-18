import React from "react";
import editButton from "../images/Vector(1).svg";
import profileAddButton from "../images/Vector(2).svg";
import api from "../utils/api";
import Card from "./Card";

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();
  const [userName, setUserName] = React.useState();
  const [cards, setCards] = React.useState([]);
  function getProfileAndCardsInfo() {
    Promise.all([api.getInitialProfile(), api.getInitialCards()])
      .then(([userData, cardsData]) => {
        setUserName(userData.name);
        setUserAvatar(userData.avatar);
        setUserDescription(userData.about);
        setCards(cardsData);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  React.useEffect(() => {
    getProfileAndCardsInfo();
  }, []);
  const cardsRender = cards.map((element) => {
    return (
      <div key={element._id}>
        <Card card={element} onCardClick={onCardClick} />
      </div>
    );
  });
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
