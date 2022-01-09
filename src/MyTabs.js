import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {Text} from 'react-native';
import TodoApp from './features/todos/TodoApp';

const Tab = createBottomTabNavigator();

const Home = () => {
  return <Text>Welcome to Home!</Text>;
};

const Settings = () => {
  return <Text>Welcome to Settings!</Text>;
};

function MyTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Todos" component={TodoApp} />
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MyTabs;
