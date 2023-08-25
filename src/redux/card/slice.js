import { createSlice } from '@reduxjs/toolkit';

const state = { id: '' };

export const cardSlice = createSlice({
  name: 'card',
  initialState: state,
  reducers: {
    addCard: (state, { payload }) => ({
      ...state,
      ...payload,
    }),
  },
});
export const { setCard } = cardSlice.actions;
export const cardReducer = cardSlice.reducer;
