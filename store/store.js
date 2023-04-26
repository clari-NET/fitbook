import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../redux/user/userSlice';
import themeReducer from '../redux/theme/themeSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    user: userReducer,
  },
});
