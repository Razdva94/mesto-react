import React from "react";

function PopupWithForm({ name, title, children }) {
  return (
    <div className={`popup popup_type_${name}`}>
      <div className="popup__container">
        <button className="popup__close-icon" type="button" aria-label="close">
          {" "}
        </button>
        <form
          name={name}
          className={`popup__form popup__form_type_${name}`}
          noValidate
        >
          <h2 className="popup__title">{title}</h2>
          {children}
          <button type="submit" className="popup__button">
            Сохранить
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
// ю
// ю
// ю
// Попап сохранения
//  <div className="popup popup_type_saved">
// <div className="popup__container">
//   <buttonА
//     className="popup__close-icon"
//     type="button"
//     aria-label="close"
//   >
//     {" "}
//   </button>
//   <form
//     name="save"
//     className="popup__form popup__form_type_save"
//     noValidate
//   >
//     <h2 className="popup__title">Редактировать&nbsp;профиль</h2>
//     <div className="popup__input-container">
//       <input
//         required
//         type="text"
//         minLength="2"
//         maxLength="40"
//         className="popup__input popup__input_type_name"
//         id="name"
//         placeholder="Имя"
//       />
//       <span className="popup__text-error name-error"></span>
//     </div>
//     <div className="popup__input-container">
//       <input
//         required
//         type="text"
//         minLength="2"
//         maxLength="200"
//         className="popup__input popup__input_type_job"
//         id="about"
//         placeholder="О себе"
//       />
//       <span className="popup__text-error about-error"></span>
//     </div>
//     <button type="submit" className="popup__button">
//       Сохранить
//     </button>
//   </form>
// </div>
// </div>
// ю
// ю
// ю
// Попап создания
// <div className="popup popup_type_create">
// <div className="popup__container">
//   <button
//     className="popup__close-icon"
//     type="button"
//     aria-label="close"
//   >
//     {" "}
//   </button>
//   <form name="create" className="popup__form" noValidate>
//     <h2 className="popup__title">Новое место</h2>
//     <div className="popup__input-container">
//       <input
//         required
//         type="text"
//         minLength="2"
//         maxLength="30"
//         className="popup__input popup__input_type_name"
//         id="popup__name"
//         placeholder="Название"
//       />
//       <span className="popup__text-error popup__name-error"></span>
//     </div>
//     <div className="popup__input-container">
//       <input
//         required
//         type="url"
//         className="popup__input popup__input_type_job"
//         id="popup__link"
//         placeholder="Ссылка на картинку"
//       />
//       <span className="popup__text-error popup__link-error"></span>
//     </div>
//     <button type="submit" className="popup__button">
//       Создать
//     </button>
//   </form>
// </div>
// </div>
// ю
// ю
// ю
// Попап удаления
// <div className="popup popup_type_delete">
// <div className="popup__container">
//   <button
//     className="popup__close-icon"
//     type="button"
//     aria-label="close"
//   >
//     {" "}
//   </button>
//   <form
//     name="confirm"
//     className="popup__form popup__form_type_delete"
//     noValidate
//   >
//     <h2 className="popup__title">Вы уверены?</h2>
//     <button
//       type="submit"
//       className="popup__button popup__button_type_delete"
//     >
//       Да
//     </button>
//   </form>
// </div>
// </div>
// ю
// ю
// ю
// Попап создания аватара
// <div className="popup popup_type_update-avatar">
// <div className="popup__container">
//   <button
//     className="popup__close-icon"
//     type="button"
//     aria-label="close"
//   >
//     {" "}
//   </button>
//   <form
//     name="change-avatar"
//     className="popup__form popup__form_type_update-avatar"
//     noValidate
//   >
//     <h2 className="popup__title">Обновить аватар</h2>
//     <div className="popup__input-container">
//       <input
//         required
//         type="url"
//         className="popup__input"
//         id="popup__url"
//         placeholder="Ссылка на картинку"
//       />
//       <span className="popup__text-error popup__url-error"></span>
//     </div>
//     <button type="submit" className="popup__button">
//       Сохранить
//     </button>
//   </form>
// </div>
// </div>
// ю
// ю
// ю
/* Попап с картинкой  */
/* <div className="popup popup_type_picture-background">
        <div className="popup__picture-container">
          <button
            className="popup__close-icon"
            type="button"
            aria-label="close"
          >
            {" "}
          </button>
          <img className="popup__picture" src="#" alt="картинка" />
          <h3 className="popup__place-name"> </h3>
        </div>
      </div> */
