import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';

export default function Post () {

  return (
    <View >
      <Button
        // ProfilePhoto
        title="Profile"
        onPress={() => {
          // navigation.navigate('Community');
        }}
      />
      <Button
        title="Community"
        onPress={() => {
          // navigation.navigate('Community');
        }}
      />
      <Text>Date</Text>
      <Button
        title="Profile"
        onPress={() => {
          // navigation.navigate('Profile');
        }}
      />
      <Text>Post</Text>
      <Button
        title="Lift"
        onPress={() => {
          // Increase Like count by one
        }}
      />
      <Button
        title="Comment"
        onPress={() => {
          //opens directly with keyboard open
          // navigation.navigate('CommentView');
        }}
      />
      <Button
        title="Share"
        onPress={() => {
          //opens directly with keyboard open
          // navigation.navigate('CommentView');
        }}
      />

    </View>
  )
}