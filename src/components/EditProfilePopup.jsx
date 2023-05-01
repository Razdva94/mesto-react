import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import useForm from "../hooks/useForm";

function EditProfilePopup({ isOpened, onClose, onUpdateUser, onLoadingState }) {
  const { values, handleChange, setValues } = useForm();
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    if (currentUser) {
      setValues(currentUser);
    }
  }, [currentUser, isOpened, setValues]);
  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser(
      values
    );
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
          value={values.name || ""}
          onChange={handleChange}
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
          value={values.about || ""}
          onChange={handleChange}
        />
        <span className="popup__text-error about-error"></span>
      </div>
    </PopupWithForm>
  );
}
export default EditProfilePopup;
