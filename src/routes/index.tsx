import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../theme/index';

const Stack = createStackNavigator();

export const Routers: React.FC = () => (
  <NavigationContainer>
    <ThemeProvider theme={lightTheme}>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        headerMode={'screen'}
        initialRouteName={'HomeScreen'}
      >
        <Stack.Screen name={'HomeScreen'} component={HomePage} />
        <Stack.Screen name={'LoginScreen'} component={LoginPage} />
      </Stack.Navigator>
    </ThemeProvider>
  </NavigationContainer>
);
