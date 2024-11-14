import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import NavBottom from '@/app/component/navBottom';

const trophies = [
  {
    id: '1',
    title: 'Master Gamer',
    description: 'Awarded for reaching level 50',
    image: { uri: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDR8fHRyb3BoeXxlbnwwfHx8fDE2MDE5ODc2MjQ&ixlib=rb-1.2.1&q=80&w=400' },
  },
  {
    id: '2',
    title: 'Speed Runner',
    description: 'Awarded for completing the game in under 3 hours',
    image: { uri: 'https://images.unsplash.com/photo-1582205763116-42d22a22b36e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDh8fHRyb3BoeXxlbnwwfHx8fDE2MDE5ODc2MjQ&ixlib=rb-1.2.1&q=80&w=400' },
  },
  {
    id: '3',
    title: 'Collector',
    description: 'Awarded for collecting all items',
    image: { uri: 'https://images.unsplash.com/photo-1582205762923-3e3e4c86f52b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDV8fHRyb3BoeXxlbnwwfHx8fDE2MDE5ODc2MjQ&ixlib=rb-1.2.1&q=80&w=400' },
  },
  // Tambahkan item lainnya sesuai kebutuhan
];

export default function TrophyScreen() {
  return (
    <>
      <View className="flex-1 bg-gray-100 p-4 mt-12">
        {/* Header */}
        <Text className="text-2xl font-bold text-blue-800 mb-4">
          Trophy Achievements
        </Text>
        
        {/* Trophy List */}
        <FlatList
          data={trophies}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View className="flex-row bg-white rounded-lg p-4 mb-3 items-center shadow-md">
              <Image
                source={item.image}
                className="w-12 h-12 mr-3"
                resizeMode="contain"
              />
              <View className="flex-1">
                <Text className="text-lg font-bold text-blue-800">{item.title}</Text>
                <Text className="text-sm text-gray-500 mt-1">{item.description}</Text>
              </View>
            </View>
          )}
        />
      </View>

      <SafeAreaView>
        <NavBottom />
      </SafeAreaView>
    </>
  );
}
