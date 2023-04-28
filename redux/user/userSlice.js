import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: true,
  isSignedIn: false,
  data: {},
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
    updateUser: (state, action) => {
      state.data = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { loaded, loading, userStatus, updateUser } = userSlice.actions;

export default userSlice.reducer;
