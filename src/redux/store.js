import { configureStore } from '@reduxjs/toolkit';
import { reloadSlice } from './reload/slice';
import { authReducer } from './auth/slice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { modalReducer } from './modal/slice';
import { headerBottomReducer } from './header_bottom/slice';
import { basketReducer } from './basket/slice';

import { deliveryReducer } from './delivery/slice';
import { paymentReducer } from './payment/slice';

// Persisting token and role fields from auth slice to localstorage
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'permission'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    reload: reloadSlice.reducer,
    modal: modalReducer,
    headerBottom: headerBottomReducer,
    basket: basketReducer,
    delivery: deliveryReducer,
    payment: paymentReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
