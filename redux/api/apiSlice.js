// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { getAuth } from 'firebase/auth';
// import { setDoc, doc, serverTimestamp, updateDoc, collection, getDocs, query,
//   where, orderBy, arrayUnion, deleteDoc } from 'firebase/firestore';
// import db from '../../firebaseFiles/firebase.config';
// import uuid from 'react-native-uuid';

// export const api = createApi({
//   // The cache reducer expects to be added at `state.api` (already default - this is optional)
//   reducerPath: 'api',
//   // All of our requests will have URLs starting with '/fakeApi'
//   baseQuery: fetchBaseQuery({}),
//   keepUnusedDataFor: 10,
//   // The "endpoints" represent operations and requests for this server
//   endpoints: (build) => ({
//     fetchConversations: build.query({
//       async queryFn() {
//         try {
//           const auth = getAuth();
//           const userRef = doc(db, 'users', auth.currentUser.uid);

//           const userSnap = await getDoc(userRef);
//           const convoIds = userSnap.DMs;
//           const convoRef = collection(db, 'DMs');
//           let convos = {};
//           convoIds.map(async (convo) => {
//             const q = query(convoRef, where('convo_id', '==', convo));
//             const convoSnap = await getDocs(q);
//             convos[convoSnap.convo_id] = convoSnap;
//           });
//           return { data: convos };
//         } catch (error) {
//           return { error };
//         }
//       },
//     }),

//     sendMessage: build.query({
//       async queryFn(conversation) {
//         try {
//           const convoRef = doc(db, 'DMs', conversation.convo_id);
//           await updateDoc(convoRef, {
//             messages: arrayUnion(conversation.message), latest: conversation.message,
//           });
//         } catch (e) {
//           console.log(e);
//           state.currConvo = 'DMList';
//         }
//       },
//     }),
//   }),

//   createConversation: build.query({
//     async queryFn(conversation) {
//       try {
//         const convoRef = doc(db, 'DMs', conversation.convo_id);
//         await updateDoc(convoRef, {
//           messages: arrayUnion(conversation.message), latest: conversation.message,
//         });
//       } catch (e) {
//         console.log(e);
//         state.currConvo = 'DMList';
//       }
//     },
//   }),
// }),
//   // EXAMPLE MUTATION endpoint!!!
//   // updateReview: build.mutation({
//   //   query: reviewId => ({
//   //     url: `/reviews/${reviewId}`,
//   //     method: 'POST',
//   //     body: updatedReview
//   //   })
// });

// // Export the auto-generated hook for the `getPosts` query endpoint
// export const {
//   useFetchConversationsQuery,
//   useSendMessageQuery,
// } = api;
