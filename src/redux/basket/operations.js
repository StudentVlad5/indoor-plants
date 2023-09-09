import { createAction } from '@reduxjs/toolkit/dist';

export const addToBasket = createAction('basket/addToBasket');
export const removeProduct = createAction('basket/removeProduct');
