import React from "react";

function PopupWithForm({
  name,
  title,
  isOpened,
  children,
  onClose,
  onSubmit,
  onLoadingState,
  buttonText,
  buttonTextOnLoading,
}) {
  return (
    <div
      className={`popup popup_type_${name} ${
        isOpened && (isOpened = "popup_opened")
      }`}
    >
      <div className="popup__container">
        <button
          className="popup__close-icon"
          type="button"
          aria-label="close"
          onClick={onClose}
        />
        <form
          name={name}
          className={`popup__form popup__form_type_${name}`}
          noValidate
          onSubmit={onSubmit}
        >
          <h2 className="popup__title">{title}</h2>
          {children}
          <button type="submit" className="popup__button">
            {`${onLoadingState ? buttonTextOnLoading : buttonText}`}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
