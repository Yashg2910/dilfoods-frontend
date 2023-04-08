import {apiRequest} from "./apiFetch";

export const ordersApi = {
  async getOrders() {
    return apiRequest('GET', `/orders`);
  },
  async createOrder(order) {
    return apiRequest('POST', `/orders`, order);
  },
  async updateOrder(order) {
    return apiRequest('PUT', `/orders/${order._id}`, order);
  }
};