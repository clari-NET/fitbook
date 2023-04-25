import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: true,
  isSignedIn: false,
};

function changeSignIn(state = initialState, action) {
  state.isSignedIn = action.payload;
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loaded: (state) => {
      state.isLoading = false;
    },
    loading: (state) => {
      state.isLoading = true;
    },
    userStatus: changeSignIn,
  },
});

// Action creators are generated for each case reducer function
export const { loaded, loading, userStatus } = userSlice.actions;

export default userSlice.reducer;
