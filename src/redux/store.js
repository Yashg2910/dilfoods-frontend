import { configureStore, combineReducers } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import userReducer from './userSlice';
import menuReducer from './menuSlice';

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  menu: menuReducer
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;