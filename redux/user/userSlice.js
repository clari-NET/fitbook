import { createSlice } from '@reduxjs/toolkit';
import { updateDoc, doc } from 'firebase/firestore';
import db from '../../firebaseFiles/firebase.config';

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
  const joinCommunityUser = async () => {
    try {
      await updateDoc(doc(db, 'users', state.data.id), {
        communities: state.data.communities,
      });
    } catch (err) {
      console.error(`Unable to add community id: ${action.payload}`);
    }
  };
  const joinCommunityCommunities = async () => {
    try {
      await updateDoc(doc(db, 'communities', action.payload.toString()), {
        members: {
          user_id: state.data.id,
        },
      });
    } catch (err) {
      console.error(`Unable to add user id: ${state.data.id}`);
    }
  };
  joinCommunityUser();
  joinCommunityCommunities();
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
