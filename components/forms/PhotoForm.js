import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform } from 'react-native';
import { Surface } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';

export default function PhotoForm() {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    // console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <Surface style={{ alignItems: 'center', justifyContent: 'center', minHeight: 250 }}>
      <Button title="Pick a photo from camera roll" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
    </Surface>
  );
}
