import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchAdverts } from './advertsThunk';

const INITIAL_STATE = {
  adverts: [],
  isLoading: false,
  error: null,
  filter: '',
};

const advertsSlice = createSlice({
  name: 'adverts',
  initialState: INITIAL_STATE,

  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(fetchAdverts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.adverts = action.payload;
      })
      .addMatcher(
        isAnyOf(
          fetchAdverts.pending,
        ),
        state => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchAdverts.rejected,
        ),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      ),
});

export const { setFilter } = advertsSlice.actions;
export const advertsReducer = advertsSlice.reducer;