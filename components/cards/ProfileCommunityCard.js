import React from 'react';
import {
  Button, Title, Card, Text
} from 'react-native-paper';
import {
  View, StyleSheet
} from 'react-native';

export default function ProfileCommunityCard({ item, handleFavorite, styles }) {
  const {
    banner,
    favorite,
    name,
    description,
  } = item;
  const handleImageError = () => {
    console.log('profile image load failed');
  }
  return (
    <Card >
      {banner ? (
        <Card.Cover source={{ uri: banner }} />
      ) : (
        <Card.Cover source={{ uri: 'default image image' }} />
      )}
      <View >
          <Card.Content style={styles.banner_container}>
            <View>
            <Title variant='titleSmall'>{name}</Title>
            <Text variant='bodySmall'>{description}</Text>
            </View>
            <Button style={styles.favStar} icon={favorite ? 'star' : 'star-outline'} onPress={() => console.log('favorited!')} />
          </Card.Content>
      </View>
    </Card>
  );
}
// const styles = StyleSheet.create({

//   card: {
//     // flexDirection: 'row',
//     alignItems: 'center',
//   },
//   content: {
//     // flexDirection: 'row',
//     alignItems: 'center',
//     padding: 10,
//   },
// });
