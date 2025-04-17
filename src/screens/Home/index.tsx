import {ScrollView, useColorScheme, View} from 'react-native';
import React from 'react';
import {
  Colors,
  Header,
  LearnMoreLinks,
} from 'react-native/Libraries/NewAppScreen';

const HomeScreen = () => {
  const safePadding = '5%';
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <>
      <ScrollView style={backgroundStyle}>
        <View style={{paddingRight: safePadding}}>
          <Header />
        </View>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
            paddingHorizontal: safePadding,
            paddingBottom: safePadding,
          }}>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </>
  );
};

export default HomeScreen;

// const styles = StyleSheet.create({});
