class AuthToken {
  constructor() {
    this._token = '';
  }

  getToken() {
    return localStorage.getItem('souso_token');
    // return this._token;
  }

  setToken(newToken) {
    localStorage.setItem('souso_token', newToken);
    this._token = newToken;
  }
}

export const authToken = new AuthToken();
