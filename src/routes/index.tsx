/* eslint-disable react/prop-types */
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { SignupPage } from '../pages/Signup';
import { TabsPage } from './TabBarNavigation';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../theme/index';
import { StatusBar } from '../components/StatusBar';

const RootStack = createStackNavigator();

export const Routers: React.FC = () => (
  <React.Fragment>
    <NavigationContainer>
      <ThemeProvider theme={lightTheme}>
        <StatusBar />
        <RootStack.Navigator
          screenOptions={{ headerShown: false }}
          headerMode={'screen'}
          initialRouteName={'HomeScreen'}
        >
          <RootStack.Screen name={'HomeScreen'} component={HomePage} />
          <RootStack.Screen name={'LoginScreen'} component={LoginPage} />
          <RootStack.Screen name={'SignupScreen'} component={SignupPage} />
          <RootStack.Screen name={'TabsScreen'} component={TabsPage} />
        </RootStack.Navigator>
      </ThemeProvider>
    </NavigationContainer>
  </React.Fragment>
);
