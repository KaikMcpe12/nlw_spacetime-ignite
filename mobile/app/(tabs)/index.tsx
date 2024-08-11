import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View className='bg-gray-950 flex-1 items-center justify-center'>
      <Text className='text-zinc-50 font-bold'>Hello World</Text>
      <StatusBar style='auto'/>
    </View>
  );
}
