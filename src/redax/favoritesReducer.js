import { createSlice } from "@reduxjs/toolkit";

const favoritesInitialState = {
  items: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: favoritesInitialState,
  reducers: {
    addItem(state, action) {
      state.items.push(action.payload);
    },
    deleteItem(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addItem, deleteItem } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;