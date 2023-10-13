export const ADD_ORDER = 'ADD_ORDER';
export const addOrder = order => ({
  type: ADD_ORDER,
  payload: order,
});

export const ADD_COMMENT_TO_ORDER = 'ADD_COMMENT_TO_ORDER';
export const addCommentToOrder = (orderId, comment) => ({
  type: 'ADD_COMMENT_TO_ORDER',
  payload: { orderId, comment },
});
