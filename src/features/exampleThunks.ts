import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchExampleData = createAsyncThunk(
  'example/fetchData',
  async () => {
    const response = await axios.get('https://localhost:3000/');
    return response.data;
  }
);
