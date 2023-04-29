import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpened, onClose, onAddPlace }) {
  const [cardName, setCardName] = React.useState("");
  const [cardLink, setCardLink] = React.useState("");
  function handleSubmit(e) {
    e.preventDefault();
    const promiseOnAddPlace = new Promise((resolve) => {
      resolve(onAddPlace({ cardName, cardLink }));
    });
    promiseOnAddPlace
      .then(setCardName(""), setCardLink(""))
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <PopupWithForm
      name="create"
      title="Новое место"
      isOpened={isOpened}
      onClose={onClose}
      onSubmit={handleSubmit}
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
          onChange={(e) => setCardName(e.target.value)}
          value={cardName}
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
          onChange={(e) => setCardLink(e.target.value)}
          value={cardLink}
        />
        <span className="popup__text-error popup__link-error"></span>
      </div>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
