import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import DropDown from 'react-native-paper-dropdown';
import PostList from '../lists/PostList';
import EventList from '../lists/EventList';

const posts = [
  {
    id: 1,
    user: {
      id: 1,
      profilePhoto: 'https://source.unsplash.com/random?profile',
      username: 'speed_demon_1',
      name: 'Speed Demon',
    },
    community: {
      id: 1,
      name: 'Roller Demons',
    },
    content: 'Rollerblading is the best! Plus, it is great for relieving stress and improving your mood. If you have not tried it yet, give it a go and feel the wind in your hair! #rollerblading #fitness #outdoors',
    date: '2023-04-24T10:30:00.000Z',
    lifts: 20,
    comments: [
      {
        comment_id: 1,
        user: {
          id: 2,
          profilePhoto: 'https://source.unsplash.com/random?profile',
          username: 'gymbro5',
          name: 'Gym Bro',
        },
        comment: 'Wow, I totally forgot about rollerblading, we should do it sometime together!',
        date: '2023-04-24T12:33:00.000Z',
        lifts: 3,
        report: false,
      },
    ],
  },
  {
    id: 2,
    user: {
      id: 3,
      profilePhoto: 'https://source.unsplash.com/random?profile',
      username: 'fit_gal',
      name: 'Fit Gal',
    },
    community: {
      id: 2,
      name: 'Yoga Enthusiasts',
    },
    content: 'Just completed a 60-minute power yoga session! Feeling energized and ready to take on the day! #yoga #fitness #mindfulness',
    date: '2023-04-24T12:15:00.000Z',
    lifts: 45,
    comments: [
      {
        comment_id: 2,
        user: {
          id: 4,
          profilePhoto: 'https://source.unsplash.com/random?profile',
          username: 'yoga_lover',
          name: 'Yoga Lover',
        },
        comment: 'Power yoga is so invigorating! I love starting my day with it too.',
        date: '2023-04-24T13:10:00.000Z',
        lifts: 10,
        report: false,
      },
      {
        comment_id: 3,
        user: {
          id: 2,
          profilePhoto: 'https://source.unsplash.com/random?profile',
          username: 'gymbro5',
          name: 'Gym Bro',
        },
        comment: 'Yoga seems like a great way to improve flexibility. Might have to give it a try!',
        date: '2023-04-24T14:00:00.000Z',
        lifts: 5,
        report: false,
      },
    ],
  },
  {
    id: 3,
    user: {
      id: 'user_2',
      profilePhoto: 'https://source.unsplash.com/random?profile',
      username: 'cardio_queen',
      name: 'Emma Stone',
    },
    community: {
      id: 'community_1',
      name: 'Cardio Lovers',
    },
    content: 'Jogging in the morning is my favorite way to start the day! The fresh air and beautiful sunrise are simply unbeatable. #jogging #morning #nature',
    date: '2023-04-24T08:15:00.000Z',
    lifts: 15,
    comments: [
      {
        comment_id: 1,
        user: {
          id: 'user_3',
          profilePhoto: 'https://source.unsplash.com/random?profile',
          username: 'fit_fanatic',
          name: 'John Smith',
        },
        comment: 'Totally agree! Morning jogs are the best!',
        date: '2023-04-24T09:20:00.000Z',
        lifts: 5,
        report: false,
      },
    ],
  },
  {
    id: 4,
    user: {
      id: 'user_4',
      profilePhoto: 'https://source.unsplash.com/random?profile',
      username: 'yoga_guru',
      name: 'Sophie Clark',
    },
    community: {
      id: 'community_2',
      name: 'Yoga Masters',
    },
    content: 'Yoga has changed my life in so many ways. It has helped me become more mindful, patient, and flexible. If you haven\'t tried it yet, I highly recommend giving it a shot! #yoga #mindfulness #wellness',
    date: '2023-04-24T16:45:00.000Z',
    lifts: 30,
    comments: [
      {
        comment_id: 7,
        user: {
          id: 'user_1',
          profilePhoto: 'https://source.unsplash.com/random?profile',
          username: 'speed_demon_1',
          name: 'Mike Johnson',
        },
        comment: 'I\'ve been thinking about trying yoga for a while now. Maybe it\'s time to finally give it a shot!',
        date: '2023-04-24T17:30:00.000Z',
        lifts: 4,
        report: false,
      },
      {
        comment_id: 9,
        user: {
          id: 'user_2',
          profilePhoto: 'https://source.unsplash.com/random?profile',
          username: 'cardio_queen',
          name: 'Emma Stone',
        },
        comment: 'I love yoga too! It has really helped me with my running.',
        date: '2023-04-24T18:00:00.000Z',
        lifts: 6,
        report: false,
      },
    ],
  },
];

const filterList = [
  { value: 'hot', label: 'Hot' },
  { value: 'top', label: 'Top' },
  { value: 'now', label: 'Now' },
  { value: 'thisWeek', label: 'This Week' },
  { value: 'thisMonth', label: 'This Month' },
  { value: 'thisYear', label: 'This Year' },
  { value: 'allTime', label: 'All Time' },
];

export default function Feed() {
  const [filter, setFilter] = useState('Recent');
  const [showDropDown, setShowDropDown] = useState(false);

  return (
    <ScrollView>
      <EventList events={new Array(5).fill(0)} />
      <DropDown
        label={filter}
        mode='outlined'
        list={filterList}
        value={filter}
        setValue={setFilter}
        visible={showDropDown}
        showDropDown={() => setShowDropDown(true)}
        onDismiss={() => setShowDropDown(false)}
      />
      <View>
        <PostList posts={posts} />
      </View>
    </ScrollView>
  );
}
