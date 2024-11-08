import React from "react";
import { View, Text, Image, TouchableOpacity,Pressable } from "react-native";
import { ProgressBar } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ProfileScreen: React.FC = () => {
  const navigation = useNavigation();
  
  return (
    <View className="flex-1 bg-white ro">
      {/* Background Image */}
      <View className="absolute top-0 left-0 right-0 h-64">
        <Image
          source={{ uri: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" }}
          className="w-full h-full object-cover rounded-b-3xl "
          style={{ opacity: 0.5 }}
        />
      </View>

      {/* Back Button */}
      <TouchableOpacity 
        onPress={() => navigation.goBack()} 
        className="absolute mt-12 right-4 bg-gray-200 p-2 rounded-full z-10"
      >
           <Ionicons name="pencil" size={24} color="black" />
      </TouchableOpacity>

      <TouchableOpacity 
        onPress={() => navigation.goBack()} 
        className="absolute mt-12 left-4 bg-gray-200 p-2 rounded-full z-10"
      >
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>


      {/* Profile Section */}
      <View className="items-center mt-40">
        {/* Profile Image */}
        <View className="relative">
          <Image
            source={{
              uri: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
            }}
            className="w-32 h-32 rounded-full border-4 border-white"
            style={{ width: 128, height: 128, borderRadius: 64, borderWidth: 4, borderColor: "white" }}
          />
          {/* Edit Icon */}
          <Ionicons
            name="pencil"
            size={20}
            color="white"
            className="absolute bottom-0 right-0 bg-blue-500 p-1 rounded-full"
          />
        </View>

        {/* Name and Details */}
        <Text className="text-2xl font-semibold mt-4">Muhamad Alfarizi</Text>
        <Text className="text-gray-500">Alfarizi#001 | <Text className="text-blue-600">Game Developer </Text></Text>
        <Text className="text-center text-gray-600 mt-2 w-3/4">
          Wait, some achievements give more XP than others? Yep. True.
        </Text>
      </View>

       {/* Progress Bar */}
       <View className="mt-6 px-6">
        <View className="flex flex-row items-center justify-between mb-1">
          <Text className="text-blue-600 font-bold">4</Text>
          <Text className="text-gray-400">5</Text>
        </View>
        <ProgressBar
          progress={0.8}
          color="#11418B"
          style={{ height: 8, borderRadius: 4 }}
        />
        <Text className="text-blue-700 text-center mt-2 font-semibold">
          3,000 XP UNTIL LEVEL 5
        </Text>
      </View>

      {/* Bottom Navigation */}
      <View className="absolute bottom-0 w-full bg-blue-900 flex-row justify-around py-4 rounded-t-3xl">
        <TouchableOpacity className="items-center">
          <Ionicons name="home" size={24} color="red" />
          <Text className="text-yellow-300 mt-1">Home</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center">
          <Ionicons name="game-controller" size={24} color="white" />
          <Text className="text-white mt-1">Game</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center">
          <Ionicons name="trophy" size={24} color="white" />
          <Text className="text-white mt-1">Trophy</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center">
          <Ionicons name="notifications" size={24} color="white" />
          <Text className="text-white mt-1">Notification</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileScreen;
