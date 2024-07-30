import { configureStore } from '@reduxjs/toolkit';
import exampleReducer from '../features/exampleSlice';
import userReducer from './reducer/userReducer';

export const store = configureStore({
  reducer: {
    example: exampleReducer,
    users : userReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
