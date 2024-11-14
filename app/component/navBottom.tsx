import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

function NavBottom() {
  const navigation = useNavigation();
  const route = useRoute();

  const isFocused = (page) => route.name === page;

  return (
    <View style={{ 
      position: 'absolute', 
      bottom: 0, 
      width: '100%', 
      backgroundColor: '#1E3A8A', 
      flexDirection: 'row', 
      justifyContent: 'space-around', 
      padding: 16, 
      borderTopLeftRadius: 24, 
      borderTopRightRadius: 24 
    }}>
      <TouchableOpacity onPress={() => navigation.navigate("index")} style={{ alignItems: 'center' }}>
        <Ionicons name="home" size={24} color={isFocused("index") ? "red" : "white"} />
        <Text style={{ color: isFocused("index") ? "yellow" : "white", marginTop: 4 }}>index</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("recant")} style={{ alignItems: 'center' }}>
        <Ionicons name="game-controller" size={24} color={isFocused("recant") ? "red" : "white"} />
        <Text style={{ color: isFocused("recant") ? "yellow" : "white", marginTop: 4 }}>Game</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("achivment")} style={{ alignItems: 'center' }}>
        <Ionicons name="trophy" size={24} color={isFocused("achivment") ? "red" : "white"} />
        <Text style={{ color: isFocused("achivment") ? "yellow" : "white", marginTop: 4 }}>Trophy</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("notifications")} style={{ alignItems: 'center' }}>
        <Ionicons name="notifications" size={24} color={isFocused("notifications") ? "red" : "white"} />
        <Text style={{ color: isFocused("notifications") ? "yellow" : "white", marginTop: 4 }}>Notification</Text>
      </TouchableOpacity>
    </View>
  );
}

export default NavBottom;
