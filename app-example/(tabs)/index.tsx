import { Text, View } from "react-native";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { ScrollView } from "react-native";

export default function Index() {
  return (
    <View className="w-screen flex-1 bg-[#11418B]">
      {/* Header Section */}
      <View className="px-6 pt-12">
        <View className="flex flex-row justify-between">
          <TabBarIcon name={'menu-sharp'} className="text-red-50 text-3xl" />
          <View className="w-28 h-10 bg-white rounded-3xl flex justify-center px-3">
            <Text className="font-bold mx-auto">Alfarizi</Text>
          </View>
        </View>

        {/* Search Bar */}
        <View className="mt-40 w-full flex flex-row justify-between">
          <View className="w-72 h-14 rounded-full bg-white justify-center">
            <Text className="font-bold text-lg ml-5">Search</Text>
          </View>
          <View className="w-14 h-14 rounded-full bg-[#242445] flex items-center justify-center">
            <TabBarIcon name={'menu'} className="text-white text-xl" />
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
              <View className="w-20 h-20 rounded-xl bg-white mr-4">
                <Text>Genshin</Text>
              </View>
              <View className="w-20 h-20 rounded-xl bg-white mr-4">
                <Text>Genshin</Text>
              </View>
              <View className="w-20 h-20 rounded-xl bg-white mr-4">
                <Text>Genshin</Text>
              </View>
              <View className="w-20 h-20 rounded-xl bg-white mr-4">
                <Text>Genshin</Text>
              </View>
              <View className="w-20 h-20 rounded-xl bg-white mr-4">
                <Text>Genshin</Text>
              </View>
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

          <View className="w-full h-48 rounded-t-[49px]">
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
      </View>
    </View>
  );
}
