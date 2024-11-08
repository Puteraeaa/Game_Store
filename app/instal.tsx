import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ProfileScreen: React.FC = () => {
  const navigation = useNavigation();

  return (
    <>
    <ScrollView className="flex-1 bg-white">
      {/* Background Image */}
      <View className="absolute top-0 left-0 right-0 h-64">
        <Image
          source={require("../assets/images/unnamed.webp")}
          className="w-full h-full object-cover rounded-b-3xl"
          style={{ opacity: 0.5 }}
        />
      </View>

      {/* Back Button */}
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
            source={require("../assets/images/unnamed.webp")}
            className="w-32 h-32 rounded-3xl border-4 border-white"
            style={{ width: 128, height: 128, borderRadius: 64, borderWidth: 4, borderColor: "white" }}
          />
        </View>

        {/* Name and Details */}
        <Text className="text-3xl font-semibold mt-[2%]">Honkai Impact</Text>
        <Text className="text-1xl mt-[-0.5%]">alfarizi dev</Text>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="absolute mt-[48%] bg-[#11418B] py-1 px-16 rounded-3xl z-10"
        >
          <Text className="text-white font-semibold text-[20px]">Instal</Text>
        </TouchableOpacity>
      </View>

      {/* ScrollView for Horizontal Scrolling */}
      <ScrollView
        contentContainerStyle={{ paddingHorizontal: '5%' }}
        showsHorizontalScrollIndicator={false}
        horizontal
        className="mt-[20%]"
      >
        <View className="w-[370px] h-56 rounded-xl bg-slate-200 mr-4 shadow-[4px_4px_10px_0px_rgba(0,0,0,0.25)]">
          <Text>Genshin</Text>
        </View>

        <View className="w-[370px] h-56 rounded-xl bg-slate-200 mr-4 shadow-[4px_4px_10px_0px_rgba(0,0,0,0.25)]">
          <Text>Genshin</Text>
        </View>
        <View className="w-[370px] h-56 rounded-xl bg-slate-200 mr-4 shadow-[4px_4px_10px_0px_rgba(0,0,0,0.25)]">
          <Text>Genshin</Text>
        </View>
        <View className="w-[370px] h-56 rounded-xl bg-slate-200 mr-4 shadow-[4px_4px_10px_0px_rgba(0,0,0,0.25)]">
          <Text>Genshin</Text>
        </View>
      </ScrollView>

      {/* Description Section */}
      <View className="p-4 mt-4 ml-4 mb-[10%] bg-white">
        <Text className="text-black text-xl font-bold mb-2">Tentang Game ini</Text>
        <View className="flex-row items-center">
          <Text className="text-slate-300 text-sm font-bold">
            Battlesuit Rank-S [Lone Planetfarer] debut! 10 pembukaan pertama gratis! Sebagai Battlesuit tipe MECH yang mengakibatkan Lightning DMG, dia memerintah Star Traveler untuk memborbardir musuh dengan laser dan menghancurkan mereka dengan tinjunya...
          </Text>
        </View>
      </View>

      <View className="flex-wrap flex-row justify-start ml-4 mb-[40%]">
  <View className="p-2">
    <View className="border border-gray-400 rounded-full px-4 py-2">
      <Text className="text-center">RPG AKSI</Text>
    </View>
  </View>
  <View className="p-2">
    <View className="border border-gray-400 rounded-full px-4 py-2">
      <Text className="text-center">BERMAIN PERAN</Text>
    </View>
  </View>
  <View className="p-2">
    <View className="border border-gray-400 rounded-full px-4 py-2">
      <Text className="text-center">ANIME</Text>
    </View>
  </View>
  <View className="p-2">
    <View className="border border-gray-400 rounded-full px-4 py-2">
      <Text className="text-center">RPG AKSI</Text>
    </View>
  </View>
  <View className="p-2">
    <View className="border border-gray-400 rounded-full px-4 py-2">
      <Text className="text-center">RPG AKSI</Text>
    </View>
  </View>
</View>
    </ScrollView>

    <View className="absolute bottom-0 w-full bg-blue-900 flex-row justify-around p-4 rounded-t-3xl">
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
    </>
  );
};

export default ProfileScreen;
