export const editButtonSelector = ".profile__button-container";
export const plusButtonSelector = ".profile__add-button";
export const updateAvatarButtonSelector = ".profile__avatar-hover";

export const profilePopupSelector = ".popup_type_saved";
export const nameOutputProfileSelector = ".profile__title";
export const jobOutputProfileSelector = ".profile__text";
export const avatarSelector = ".profile__avatar";
export const createCardPopupSelector = ".popup_type_create";
export const createCardFormSelector = '[name="create"]';
export const profilePicturePopupSelector = ".popup_type_update-avatar";
export const deleteCardPopupSelector = ".popup_type_delete";
export const popupPictureContainerSelector = ".popup_type_picture-background";
export const profileFormSelector = '[name="save"]';
export const profileInputName = profileForm.querySelector(
  ".popup__input_type_name"
);
export const profileInputselfInfo = profileForm.querySelector(
  ".popup__input_type_job"
);
export const userCardsContainerSelector = ".elements";
export const profilePictureFormSelector = '[name="change-avatar"]';

export const createCardButton = createCardForm.querySelector(".popup__button");
export const profileButton = profileForm.querySelector(".popup__button");
export const profilePictureButton =
  profilePictureForm.querySelector(".popup__button");
export const settings = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  buttonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_inactive",
  inputTypeErrorClass: "popup__input_type_error",
  inputErrorClassActive: "popup__input-error_active",
};
