import React, { useState, useEffect } from 'react';
import { Text, View, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { joinCommunity, leaveCommunity } from '../../redux/user/userSlice';

const styles = StyleSheet.create({
  leave: {
    backgroundColor: '#00A67C',
    borderRadius: 20,
    paddingVertical: 8,
    marginRight: 20,
    width: 50,
    height: 25,
  },
  join: {
    backgroundColor: '#43A78E',
    borderRadius: 20,
    paddingVertical: 8,
    marginRight: 20,
    width: 50,
    height: 25,
  },
  text: {
    color: '#FFF',
    fontSize: 9,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

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
        ? (
          <TouchableOpacity style={styles.leave} onPress={communityToggle}>
            <Text style={styles.text}>Leave</Text>
          </TouchableOpacity>
        )
        : (
          <TouchableOpacity style={styles.join} onPress={communityToggle}>
            <Text style={styles.text}>Join</Text>
          </TouchableOpacity>
        )}
    </View>
  );
}

{/* <Button title='Joined' onPress={communityToggle} /> */}
