import React, { useState, useEffect } from 'react';
import { Text, View, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

export default function JoinCommunity({ communityId }) {
  const dispatch = useDispatch();
  // const { data } = useSelector((state) => state.related);
  const [inCommunity, setInCommunity] = useState(false);

  // useState(() => {
  //   if (data.communities.includes(communityId)) { setInCommunity(true); }
  // }, []);

  const communityToggle = () => {
    if (!inCommunity) {
      // dispatch(joinACommunity(communityId))
      setInCommunity(true);
    } else {
      // dispatch(leaveACommunity(communityId))
      setInCommunity(false);
    }
    // Add this to Redux store
    // function joinACommunity(state = initialState, action) {
    //   state.user.data.communities.push(action.payload);
    // }

    // function leaveACommunity(state = initialState, action) {
    //   const index = state.user.data.communities.indexOf(action.payload);
    //   if (index > -1) { state.user.data.communities.splice(index, 1); }
    // }
  };

  return (
    <View>
      {inCommunity
        ? <Button title='Joined' onPress={communityToggle} />
        : <Button title='Join' onPress={communityToggle} />}
    </View>
  );
}
