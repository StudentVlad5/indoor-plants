import { createSlice } from '@reduxjs/toolkit';

const savePayment = () => {
  const savedData = localStorage.getItem('payment');
  return savedData
    ? JSON.parse(savedData)
    : {
        prepaidCard: '',
        accountPayment: '',
        cashOnDelivery: '',
      };
};

const state = savePayment();

export const paymentSlice = createSlice({
  name: 'payment',
  initialState: state,
  reducers: {
    addPayment: (state, { payload }) => ({
      ...state,
      ...payload,
    }),
    removePayment: () => state,
  },
});

export const setPayment = paymentSlice.actions;
export const paymentReducer = paymentSlice.reducer;
