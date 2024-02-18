import { createSlice } from '@reduxjs/toolkit';
import { fetchAdverts } from './advertsThunk';

const INITIAL_STATE = {
  adverts: [],
  page: 1,
  isLoading: false,
  error: null,
  filterBrand: null,
};

const advertsSlice = createSlice({
  name: 'adverts',
  initialState: INITIAL_STATE,

  reducers: {
    incPage(state) {
      state.page = state.page + 1;
    },
    resetAdverts(state) {
      state.page = 1;
      state.adverts = [];
    },
    setFilterBrand: (state, action) => {
      state.filterBrand = action.payload;
      state.page = 1;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(fetchAdverts.fulfilled, (state, action) => {
        state.isLoading = false;
        if (state.page === 1) {
          state.adverts = action.payload;
        } else {
          state.adverts = [...state.adverts, ...action.payload];
        }
      })
      .addCase(fetchAdverts.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchAdverts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const { incPage, resetAdverts, setFilterBrand } = advertsSlice.actions;
export const advertsReducer = advertsSlice.reducer;
