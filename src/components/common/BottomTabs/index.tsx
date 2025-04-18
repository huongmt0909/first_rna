import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../../../screens/Home';
import ProfileScreen from '../../../screens/Profile';
import Icon from 'react-native-vector-icons/Ionicons';
import {ROUTES} from '../../../constants/routes';

const Tab = createBottomTabNavigator();

const TabBarIcon = ({
  focused,
  routeName,
}: {
  focused: boolean;
  routeName: string;
}) => {
  const iconName =
    routeName === ROUTES.HOME
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
      <Tab.Screen name={ROUTES.HOME} component={HomeScreen} />
      <Tab.Screen name={ROUTES.PROFILE} component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabs;
