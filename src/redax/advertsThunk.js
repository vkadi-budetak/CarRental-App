import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  requestAdverts,
} from 'services/api';

export const fetchAdverts = createAsyncThunk(
  'adverts/getAll',
  async (_, thunkAPI) => {
    try {
      const adverts = await requestAdverts();

      return adverts; 
    } catch (error) {
      return thunkAPI.rejectWithValue(error.massage);
    }
  }
);
