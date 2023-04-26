const {
  boolean,
  community,
  users,
  statistics,
  activities,
  messages,
  emojis,
  locations,
} = require('./dataSet');

// Storing all collections of data
const communityAdmins = new Set();
const allUsers = [];
const allCommunities = [];

// Creating array based on data
const createArray = (mostOutputWanted, dataLength) => (
  Array.from(
    { length: Math.floor(Math.random() * (mostOutputWanted - 1) + 1) },
    () => Math.floor(Math.random() * dataLength),
  )
);

// SINGLE USER

// Populating all data fields for a given user
const generateUser = (userId) => {
  // Looking at specific user
  const singleUser = users[userId - 1];

  // Randomizing selection from the data
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
    const allCommunities = createArray(communityDataLength, communityDataLength);
    const communityId = allCommunities[Math.floor(Math.random() * (allCommunities.length) + 1)];
    if (!communityAdmins.has(communityId) && communityId !== 0) {
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
  while (id > 0) {
    allUsers.push(generateUser(id));
    id -= 1;
  }
  return allUsers;
};

// SINGLE COMMUNITY
const generateCommunity = (communityId) => {
  // Invoking generate users so that it occurs first
  generateAllUsers(users.length);
  // Looking at specific user
  const singleCommunity = community[communityId - 1];

  const findAdmin = () => {
    let admin;
    allUsers.forEach((user) => {
      if (user.community_admin.community_id === communityId) {
        admin = { id: user.id, name: user.name };
      }
    });
    return admin || null;
  };

  const isAdmin = findAdmin();

  const findMembers = () => {
    const members = allUsers.filter((user) => user.communities.includes(communityId));
    return members.map((user) => ({ user_id: user.id }));
  };

  const allMembers = findMembers();

  return {
    id: communityId,
    name: singleCommunity.name,
    description: singleCommunity.description,
    banner: 'https://picsum.photos/700',
    icon: emojis[[Math.floor(Math.random() * (emojis.length) + 1)]],
    admin: isAdmin,
    location: locations[[Math.floor(Math.random() * (locations.length) + 1)]],
    members: allMembers,
    favorite: boolean[Math.round(Math.random())],
  };
};

const generateAllCommunities = (numberOfCommunities) => {
  let id = numberOfCommunities;
  while (id > 0) {
    allCommunities.push(generateCommunity(id));
    id -= 1;
  }
  return allCommunities;
};

generateAllCommunities(community.length);

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
