import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: true,
  isSignedIn: false,
  data: {},
};

function changeSignIn(state = initialState, action) {
  state.isSignedIn = action.payload;
}
function joinACommunity(state = initialState, action) {
  if (state.data.communities && !state.data.communities.includes(action.payload)) {
    state.data.communities.push(action.payload);
  } else {
    state.data.communities = [action.payload];
  }
}
function leaveACommunity(state = initialState, action) {
  if (state.data.communities) {
    const index = state.data.communities.indexOf(action.payload);
    if (index > -1) { state.data.communities.splice(index, 1); }
  }
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
    joinCommunity: joinACommunity,
    leaveCommunity: leaveACommunity,
  },
});

// Action creators are generated for each case reducer function
export const {
  loaded,
  loading,
  userStatus,
  updateUser,
  joinCommunity,
  leaveCommunity,
} = userSlice.actions;

export default userSlice.reducer;
