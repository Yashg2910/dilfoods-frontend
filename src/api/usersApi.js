import {apiRequest} from "./apiFetch";

export const usersApi = {
  async login(email, password) {
    return apiRequest('POST', "/login", {email, password});
  },
  async sendOtp(phone) {
    return apiRequest('POST', "/send-otp", {phone});
  },
  async verifyOtp(phone, otp) {
    return apiRequest('POST', "/verify-otp", {phone, otp});
  }
};