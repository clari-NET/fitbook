import React, { useState, useEffect } from 'react';
import { Text, View, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { joinCommunity, leaveCommunity } from '../../redux/user/userSlice';

export default function JoinCommunity({ communityId }) {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.user);
  const inCommunity = data.communities && data.communities.includes(communityId);

  const communityToggle = () => {
    if (!inCommunity) {
      dispatch(joinCommunity(communityId));
    } else {
      dispatch(leaveCommunity(communityId));
    }
  };

  return (
    <View>
      {inCommunity
        ? <Button title='Joined' onPress={communityToggle} />
        : <Button title='Join' onPress={communityToggle} />}
    </View>
  );
}
