import { createSlice } from '@reduxjs/toolkit';

const saveDelivery = () => {
  const savedData = localStorage.getItem('delivery');
  return savedData
    ? JSON.parse(savedData)
    : {
        novaPoshta: '',
        ukrPoshta: '',
        other: '',
        department: '',
        courier: '',
        postAdress: '',
      };
};

const state = saveDelivery();

export const deliverySlice = createSlice({
  name: 'delivery',
  initialState: state,
  reducers: {
    addDelivery: (state, { payload }) => ({
      ...state,
      ...payload,
    }),
    removeDelivery: () => state,
  },
});

export const setDelivery = deliverySlice.actions;
export const deliveryReducer = deliverySlice.reducer;
