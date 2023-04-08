import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // array of menu items
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = [...action.payload];
    }
  },
});

export const { setItems } = menuSlice.actions;

export default menuSlice.reducer;