import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpened, onClose }) {
  return (
    <PopupWithForm
      name="create"
      title="Новое место"
      isOpened={isOpened}
      onClose={onClose}
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
  );
}

export default AddPlacePopup;
