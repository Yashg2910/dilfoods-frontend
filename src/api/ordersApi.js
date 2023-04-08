import {apiRequest} from "./apiFetch";

export const ordersApi = {
  async getOrders() {
    return apiRequest('GET', `/orders`);
  },
  async createOrder(userId, items, totalPrice) {
    const newOrder = {userId, items: items.map((i) => ({menuItemId: i._id, quantity: i.quantity})), totalPrice};
    return apiRequest('POST', `/orders`, newOrder);
  },
  async updateOrder(order) {
    return apiRequest('PUT', `/orders/${order._id}`, order);
  },
  async getMyOrders() {
    return apiRequest('GET', '/my/orders');
  }
};