import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList,Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { SafeAreaView } from 'react-native-safe-area-context';
import NavBottom from '@/app/component/navBottom';


const data = Array(6).fill({
  title: "Honkai Impact 3",
  playTime: "Play time: 30 m",
  image: require("../assets/images/unnamed.webp") // Ganti dengan path gambar yang sesuai
});

export default function RecentPlayScreen() {
  const navigation = useNavigation();
  return (
    <View className="flex-1 bg-[#11418B]">
      {/* Header */}
  
      {/* <View className="mt-12 px-6">
          <TabBarIcon name={"menu-sharp"} className="text-red-50 text-3xl" />

       
          <Pressable
            className="w-28 h-10 bg-white rounded-3xl flex justify-center px-3"
            onPress={() => navigation.navigate("profile")}
          >
            <Text className="font-bold mx-auto">Alfarizi</Text>
          </Pressable>
        </View> */}

        <View className="px-6 bg-[#1E3A8A] pt-14">
        <View className="flex flex-row justify-between items-center ">
        <TabBarIcon name={"menu-sharp"} className="text-red-50 text-3xl" />

       
          <Pressable
            className="w-28 h-10 bg-white rounded-3xl flex justify-center px-3"
            onPress={() => navigation.navigate("profile")}
          >
            <Text className="font-bold mx-auto">Alfarizi</Text>
          </Pressable>
        </View>
      </View>


      {/* Clock Icon and Continue Button */}
      <View className="bg-[#1E3A8A]   items-center pt-4  z-10">
        <View className="w-16 h-16 bg-gray-200 rounded-full  justify-center items-center">
          {/* Ikon Jam */}
          <Image
              source={require("../assets/images/Alarm Clock.png")}
              className="w-32 h-32 md:w-32 md:h-32  "
            />
        </View>
        <TouchableOpacity className="bg-white px-9 py-4 mb-[-45px] rounded-full ">
          <Text className="text-[#1E3A8A] font-semibold">Continue Playing</Text>
        </TouchableOpacity>
      </View>

      {/* List of Recent Plays */}
      <View className="bg-white opacity-80 mt-4 flex-1 rounded-t-3xl p-5 mb-4 ">
        <FlatList
          className="flex-1 mt-4"
          data={data}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View className="flex-row items-center justify-between py-2  ">
              <View className="flex-row items-center space-x-4">
                <Image
                  source={item.image}
                  className="w-20 h-20 rounded-lg border-2 "
                />
                <View>
                  <Text className="font-semibold text-black text-lg">{item.title}</Text>
                  <Text className="text-gray-500 text-sm">{item.playTime}</Text>
                </View>
              </View>
              <TouchableOpacity>
                <Text className="text-[#1E3A8A] text-xl">▶</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>

      {/* Navigation Bar */}
      <SafeAreaView>
        <NavBottom />
      </SafeAreaView>
    </View>
  );
}
