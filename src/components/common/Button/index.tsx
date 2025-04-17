import React from 'react';
import {TouchableOpacity, Text, Keyboard} from 'react-native';
import {styles as sharedStyles} from '../../../assets/styles';

const Button = ({onPress, title}: {onPress: () => void; title: string}) => {
  const handlePress = () => {
    Keyboard.dismiss();
    onPress();
  };

  return (
    <TouchableOpacity onPress={handlePress} style={sharedStyles.button}>
      <Text style={sharedStyles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
