import React from 'react';
import {
  Card,
  Button,
  Text,
  useTheme,
} from 'react-native-paper';
import { View } from 'react-native';


export default function Event({ event, close }) {
  return (
    <Card>
      <Card.Cover
        style={{ width: '100%' }}
        source={{ uri: 'https://picsum.photos/700' }}
      />
      <Card.Content>
        <Text variant='titleSmall'>Event Name</Text>
        <Text variant='titleSmall'>Granite, California</Text>
        <Text variant='bodySmall'>Tuesday, May 3rd 11:00AM PST</Text>
        <Text variant='titleSmall'>Roller Demons take over granite park</Text>
        <Text variant='bodySmall'>Event description: lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed augue vestibulum, semper dolor quis, viverra lacus. Duis ut tellus pellentesque, imperdiet ipsum in, euismod urna. Cras tristique enim massa, tristique eleifend mi gravida sit amet. Aliquam erat volutpat. Morbi rutrum diam orci, in dictum dui suscipit non. Ut vestibulum enim vel dui lacinia finibus. Phasellus at gravida ipsum. Sed et porta orci. </Text>
      </Card.Content>
      <Card.Actions>
        {/* <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}> */}
          <Button onPress={close}>Eat Cheetos</Button>
          <Button onPress={close}>Get Shredded</Button>
        {/* </View> */}
      </Card.Actions>
    </Card>
  );
}

//style={{borderWidth: 1, borderColor: 'black'}}