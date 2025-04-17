import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../../../screens/Home';
import ProfileScreen from '../../../screens/Profile';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const TabBarIcon = ({
  focused,
  routeName,
}: {
  focused: boolean;
  routeName: string;
}) => {
  const iconName =
    routeName === 'Home'
      ? focused
        ? 'home'
        : 'home-outline'
      : focused
      ? 'person'
      : 'person-outline';

  return <Icon name={iconName} size={24} color={focused ? '#000' : '#666'} />;
};

const screenOptions = ({route}: any) => ({
  headerShown: false,
  tabBarIcon: ({focused}: {focused: boolean}) => (
    <TabBarIcon focused={focused} routeName={route.name} />
  ),
});

const BottomTabs = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabs;
