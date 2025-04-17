import {View, Text} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Button from '../../components/common/Button';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const handleLogout = () => {
    console.log('You tapped the button!');
    navigation.navigate('Login' as never);
  };
  return (
    <View>
      <Text>ProfileScreen</Text>
      <Button onPress={handleLogout} title="Logout" />
    </View>
  );
};

export default ProfileScreen;
