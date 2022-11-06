import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Homepage from './src/components/screens/Homepage';
import Detailproduct from './src/components/screens/Detailproduct';
import Icon from 'react-native-vector-icons/FontAwesome';
import Profile from './src/components/screens/Profile';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
        name="Homepage"
        component={Homepage}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Detail',
          tabBarIcon: ({color, size}) => (
            <Icon name="eye" color={color} size={size} />
          ),
        }}
        name="DetailProduct"
        component={Detailproduct}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <Icon name="user" color={color} size={size} />
          ),
        }}
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}