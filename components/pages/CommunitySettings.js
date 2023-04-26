import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet } from 'react-native';
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

  function handleEditCommunityName() {
    console.log('Edit community name button clicked');
  }

  function handleEditCommunityTag() {
    console.log('Edit community tag button clicked');
  }

  function handleEditCommunityDescription() {
    console.log('Edit community description button clicked');
  }

  function handleEditCommunityBannerPhoto() {
    console.log('Edit community banner photo button clicked');
  }

  function handleEditCommunityRules() {
    console.log('Edit community rules button clicked');
  }

  function handleEditCommunityPermission() {
    console.log('Edit community permission button clicked');
  }

  function handleDeleteCommunity() {
    console.log('Delete community button clicked');
  }

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <DrawerContentScrollView>
        <DrawerItemList {...props} />
        <DrawerItem
          label="Edit Community Name"
          onPress={handleEditCommunityName}
        />
        <DrawerItem
          label="Edit Community Tag"
          onPress={handleEditCommunityTag}
        />
        <DrawerItem
          label="Edit Community Description"
          onPress={handleEditCommunityDescription}
        />
        <DrawerItem
          label="Edit Community Banner Photo"
          onPress={handleEditCommunityBannerPhoto}
        />
        <DrawerItem
          label="Edit Community Rules"
          onPress={handleEditCommunityRules}
        />
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
