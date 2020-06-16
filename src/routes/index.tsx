import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';

const Stack = createStackNavigator();

export const Routers: React.FC = () => (
  <NavigationContainer>
    <Stack.Navigator headerMode={'screen'} initialRouteName={'HomeScreen'}>
      <Stack.Screen name={'HomeScreen'} component={HomePage} />
      <Stack.Screen name={'LoginScreen'} component={LoginPage} />
    </Stack.Navigator>
  </NavigationContainer>
);
