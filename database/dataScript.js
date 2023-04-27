const {
  boolean,
  community,
  users,
  statistics,
  activities,
  posts,
  emojis,
  locations,
  events,
  comments,
} = require('./dataSet');

// Storing all collections of data
const communityAdmins = new Set();
let userPosts = Array.from(new Array(posts.length), (x, i) => i);
const allUsers = [];
const allCommunities = [];
const allEvents = [];
const allPosts = [];

// Creating array based on data
const createArray = (mostOutputWanted, dataLength) => (
  Array.from(
    { length: Math.floor(Math.random() * (mostOutputWanted - 1) + 1) },
    () => Math.floor(Math.random() * dataLength),
  )
);

// Randomizing selection from the data
const createDataFromArray = (array, data) => (
  array.map((item) => (data[item]))
);

// SINGLE USER

// Populating all data fields for a given user
const generateUser = (userId) => {
  // Looking at specific user
  const singleUser = users[userId - 1];

  // Generating random data using functions above for each section
  const friendData = createArray(10, 48);
  const communityData = createArray(10, 18);
  const favoriteCommunityData = createArray(3, 18);
  const interestsArray = createArray(10, 48);
  const interestsData = createDataFromArray(interestsArray, activities);
  const statsArray = createArray(3, 24);
  const statsData = createDataFromArray(statsArray, statistics);
  // const messagesData = createDataFromArray(messagesArray, messages);

  // Assigning admin to each community
  const assignAdmin = (communityDataLength) => {
    const allComms = createArray(communityDataLength, communityDataLength);
    const communityId = allComms[Math.floor(Math.random() * (allComms.length) + 1)];
    if (!communityAdmins.has(communityId) && communityId !== 0) {
      communityAdmins.add(communityId);
      return communityId;
    }
    return null;
  };

  const isAdminOfCommunity = assignAdmin(community.length);

  // Assigning message to specific user
  const assignMessage = () => {
    // Getting up to four random message Ids then removing it from the list of available messages
    const userMessages = userPosts.sort(
      () => Math.random() - Math.random(),
    ).slice(0, Math.floor(Math.random() * (4 - 1) + 1));
    for (let i = 0; i < userMessages.length; i += 1) {
      const index = userPosts.indexOf(userMessages[i]);
      if (index > -1) {
        userPosts.splice(index, 1);
      }
    }
    return userMessages;
  };

  const isPosterOfMessage = assignMessage();

  // Returning the data object
  return {
    id: userId,
    name: {
      first: singleUser.firstName,
      last: singleUser.lastName,
    },
    username: singleUser.username,
    interests: interestsData,
    profile_photo: `https://randomuser.me/api/portraits/${singleUser.gender}/${userId}.jpg`,
    settings: {
      dark_mode: boolean[Math.round(Math.random())],
    },
    friends: friendData,
    community_admin: {
      community_id: isAdminOfCommunity,
    },
    communities: communityData,
    favoriteCommunities: favoriteCommunityData,
    stats: statsData,
    messages: isPosterOfMessage,
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
  // Looking at specific community
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

// SINGLE EVENT
const generateEvent = (eventId) => {
  // Looking at specific event
  const singleEvent = events[eventId - 1];

  const membersArray = createArray(10, users.length);
  const membersData = createDataFromArray(membersArray, users);
  const eventMembers = membersData.map((user) => ({ user_id: user.id, username: `${user.firstName} ${user.lastName}` }));

  return {
    id: eventId,
    name: singleEvent.name,
    category: singleEvent.category,
    location: singleEvent.location,
    date_time: {
      date: singleEvent.date_time.date,
      time: singleEvent.date_time.time,
    },
    community: community[[Math.floor(Math.random() * (community.length) + 1)]],
    members: eventMembers,
  };
};

const generateAllEvents = (numberOfEvents) => {
  let id = numberOfEvents;
  while (id > 0) {
    allEvents.push(generateEvent(id));
    id -= 1;
  }
  return allEvents;
};

// SINGLE POST
const generatePost = (postId) => {
  // Looking at specific post
  const singlePost = posts[postId - 1];

  // Identify who posted the message
  const findPoster = () => {
    const poster = allUsers.filter((user) => user.messages.includes(postId));
    return poster[0];
  };
  // Grab user data from the right person
  const savePoster = findPoster();

  // Pulling from list of comments and adding to each post
  const commentsArray = createArray(6, 19);
  const commentsData = createDataFromArray(commentsArray, comments);

  const generateComments = () => {
    const singleUser = allUsers[Math.floor(Math.random() * (allUsers.length - 1) + 1)];
    return commentsData.map((singleComment) => (
      {
        comment_id: singleComment.comment_id,
        user: {
          id: singleUser.id,
          profilePhoto: singleUser.profile_photo,
          username: singleUser.username,
          name: `${singleUser.name.first} ${singleUser.name.last}`,
        },
        comment: singleComment.comment,
        date: singleComment.date,
        lifts: singleComment.lifts,
        report: singleComment.report,
      }
    ));
  };

  const commentsPerPost = generateComments();

  // Randomly put post in a community
  const generateSingleCommunity = () => {
    const singleCommunity = allCommunities[Math.floor(Math.random() * (allCommunities.length - 1) + 1)];
    return {
      id: singleCommunity.id,
      name: singleCommunity.name,
    };
  };

  const selectedCommunity = generateSingleCommunity();

  return {
    id: postId,
    user: {
      user_id: savePoster.id,
      profilePhoto: savePoster.profile_photo,
      username: savePoster.username,
      name: `${savePoster.name.first} ${savePoster.name.last}`,
    },
    community: selectedCommunity,
    content: singlePost.text,
    date: singlePost.createdAt,
    lifts: singlePost.lifts,
    comments: commentsPerPost,
  };
};

const generateAllPosts = (numberOfPosts) => {
  let id = numberOfPosts;
  while (id > 0) {
    allPosts.push(generatePost(id));
    id -= 1;
  }
  return allPosts;
};

generateAllUsers(users.length);
generateAllCommunities(community.length);
generateAllEvents(events.length);
generateAllPosts(posts.length - 1);
