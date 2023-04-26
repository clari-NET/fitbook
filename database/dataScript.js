const {
  boolean,
  gender,
  community,
  users,
  statsistics,
  activities
} = require('./dataSet');

// Get data for each section
// Write function to randomly generate data for each section
// Post it to the database

// Generate a single user
const generateUser = (userId) => {
  const singleUser = users[userId];

  const friendData = Array.from(
    { length: Math.floor(Math.random() * (10 - 1) + 1) },
    () => Math.floor(Math.random() * 48),
  );

  const communityData = Array.from(
    { length: Math.floor(Math.random() * (10 - 1) + 1) },
    () => Math.floor(Math.random() * 18),
  );

  const interestsArray = Array.from(
    { length: Math.floor(Math.random() * (10 - 1) + 1) },
    () => Math.floor(Math.random() * 48),
  );

  const interestsData = interestsArray.map((interest) => (statsistics[interest]));

  const statsArray = Array.from(
    { length: Math.floor(Math.random() * (3 - 1) + 1) },
    () => Math.floor(Math.random() * 24),
  );
  const statsData = statsArray.map((stat) => (statsistics[stat]));

  const messagesArray = Array.from(
    { length: Math.floor(Math.random() * (10 - 1) + 1) },
    () => Math.floor(Math.random() * 24),
  );
  const messagesData = messagesArray.map((message) => (statsistics[message]));

  const createArray = (mostOutputWanted, dataLength) => (
    return Array.from(
      { length: Math.floor(Math.random() * (mostOutputWanted - 1) + 1) },
      () => Math.floor(Math.random() * dataLength),
    )
  )

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
    community_admin: [
      {
        id: Math.floor(Math.random() * (48 - 1) + 1),
      },
    ],
    communities: communityData,
    stats: statsData,
    messages: messagesData,
  };
};

// Generate all users
const allUsers = () => {
  users.forEach(user => {
    generateUser(user.id);
  });
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
