import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

interface LoadingProps {
  visible?: boolean;
}

const Loading: React.FC<LoadingProps> = ({visible = false}) => {
  if (!visible) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 999,
  },
});

export default Loading;
