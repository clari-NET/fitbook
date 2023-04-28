import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../redux/user/userSlice';
import themeReducer from '../redux/theme/themeSlice';
import conversationReducer from '../redux/conversation/conversationSlice';

const store = configureStore({
  reducer: {
    theme: themeReducer,
    user: userReducer,
    conversation: conversationReducer,
  },
});

export default store;