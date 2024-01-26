import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cart-slice';
import catalogReducer from './catalog-slice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    catalogPage: catalogReducer,
  },
});

export default store;
