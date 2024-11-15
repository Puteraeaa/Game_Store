import { Text, View, Pressable, TouchableOpacity, TextInput, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import NavBottom from "@/app/component/navBottom";
import { LinearGradient } from 'expo-linear-gradient';



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
        <View className="mt-16 w-full flex flex-row justify-between px-4">
          <View className="flex-1 h-14 rounded-full bg-white flex-row items-center px-4 mr-2">
            <TextInput
              className="flex-1 font-bold text-lg ml-1"
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

                <Image
                  source={require("../assets/images/unnamed.webp")}
                  className="w-full h-full object-cover rounded-xl "

                />
                <Text className="text-center font-semibold w-full ">Ganshin Impact</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("instal")} className="w-20 h-20 rounded-xl bg-white mr-4">

                <Image
                  source={require("../assets/images/unnamed.webp")}
                  className="w-full h-full object-cover rounded-xl "

                />
                <Text className="text-center font-semibold w-full ">Ganshin Impact</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("instal")} className="w-20 h-20 rounded-xl bg-white mr-4">

                <Image
                  source={require("../assets/images/unnamed.webp")}
                  className="w-full h-full object-cover rounded-xl "

                />
                <Text className="text-center font-semibold w-full ">Ganshin Impact</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("instal")} className="w-20 h-20 rounded-xl bg-white mr-4">

                <Image
                  source={require("../assets/images/unnamed.webp")}
                  className="w-full h-full object-cover rounded-xl "

                />
                <Text className="text-center font-semibold w-full ">Ganshin Impact</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("instal")} className="w-20 h-20 rounded-xl bg-white mr-4">

                <Image
                  source={require("../assets/images/unnamed.webp")}
                  className="w-full h-full object-cover rounded-xl "

                />
                <Text className="text-center font-semibold w-full ">Ganshin Impact</Text>
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
              <TouchableOpacity onPress={() => navigation.navigate("instal")} className="w-[380px] h-60 rounded-xl mr-4 p-3">
                <LinearGradient
                  colors={["#11418B", "#051125"]}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    borderRadius: 16
                  }}
                />
                <Image source={require("../assets/images/splash.png")} className="w-full h-36 p-5 rounded-xl" />
                <View className="p-3 flex-row items-center pb-2">
                  <Image source={require("../assets/images/unnamed.webp")} className="rounded-xl" />
                  <View className="ml-3 ">
                    <Text className="text-white font-bold text-lg">uta</Text>
                    <Text className="text-gray-300 text-xs ">Lorem ipsum dolor sit.</Text>
                  </View>

                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate("instal")} className="w-[380px] h-60 rounded-xl mr-4 p-3">
                <LinearGradient
                  colors={["#11418B", "#051125"]}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    borderRadius: 16
                  }}
                />
                <Image source={require("../assets/images/splash.png")} className="w-full h-36 p-5 rounded-xl" />
                <View className="p-3 flex-row items-center pb-2">
                  <Image source={require("../assets/images/unnamed.webp")} className="rounded-xl" />
                  <View className="ml-3 ">
                    <Text className="text-white font-bold text-lg">uta</Text>
                    <Text className="text-gray-300 text-xs ">Lorem ipsum dolor sit.</Text>
                  </View>

                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("instal")} className="w-[380px] h-60 rounded-xl mr-4 p-3">
                <LinearGradient
                  colors={["#11418B", "#051125"]}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    borderRadius: 16
                  }}
                />
                <Image source={require("../assets/images/splash.png")} className="w-full h-36 p-5 rounded-xl" />
                <View className="p-3 flex-row items-center pb-2">
                  <Image source={require("../assets/images/unnamed.webp")} className="rounded-xl" />
                  <View className="ml-3 ">
                    <Text className="text-white font-bold text-lg">uta</Text>
                    <Text className="text-gray-300 text-xs ">Lorem ipsum dolor sit.</Text>
                  </View>

                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("instal")} className="w-[380px] h-60 rounded-xl mr-4 p-3">
                <LinearGradient
                  colors={["#11418B", "#051125"]}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    borderRadius: 16
                  }}
                />
                <Image source={require("../assets/images/splash.png")} className="w-full h-36 p-5 rounded-xl" />
                <View className="p-3 flex-row items-center pb-2">
                  <Image source={require("../assets/images/unnamed.webp")} className="rounded-xl" />
                  <View className="ml-3 ">
                    <Text className="text-white font-bold text-lg">uta</Text>
                    <Text className="text-gray-300 text-xs ">Lorem ipsum dolor sit.</Text>
                  </View>

                </View>
              </TouchableOpacity>
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
                <Image
                  source={require("../assets/images/unnamed.webp")}
                  className="w-full h-full object-cover  rounded-xl"

                />
                <Text className="text-center font-semibold w-full ">Ganshin Impact</Text>
              </View>
              <View className="w-20 h-20 rounded-xl bg-slate-200 mr-4">
                <Image
                  source={require("../assets/images/unnamed.webp")}
                  className="w-full h-full object-cover rounded-xl "

                />
                <Text className="text-center font-semibold w-full ">Ganshin Impact</Text>
              </View>
              <View className="w-20 h-20 rounded-xl bg-slate-200 mr-4">
                <Image
                  source={require("../assets/images/unnamed.webp")}
                  className="w-full h-full object-cover rounded-xl "

                />
                <Text className="text-center font-semibold w-full ">Ganshin Impact</Text>
              </View>
              <View className="w-20 h-20 rounded-xl bg-slate-200 mr-4">
                <Image
                  source={require("../assets/images/unnamed.webp")}
                  className="w-full h-full object-cover rounded-xl "

                />
                <Text className="text-center font-semibold w-full ">Ganshin Impact</Text>
              </View>
              <View className="w-20 h-20 rounded-xl bg-slate-200 mr-4">
                <Image
                  source={require("../assets/images/unnamed.webp")}
                  className="w-full h-full object-cover rounded-xl "

                />
                <Text className="text-center font-semibold w-full ">Ganshin Impact</Text>
              </View>
            </ScrollView>
          </View>

        </ScrollView>

      </View>
      <SafeAreaView>
        <NavBottom />
      </SafeAreaView>
    </View>
  );
}
