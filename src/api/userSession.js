const userTokenKey = 'dillfoods.userToken';

export const userSession = {
  getUserToken: () => {
    return window.localStorage.getItem(userTokenKey);
  },
  setUserToken: (token) => {
    return window.localStorage.setItem(userTokenKey, token);
  }
};