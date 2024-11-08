import { Text, View, Pressable, TouchableOpacity,TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";


export default function Index() {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState("");
  return (
    <View className="w-screen flex-1 bg-[#11418B]">
      {/* Header Section */}
      <View className="px-6 pt-12">
        <View className="flex flex-row justify-between">
          <TabBarIcon name={"menu-sharp"} className="text-red-50 text-3xl" />

          {/* Button untuk navigasi */}
          <Pressable
            className="w-28 h-10 bg-white rounded-3xl flex justify-center px-3"
            onPress={() => navigation.navigate("profile")}
          >
            <Text className="font-bold mx-auto">Alfarizi</Text>
          </Pressable>
        </View>


        <View className='p-4 mt-5'>
  <Text className='text-gray-300 text-sm mb-2'>11 OKTOBER 2024</Text>
  <View className='flex-row items-center'>
    <View className="relative">
      <Text className='text-white text-4xl font-bold'>Developed by</Text>
      <Text className='text-white text-5xl w-[400px] font-bold absolute top-9  mt-3'>SKNC DEV</Text>
    </View>



    
  </View>
</View>

    
        {/* Search Bar */}
        <View className="mt-16 w-full flex flex-row justify-between px-2">
          <View className="w-72 h-14 rounded-full bg-white justify-center px-4 mr-3">
            <TextInput
              className="font-bold text-lg ml-1 flex-1"
              placeholder="Search"
              placeholderTextColor="#999"
              value={searchText}
              onChangeText={(text) => setSearchText(text)}
            />
          </View>
          <View className="w-14 h-14 rounded-full bg-[#242445] flex items-center justify-center">
            <TabBarIcon name="menu" className="text-white text-xl" />
          </View>
        </View>
      </View>

      {/* Main ScrollView */}
      <View className="w-full flex-1 bg-white mt-10 rounded-t-[49px] overflow-hidden">
        <ScrollView showsVerticalScrollIndicator={false}>
          <View className="w-full h-48 bg-[#F5D34D] pt-6 rounded-t-[49px]">
            <View className="flex flex-row px-7">
              <Text className="text-2xl font-semibold">Most Popular Game</Text>
              <TabBarIcon name={'arrow-forward'} className="mx-3 text-3xl" />
            </View>

            {/* Horizontal ScrollView */}
            <ScrollView
              className="my-4"
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingHorizontal: 16 }}
            >
              <TouchableOpacity onPress={() => navigation.navigate("instal")} className="w-20 h-20 rounded-xl bg-white mr-4">
                <Text>Genshin</Text>
              </TouchableOpacity>
              <TouchableOpacity  onPress={() => navigation.navigate("instal")} className="w-20 h-20 rounded-xl bg-white mr-4">
                <Text>Genshin</Text>
              </TouchableOpacity>
              <TouchableOpacity className="w-20 h-20 rounded-xl bg-white mr-4">
                <Text>Genshin</Text>
              </TouchableOpacity>
              <TouchableOpacity className="w-20 h-20 rounded-xl bg-white mr-4">
                <Text>Genshin</Text>
              </TouchableOpacity>
              <TouchableOpacity className="w-20 h-20 rounded-xl bg-white mr-4">
                <Text>Genshin</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>

          {/* Section 2 */}
          <View className="my-6">
            <View className="flex flex-col px-7">
              <Text className="text-2xl font-semibold">Mainkan Game ini</Text>
              <Text>Lorem ipsum dolor sit.</Text>
            </View>

            {/* Horizontal ScrollView */}
            <ScrollView
              className="my-6 mx-auto"
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingHorizontal: 16 }}
            >
              <View className="w-[380px] h-56 rounded-xl bg-slate-200 mr-4">
                <Text>Genshin</Text>
              </View>
              <View className="w-[380px] h-56 rounded-xl bg-slate-200 mr-4">
                <Text>Genshin</Text>
              </View>
              <View className="w-[380px] h-56 rounded-xl bg-slate-200 mr-4">
                <Text>Genshin</Text>
              </View>
              <View className="w-[380px] h-56 rounded-xl bg-slate-200 mr-4">
                <Text>Genshin</Text>
              </View>
            </ScrollView>
          </View>

          <View className="w-full h-48 rounded-t-[49px] mb-10">
            <View className="flex flex-row px-7">
              <Text className="text-2xl font-semibold">Most Popular Game</Text>
              <TabBarIcon name={'arrow-forward'} className="mx-3 text-3xl" />
            </View>

            {/* Horizontal ScrollView */}
            <ScrollView
              className="my-4"
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingHorizontal: 16 }}
            >
              <View className="w-20 h-20 rounded-xl bg-slate-200 mr-4">
                <Text>Genshin</Text>
              </View>
              <View className="w-20 h-20 rounded-xl bg-slate-200 mr-4">
                <Text>Genshin</Text>
              </View>
              <View className="w-20 h-20 rounded-xl bg-slate-200 mr-4">
                <Text>Genshin</Text>
              </View>
              <View className="w-20 h-20 rounded-xl bg-slate-200 mr-4">
                <Text>Genshin</Text>
              </View>
              <View className="w-20 h-20 rounded-xl bg-slate-200 mr-4">
                <Text>Genshin</Text>
              </View>
            </ScrollView>
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
      </View>
    </View>
  );
}
