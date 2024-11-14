import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import NavBottom from '@/app/component/navBottom';

const notifications = [
  {
    id: '1',
    title: 'Update Available',
    description: 'New version of the app is available for download.',
    time: '2 hours ago',
    icon: { uri: 'https://images.unsplash.com/photo-1582205763116-42d22a22b36e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDh8fHRyb3BoeXxlbnwwfHx8fDE2MDE5ODc2MjQ&ixlib=rb-1.2.1&q=80&w=50' },
  },
  {
    id: '2',
    title: 'Achievement Unlocked',
    description: 'Congratulations! You unlocked a new achievement.',
    time: '5 hours ago',
    icon: { uri: 'https://images.unsplash.com/photo-1582205762923-3e3e4c86f52b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDV8fHRyb3BoeXxlbnwwfHx8fDE2MDE5ODc2MjQ&ixlib=rb-1.2.1&q=80&w=50' },
  },
  {
    id: '3',
    title: 'Friend Request',
    description: 'You received a friend request from Alex.',
    time: '1 day ago',
    icon: { uri: 'https://images.unsplash.com/photo-1582205763116-42d22a22b36e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDh8fHRyb3BoeXxlbnwwfHx8fDE2MDE5ODc2MjQ&ixlib=rb-1.2.1&q=80&w=50' },
  },
  // Tambahkan notifikasi lainnya sesuai kebutuhan
];

export default function NotificationScreen() {
  return (
    <>
      <View className="flex-1 bg-gray-100 p-4 pt-12" >
        {/* Header */}
        <Text className="text-2xl font-bold text-blue-800 mb-4">
          Notifications
        </Text>

        {/* Notification List */}
        <FlatList
          data={notifications}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View className="flex-row bg-white rounded-lg p-4 mb-3 items-center shadow-md">
              <Image
                source={item.icon}
                className="w-12 h-12 rounded-full mr-3"
                resizeMode="cover"
              />
              <View className="flex-1">
                <Text className="text-lg font-bold text-blue-800">{item.title}</Text>
                <Text className="text-sm text-gray-500 mt-1">{item.description}</Text>
                <Text className="text-xs text-gray-400 mt-1">{item.time}</Text>
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
