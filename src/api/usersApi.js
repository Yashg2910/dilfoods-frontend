import {apiRequest} from "./apiFetch";

export const usersApi = {
  async login(email, password) {
    return apiRequest('POST', "/login", {email, password});
  }
};