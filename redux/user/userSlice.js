import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: true,
  isSignedIn: false,
  data: {
    communities: [3, 13, 13],
    community_admin: { community_id: null },
    favoriteCommunities: [6, 13],
    friends: [29, 10, 30, 16],
    id: 1,
    interests: ['Pilates',
      'Running',
      'Sailing',
      'Cycling',
      'Snowboarding',
      'Pole Dancing',
      'Volleyball'],
    messages: [],
    name: {
      first: 'Emma',
      last: 'Gonzalez',
    },
    profile_photo: 'https://randomuser.me/api/portraits/women/1.jpg',
    settings: { dark_mode: true },
    stats: [{
      category: 'Basketball',
      field: 'Points',
      record: 31,
    }],
    username: 'EmmyPop',
  }, // userSelf data
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
