import {apiRequest, formDataReq} from "./apiFetch";

export const menuItemsApi = {
  async getItems() {
    return apiRequest('GET', `/menuItems`);
  },
  async createItem(item) {
    return formDataReq('POST', `/menuItems`, item);
  },
  async updateItem(item) {
    return apiRequest('PUT', `/menuItems/${item._id}`, item);
  },
  async deleteItem(item) {
    return apiRequest('DELETE', `/menuItems/${item._id}`);
  }
};