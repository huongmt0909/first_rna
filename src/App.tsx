import React from 'react';
import './locales/i18n';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  TouchableWithoutFeedback,
  Keyboard,
  View,
  StyleSheet,
} from 'react-native';
import BottomTabs from './components/common/BottomTabs';
import LoginScreen from './screens/Login';
import {ROUTES} from './constants/routes';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name={ROUTES.MAIN_TABS} component={BottomTabs} />

            <Stack.Screen name={ROUTES.LOGIN} component={LoginScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
