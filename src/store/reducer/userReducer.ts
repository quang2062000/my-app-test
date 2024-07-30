import { createSlice } from '@reduxjs/toolkit';
import { getAllUserAction } from '../action/userAction';
import { UserState } from '../../types/users';

const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllUserAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllUserAction.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(getAllUserAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch users';
      });
  },
});

export default userSlice.reducer;
