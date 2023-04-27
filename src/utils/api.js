class Api {
  constructor(options) {
    this._headers = options.headers;
    this._url = options.baseUrl;
  }

  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      headers: this._headers,
    }).then((res) => this._checkResponse(res));
  }

  getInitialProfile() {
    return fetch(`${this._url}/users/me`, {
      headers: this._headers,
    }).then((res) => this._checkResponse(res));
  }

  deleteCardFromServer(cardId) {
    return fetch(`${this._url}/cards/${cardId}`, {
      method: "DELETE",
      headers: this._headers,
    }).then((res) => this._checkResponse(res));
  }

  postCardToServer(cardInfo) {
    return fetch(`${this._url}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: cardInfo.popup__name,
        link: cardInfo.popup__link,
      }),
    }).then((res) => this._checkResponse(res));
  }

  changeProfileInfo(getInfo) {
    return fetch(`${this._url}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: getInfo.name,
        about: getInfo.about,
      }),
    }).then((res) => this._checkResponse(res));
  }

  changeAvatarImage(avatarUrl) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: avatarUrl.popup__url,
      }),
    }).then((res) => this._checkResponse(res));
  }

  changeLikeCardStatus(cardId, value) {
    if (value) {
      return fetch(`${this._url}/cards/${cardId}/likes`, {
        method: "PUT",
        headers: this._headers,
      }).then((res) => this._checkResponse(res));
    }
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: "DELETE",
      headers: this._headers,
    }).then((res) => this._checkResponse(res));
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }
}
const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-62",
  headers: {
    authorization: "0d8f1e17-52e4-4e28-9682-deb39acca963",
    "Content-Type": "application/json",
  },
});

export default api;
