import React from "react";
import PopupWithForm from "./PopupWithForm";
import useForm from "../hooks/useForm";

function AddPlacePopup({ isOpened, onClose, onAddPlace, onLoadingState }) {
  const { values, handleChange, setValues } = useForm();
  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace(values);
  }

  React.useEffect(() => {
    setValues({});
  }, [isOpened, setValues]);

  return (
    <PopupWithForm
      name="create"
      title="Новое место"
      isOpened={isOpened}
      onClose={onClose}
      onSubmit={handleSubmit}
      onLoadingState={onLoadingState}
      buttonText="Создать"
      buttonTextOnLoading="Создание..."
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
          onChange={handleChange}
          value={values.popup__name || ""}
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
          onChange={handleChange}
          value={values.popup__link || ""}
        />
        <span className="popup__text-error popup__link-error"></span>
      </div>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
