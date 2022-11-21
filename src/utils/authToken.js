class AuthToken {
  constructor() {
    this._token = '';
  }

  getToken() {
    return this._token;
  }

  setToken(newToken) {
    this._token = newToken;
  }
}

export const authToken = new AuthToken();
