class AuthToken {
  constructor() {
    this._token = '';
  }

  getToken() {
    return sessionStorage.getItem('souso_token');
    // return this._token;
  }

  setToken(newToken) {
    sessionStorage.setItem('souso_token', newToken);
    this._token = newToken;
  }
}

export const authToken = new AuthToken();
