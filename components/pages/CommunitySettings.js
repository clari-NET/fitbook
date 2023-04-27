import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet, TextInput, Button, Alert } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { useTheme } from 'react-native-paper';

// export default function CommunitySettings({ community }) {
//   const { colors } = useTheme();

//   return (
//     <View style={[styles.container, { backgroundColor: colors.surface }]}>
//       <Text>Adjust your community settings here.</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

export default function CommunitySettings({ props }) {
  const { colors } = useTheme();

  const [communityPhoto, setCommunityPhoto] = useState('photo');
  const [communityName, setCommunityName] = useState('My Community');
  const [communityTag, setCommunityTag] = useState('');
  const [communityDescription, setCommunityDescription] = useState('');
  const [communityBannerPhoto, setCommunityBannerPhoto] = useState('banner-photo');
  const [communityRules, setCommunityRules] = useState('');
  const [communityPermissions, setCommunityPermissions] = useState('false');

  const [showCommunityNameInput, setShowCommunityNameInput] = useState(false);
  const [showCommunityTagInput, setShowCommunityTagInput] = useState(false);
  const [showCommunityDescriptionInput, setShowCommunityDescriptionInput] = useState(false);
  const [showCommunityRulesInput, setShowCommunityRulesInput] = useState(false);

  function handleEditCommunityName() {
    console.log('Edit community name button clicked');
    setShowCommunityNameInput(true);
  }

  function handleEditCommunityTag() {
    console.log('Edit community tag button clicked');
    setShowCommunityTagInput(true);
  }

  function handleEditCommunityDescription() {
    console.log('Edit community description button clicked');
    setShowCommunityDescriptionInput(true);
  }

  function handleEditCommunityRules() {
    console.log('Edit community rules button clicked');
    setShowCommunityRulesInput(true);
  }

  funciton handleEditCommunityPhoto() {
    console.log('Community Photo clicked');
    Alert.prompt(
      'Edit Community Photo',
      '',
      (newPhoto) => setCommunityPhoto(newPhoto),
      undefined,
      communityPhoto
    );
  }

  function handleEditCommunityBannerPhoto() {
    console.log('Edit community banner photo button clicked');
    Alert.prompt(
      'Edit Community Banner Photo',
      '',
      (newBannerPhoto) => setCommunityBannerPhoto(newBannerPhoto),
      undefined,
      communityBannerPhoto
    );
  }

  function handleEditCommunityPermission() {
    console.log('Edit community permission button clicked');
    setCommunityPermissions(!communityPermissions);
  }

  function handleDeleteCommunity() {
    console.log('Delete community button clicked');
    Alert.alert(
      'Delete Community',
      'Are you sure you want to delete this community?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'OK', onPress: () => {
          // TODO: delete community from server and navigate back to Community component
          console.log('Deleted community');
          navigation.navigate('Community');
        } }
      ]
    );
  }

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <DrawerContentScrollView>
        <DrawerItemList {...props} />
        <DrawerItem label="Edit Community Name" onPress={handleEditCommunityName} />
        {showCommunityNameInput && (
          <TextInput
            placeholder="Community Name"
            onChangeText={(text) => setCommunityName(text)}
            value={communityName}
          />
        )}
        <DrawerItem label="Edit Community Tag" onPress={handleEditCommunityTag} />
        {showCommunityTagInput && (
          <TextInput
            placeholder="Community Tag"
            onChangeText={(text) => setCommunityTag(text)}
            value={communityTag}
          />
        )}
        <DrawerItem label="Edit Community Description" onPress={handleEditCommunityDescription} />
        {showCommunityDescriptionInput && (
          <TextInput
            placeholder="Community Description"
            onChangeText={(text) => setCommunityDescription(text)}
            value={communityDescription}
          />
        )}
        <DrawerItem
          label="Edit Community Banner Photo"
          onPress={handleEditCommunityBannerPhoto}
        />
        <DrawerItem label="Edit Community Rules" onPress={handleEditCommunityRules} />
        {showCommunityRulesInput && (
          <TextInput
            placeholder="Community Rules"
            onChangeText={(text) => setCommunityRules(text)}
            value={communityRules}
          />
        )}
        <DrawerItem
          label="Edit Community Permission"
          onPress={handleEditCommunityPermission}
        />
        <DrawerItem
          label="Delete Community"
          onPress={handleDeleteCommunity}
        />
      </DrawerContentScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
