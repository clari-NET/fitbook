import { createSlice } from '@reduxjs/toolkit';
import {getAuth} from 'firebase/auth';
import { setDoc, doc, serverTimestamp, updateDoc, collection, getDocs, query,
  where, orderBy, arrayUnion, deleteDoc } from 'firebase/firestore';
import db from '../../firebaseFiles/firebase.config';
import uuid from 'react-native-uuid';

const initialState = {
  currConvo: 'DMList',
  userConvos: {},
};

const getConversations = async (state, action) => {
  try {
    const auth = getAuth();
    const userRef = doc(db, 'users', auth.currentUser.uid);

    const userSnap = await getDoc(userRef);
    const convoIds = userSnap.DMs;
    const convoRef = collection(db, 'DMs');
    let convos = {};
    convoIds.map(async (convo) => {
      const q = query(convoRef, where('convo_id', '==', convo));
      const convoSnap = await getDocs(q);
      convos[convoSnap.convo_id] = convoSnap;
    });
    state.userConvos = convos;
  } catch (e) {
    console.log(e);
    state.currConvo = 'DMList';
  }
};

const setCurrentConversation = async (state, action) => {
  try {
    await getConversations();
    state.currConvo = action.payload;
  } catch (e) {
    console.log(e);
    state.currConvo = 'DMList';
  }
};

const revertConversation = async (state, action) => {
  try {
    await getConversations();
    state.currConvo = 'DMList';
  } catch (e) {
    console.log(e);
    state.currConvo = 'DMList';
  }
};

const sendMessage = async (state, action) => {
  try {
    const convoRef = doc(db, 'DMs', action.payload.convo_id);
    await updateDoc(convoRef, {
      messages: arrayUnion(action.payload), latest: action.payload,
    });
    await getConversations();
  } catch (e) {
    console.log(e);
    state.currConvo = 'DMList';
  }
};

// expects payload to be a conversation object where user1 is current user and user2 is the friend
const createConversation = async (state, action) => {
  const auth = getAuth();
  try {
    let found = false;
    Object.keys(state.userConvos).forEach((convo) => {
      if (state.userConvos[convo].user1 === action.payload
        || state.userConvos[convo] === action.payload) {
        found = true;
        state.currConvo = convo;
        return found;
      }
      return found;
    });
    if (!found) {
      const currentId = uuid.v4();
      await setDoc(doc(db, 'DMs', currentId), action.payload);
      state.currConvo = currentId;
      const currentUserRef = doc(db, 'users', auth.currentUser.uid);
      await updateDoc(currentUserRef, {
        DMs: arrayUnion(currentId),
      });
      const friendRef = doc(db, 'users', action.payload.user2);
      await updateDoc(friendRef, {
        DMs: arrayUnion(currentId),
      });
    }
    await getConversations();
  } catch (e) {
    console.log(e);
    state.currConvo = 'DMList';
  }
};

export const conversationSlice = createSlice({
  name: 'conversation',
  initialState,
  reducers: {
    getAll: getConversations,
    change: setCurrentConversation,
    reset: revertConversation,
    newConvo: createConversation,
  },
});

// Action creators are generated for each case reducer function
export const {
  reset,
  change,
  getAll,
  getOne,
} = conversationSlice.actions;

export default conversationSlice.reducer;
