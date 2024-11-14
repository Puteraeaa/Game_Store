import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function EditProfile() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [profileImage, setProfileImage] = useState<string | null>(null);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if (!result.canceled) {
      setProfileImage(result.uri);
    }
  };

  const handleSaveProfile = () => {
    // Save profile details logic
    console.log("Profile updated!");
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Edit Profile</Text>
      
      <TouchableOpacity onPress={pickImage}>
        {/* <Image
          source={profileImage ? { uri: profileImage } : require('./assets/default-profile.png')}
          style={{ width: 100, height: 100, borderRadius: 50, marginVertical: 20 }}
        /> */}
        <Text>Change Profile Photo</Text>
      </TouchableOpacity>

      <Text>Name</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        style={{ borderWidth: 1, padding: 10, marginVertical: 10 }}
      />

      <Text>Email</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        style={{ borderWidth: 1, padding: 10, marginVertical: 10 }}
      />

      <Button title="Save Changes" onPress={handleSaveProfile} />
    </View>
  );
}
