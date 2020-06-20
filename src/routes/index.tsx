import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { SignupPage } from '../pages/Signup';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../theme/index';
import { StatusBar } from 'react-native';

const Stack = createStackNavigator();

export const Routers: React.FC = () => (
  <React.Fragment>
    <StatusBar barStyle="light-content" backgroundColor={'#DB975D'} />
    <NavigationContainer>
      <ThemeProvider theme={lightTheme}>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          headerMode={'screen'}
          initialRouteName={'SignupScreen'}
        >
          <Stack.Screen name={'HomeScreen'} component={HomePage} />
          <Stack.Screen name={'LoginScreen'} component={LoginPage} />
          <Stack.Screen name={'SignupScreen'} component={SignupPage} />
        </Stack.Navigator>
      </ThemeProvider>
    </NavigationContainer>
  </React.Fragment>
);
