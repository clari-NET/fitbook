import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currConvo: 'DMList',
};

export const conversationSlice = createSlice({
  name: 'conversation',
  initialState,
  reducers: {
    reset: (state) => {
      state.currConvo = 'DMList';
    },
    change: (state, action) => {
      state.currConvo = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { reset, change } = conversationSlice.actions;

export default conversationSlice.reducer;
