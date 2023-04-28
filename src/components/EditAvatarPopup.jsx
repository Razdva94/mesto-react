import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpened, onClose, onUpdateAvatar }) {
  const inputRef = React.useRef();
  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar(inputRef.current.value);
    inputRef.current.value = "";
  }
  return (
    <PopupWithForm
      name="update-avatar"
      title="Обновить аватар"
      isOpened={isOpened}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <div className="popup__input-container">
        <input
          required
          type="url"
          className="popup__input"
          id="popup__url"
          placeholder="Ссылка на картинку"
          ref={inputRef}
          onChange={(e) => (inputRef.current.value = e.target.value)}
        />
        <span className="popup__text-error popup__url-error"></span>
      </div>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
