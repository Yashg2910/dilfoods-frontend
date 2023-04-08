const userTokenKey = 'dillfoods.userToken';
const userKey = 'dillfoods.user';

export const userSession = {
  getUser: () => {
    return JSON.parse(window.localStorage.getItem(userKey));
  },
  setUser: (user) => {
    return window.localStorage.setItem(userKey, JSON.stringify(user));
  },
  getUserToken: () => {
    return window.localStorage.getItem(userTokenKey);
  },
  setUserToken: (token) => {
    return window.localStorage.setItem(userTokenKey, token);
  }
};