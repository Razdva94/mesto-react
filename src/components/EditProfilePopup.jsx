import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup({ isOpened, onClose, onUpdateUser, onLoadingState }) {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    if (currentUser) {
      setName(currentUser.name);
      setDescription(currentUser.about);
    }
  }, [currentUser, isOpened]);
  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name,
      about: description,
    });
  }
  return (
    <PopupWithForm
      name="saved"
      title="Редактировать&nbsp;профиль"
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
          type="text"
          minLength="2"
          maxLength="40"
          className="popup__input popup__input_type_name"
          id="name"
          placeholder="Имя"
          value={name || ""}
          onChange={(e) => setName(e.target.value)}
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
          value={description || ""}
          onChange={(e) => setDescription(e.target.value)}
        />
        <span className="popup__text-error about-error"></span>
      </div>
    </PopupWithForm>
  );
}
export default EditProfilePopup;
