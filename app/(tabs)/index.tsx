import { View, Text } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';

const Page = () => {
  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor: Colors.primary,
      tabBarLabelStyle: {
        fontFamily: 'mon-sb',
      }
    }}>
      <Tabs.Screen name='index' options={{
        tabBarLabel: 'Explore',
        tabBarIcon:({ color, size}) =>
            <MaterialCommunityIcons name="search"/>

      }} />
    </Tabs>
  );
};

export default Page;
