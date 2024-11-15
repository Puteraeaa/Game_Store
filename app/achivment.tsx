import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ProgressBar } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import NavBottom from '@/app/component/navBottom';

const awards = [
  {
    id: '1',
    title: 'Novices Reward',
    description: 'Gansihin',
    icon: require('../assets/images/piala.png'),
    progress: 0.3,
  },
  {
    id: '2',
    title: 'Channel3 Star',
    description: 'Next',
    icon: require('../assets/images/piala.png'),
    progress: 0.5,
  },
  {
    id: '3',
    title: 'Contribute Star',
    description: 'Completed',
    icon: require('../assets/images/piala.png'),
    progress: 1,
  },
  {
    id: '4',
    title: 'Sharers',
    description: 'Not Reach',
    icon: require('../assets/images/piala.png'),
    progress: 0,
  },
  // Tambahkan item lainnya sesuai kebutuhan
];

export default function HonorScreen() {
  const navigation = useNavigation();
  return (
    <>
    <View className="flex-1">
      {/* Header */}
      <LinearGradient  colors={["#11418B", "#051125"]} className="p-4 pt-12 h-[300px] ">
        <Image
        source={require('../assets/images/mendali.png')}
        className="w-52 h-52 rounded-full absolute top-5 right-0 ml-4 z-10"
        />
      <TouchableOpacity 
        onPress={() => navigation.goBack()} 
        className="left-[-10px] p-2 rounded-full z-10"
      >
        <Ionicons name="arrow-back" size={24} color="white" />
      </TouchableOpacity>
        <Text className="text-5xl font-bold text-white mt-4">My Honor</Text>
        <View className='flex-row items-center bg-black w-32 h-11 rounded-2xl justify-center mt-1 opacity-50 z-[1]'>
        <Text className="text-base text-[#fffac7] opacity-100 font-bold z-[2] ">Award 1/10</Text>
        </View>
       
      </LinearGradient>


    <View className='bg-white rounded-3xl mt-[-40px]'>
      {/* Award Cards */}
      <FlatList
        data={awards}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={{ paddingHorizontal: 16 }}
        renderItem={({ item }) => (
          <View className="flex-1 m-2 bg-[#11418B] rounded-lg p-4">
            <Image source={item.icon} className="w-32 h-32 self-center mb-2" />
            <Text className="text-white text-lg font-bold text-center">{item.title}</Text>
            <Text className={`text-center mt-1 ${item.progress === 1 ? 'text-green-500' : 'text-white'}`}>
              {item.description}
            </Text>
            {item.progress < 1 && (
              <ProgressBar
                progress={item.progress}
                color="#2575fc"
                style={{ height: 6, borderRadius: 4, marginTop: 8 }}
              />
            )}
          </View>
        )}
        
      />
      </View>
     
    </View>

     <SafeAreaView>
     <NavBottom />
   </SafeAreaView>
   </>
  );
}