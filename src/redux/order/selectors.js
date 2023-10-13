export const selectOrders = state => state.order.orders;
export const selectComment = (state, orderId) => {
  const order = state.order.orders.find(order => order.id === orderId);
  return order ? order.comment : '';
};
