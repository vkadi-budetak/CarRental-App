import { createAsyncThunk } from '@reduxjs/toolkit';
import { requestAdverts } from 'services/api';

export const fetchAdverts = createAsyncThunk(
  'adverts/getAll',
  async (params, thunkAPI) => {
    try {
      const adverts = await requestAdverts(params);

      return adverts;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.massage);
    }
  }
);
