const {
  boolean,
  gender,
  community,
  users,
  statistics,
  activities,
  messages,
} = require('./dataSet');

// Storing all community admins
const communityAdmins = new Set();

// Populating all data fields for a given user
const generateUser = (userId) => {
  // Looking at specific user
  const singleUser = users[userId];

  // Randomizing selection functions
  const createArray = (mostOutputWanted, dataLength) => (
    Array.from(
      { length: Math.floor(Math.random() * (mostOutputWanted - 1) + 1) },
      () => Math.floor(Math.random() * dataLength),
    )
  );

  const createDataFromArray = (array, data) => (
    array.map((item) => (data[item]))
  );

  // Generating random data using functions above for each section
  const friendData = createArray(10, 48);
  const communityData = createArray(10, 18);
  const interestsArray = createArray(10, 48);
  const interestsData = createDataFromArray(interestsArray, activities);
  const statsArray = createArray(3, 24);
  const statsData = createDataFromArray(statsArray, statistics);
  const messagesArray = createArray(10, 24);
  const messagesData = createDataFromArray(messagesArray, messages);

  // Assigning admin to each community
  const assignAdmin = (communityDataLength) => {
    const communityId = Math.floor(Math.random() * (communityDataLength - 1) + 1);
    if (!communityAdmins.has(communityId)) {
      communityAdmins.add(communityId);
      return communityId;
    }
    return null;
  };

  const isAdminOfCommunity = assignAdmin(community.length);

  // Returning the data object
  return {
    id: userId,
    name: {
      first: singleUser.firstName,
      last: singleUser.lastName,
    },
    username: singleUser.username,
    interests: interestsData,
    profile_photo: `https://randomuser.me/api/portraits/${singleUser.gender}/${Math.floor(Math.random() * (50 - 1) + 1)}.jpg`,
    settings: {
      dark_mode: boolean[Math.round(Math.random())],
    },
    friends: friendData,
    community_admin: {
      community_id: isAdminOfCommunity,
    },
    communities: communityData,
    stats: statsData,
    messages: messagesData,
  };
};

// Generate all users
const generateAllUsers = (numberOfUsers) => {
  let id = numberOfUsers;
  const allUsers = [];
  while (id > 0) {
    allUsers.push(generateUser(id));
    id -= 1;
  }
  return allUsers;
};

// const communities = {
//   id: 'number',
//   name: 'string',
//   description: 'string',
//   banner: 'url',
//   icon: 'unix code',
//   admin: {
//     id: 'number',
//     name: 'string',
//   },
//   location: 'string',
//   members: [
//     {
//       user_id: 'number',
//     },
//   ],
//   favorite: 'boolean',
// };

// const events = {
//   id: 'number',
//   name: 'string',
//   category: 'string',
//   location: 'string',
//   date_time: {
//     date: 'date',
//     time: 'time',
//   },
//   community: {
//     id: 'number',
//     name: 'string',
//   },
//   members: {
//     id: 'number',
//     username: 'string',
//   },
// };

// const posts = {
//   id: 'number',
//   user: {
//     user_id: 'number',
//     profilePhoto: 'url',
//     username: 'string',
//     name: 'string',
//   },
//   community: {
//     id: 'number',
//     name: 'string',
//   },
//   content: 'string',
//   date: 'date',
//   lifts: 'number',
//   comments: [
//     {
//       comment_id: 'number',
//       user: {
//         id: 'number',
//         profilePhoto: 'url',
//         username: 'string',
//         name: 'string',
//       },
//       comment: 'string',
//       date: 'date',
//       lifts: 'number',
//       report: 'boolean',
//     },
//   ],
// };
