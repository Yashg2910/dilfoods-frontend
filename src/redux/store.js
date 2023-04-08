import { configureStore, combineReducers } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import userReducer from './userSlice';

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;