import { ADD_ORDER, ADD_COMMENT_TO_ORDER } from './operations';

const initialState = {
  orders: JSON.parse(localStorage.getItem('orders')) || [],
};

// export const orderSlice = createSlice({
//   name: 'order',
//   initialState,
//   reducers: {},
//   extraReducers: builder => {
//     builder.addCase(addOrder, (state, action) => {
//       const newOrders = [...state.orders, action.payload];

//       state.orders.push(newOrders);

//       localStorage.setItem('orders', JSON.stringify(state.orders));
//     });
//   },
// });

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ORDER:
      const newOrders = [...state.orders, action.payload];
      localStorage.setItem('orders', JSON.stringify(newOrders));
      return {
        ...state,
        orders: newOrders,
      };
    case ADD_COMMENT_TO_ORDER:
      const { orderId, comment } = action.payload;
      const updatedOrders = state.orders.map(order =>
        order.id === orderId ? { ...order, comment } : order,
      );
      localStorage.setItem('orders', JSON.stringify(updatedOrders));
      return {
        ...state,
        orders: updatedOrders,
      };
    default:
      return state;
  }
};

// export const orderReducer = orderSlice.reducer;
