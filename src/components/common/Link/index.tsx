import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {styles as sharedStyles} from '../../../assets/styles';

const Link = ({onPress, title}: {onPress: () => void; title: string}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={sharedStyles.link}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Link;
