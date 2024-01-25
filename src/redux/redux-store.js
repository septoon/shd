import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cart-reducer';
import catalogReducer from './catalog-reducer';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    catalogPage: catalogReducer,
  },
});

export default store;
