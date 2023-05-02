import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({
  isOpened,
  onClose,
  onUpdateAvatar,
  onLoadingState,
}) {
  const inputRef = React.useRef();
  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar(inputRef.current.value);
  }
  React.useEffect(() => {
    inputRef.current.value = "";
  }, [isOpened]);
  return (
    <PopupWithForm
      name="update-avatar"
      title="Обновить аватар"
      isOpened={isOpened}
      onClose={onClose}
      onSubmit={handleSubmit}
      onLoadingState={onLoadingState}
      buttonText="Сохранить"
      buttonTextOnLoading="Сохранение..."
    >
      <div className="popup__input-container">
        <input
          required
          type="url"
          className="popup__input"
          id="popup__url"
          placeholder="Ссылка на картинку"
          ref={inputRef}
        />
        <span className="popup__text-error popup__url-error"></span>
      </div>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
