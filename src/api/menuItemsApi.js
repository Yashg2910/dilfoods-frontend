import {apiRequest} from "./apiFetch";

export const menuItemsApi = {
  async getItems() {
    return apiRequest('GET', `/menuItems`);
  }
};