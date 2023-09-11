import { createSlice } from '@reduxjs/toolkit';
import { addToBasket, removeProduct } from './operations';

const saveBasket = () => {
  const savedData = localStorage.getItem('basketData');
  return savedData
    ? JSON.parse(savedData)
    : { basketItems: [], totalAmount: 0, totalDiscount: 0, totalPayment: 0 };
};

const initialState = saveBasket();

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    setQuantity: (state, action) => {
      const { _id, optionData, quantity } = action.payload;
      // const item = state.basketItems.find(item => item._id === _id);
      const item = state.basketItems.find(
        item => item.optionData._id === optionData._id,
      );

      if (item) {
        // item.quantity = quantity;
        item.optionData.quantity = quantity;
        functionTotalAmount(state);
        functionDiscountAmount(state);
        functionPaymentAmount(state);
      }
      localStorage.setItem('basketData', JSON.stringify(state));
    },
  },
  extraReducers: builder => {
    builder
      .addCase(addToBasket, (state, action) => {
        const { optionData, quantity } = action.payload;
        const existingItem = state.basketItems.find(
          item => item.optionData._id === optionData._id,
        );
        if (existingItem) {
          // existingItem.optionData.quantity = quantity;
          existingItem.optionData.quantity += 1;
          // existingItem.quantity += 1;
        } else {
          state.basketItems.push({ ...action.payload }); //, quantity: quantity
        }

        functionTotalAmount(state);
        functionDiscountAmount(state);
        functionPaymentAmount(state);
        localStorage.setItem('basketData', JSON.stringify(state));
      })
      .addCase(removeProduct, (state, action) => {
        const { _id, size } = action.payload;
        const deleteBasket = state.basketItems.filter(
          item => item._id !== _id || item.optionData.title !== size,
        );
        state.basketItems = deleteBasket;
        // state.basketItems.quantity = 1;
        functionTotalAmount(state);
        functionDiscountAmount(state);
        functionPaymentAmount(state);
        localStorage.setItem('basketData', JSON.stringify(state));
      });
  },
});

const functionTotalAmount = state => {
  state.totalAmount = state.basketItems.reduce((total, item) => {
    return total + item.optionData.quantity * item.optionData.currentPrice;
  }, 0);
};

const functionDiscountAmount = state => {
  state.totalDiscount = state.basketItems.reduce((discount, item) => {
    return discount + item.optionData.discount * item.optionData.quantity;
  }, 0);
};

const functionPaymentAmount = state => {
  state.totalPayment = state.basketItems.reduce((payment, item) => {
    return (
      payment +
      (item.optionData.currentPrice - item.optionData.discount) *
        item.optionData.quantity
    );
  }, 0);
};

export const { setQuantity } = basketSlice.actions;
export const basketReducer = basketSlice.reducer;
