import { View, Text } from 'react-native'
import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import ProfileScreen from '../Screens/ProfileScreen/ProfileScreen';
import BookingScreen from '../Screens/BookingScreen/BookingScreen';
import Colors from '../Utils/Colors';
import { FontAwesome } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
export default function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={{
        headerShown:false,
        tabBarInactiveTintColor:Colors.PRIMARY
         }}>
        <Tab.Screen name="home" component={HomeScreen}
            options={{
                tabBarLabel:({color})=>(
                    <Text style={{color:color, fontSize:12, marginTop:-7}}>Home</Text>
                ),
                tabBarIcon:({color, size})=>(
                    <FontAwesome name="home" size={24} color="black" />
                )
            }}
         />
        <Tab.Screen name="bookmark" component={BookingScreen} 
             options={{
                tabBarLabel:({color})=>(
                    <Text style={{color:color, fontSize:12, marginTop:-7}}>BookMark</Text>
                ),
                tabBarIcon:({color, size})=>(
                    <FontAwesome name="bookmark" size={24} color="black" />
                )
            }}
        />
        <Tab.Screen name="profile" component={ProfileScreen} 
             options={{
                tabBarLabel:({color})=>(
                    <Text style={{color:color, fontSize:12, marginTop:-7}}>Profile</Text>
                ),
                tabBarIcon:({color, size})=>(
                    <FontAwesome name="user-circle" size={24} color="black" />
                )
            }}
        />
    </Tab.Navigator>
  )
}