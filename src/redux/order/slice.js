import { createSlice } from '@reduxjs/toolkit';
import { ADD_ORDER, addOrder } from './operations';

const initialState = {
  orders: JSON.parse(localStorage.getItem('orders')) || [],
};

// export const orderSlice = createSlice({
//   name: 'order',
//   initialState,
//   reducers: {},
//   extraReducers: builder => {
//     builder.addCase(addOrder, (state, action) => {
//       // Змінюємо стан імутабельно за допомогою immer
//       const newOrders = [...state.orders, action.payload];

//       state.orders.push(newOrders);

//       // Оновлюємо дані у localStorage
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
    default:
      return state;
  }
};

// export const orderReducer = orderSlice.reducer;
