import React, { useState } from 'react';
import { Button } from 'react-native-paper';

export default function AddFriendButton({ userId }) {
  const [requested, setRequested] = useState(false);

  const handleAddFriend = () => {
    // need logic for sending friend request
    setRequested(true);
  };

  return (
    <Button
      mode="contained"
      onPress={handleAddFriend}
      disabled={requested}
    >
      {requested ? 'Friend Request Sent' : 'Add Friend'}
    </Button>
  );
}
