/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { Routers } from './src/routes';
import { StatusBar } from './src/components/StatusBar';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/contexts/auth';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './src/theme';

const App: React.FC = () => (
  <ThemeProvider theme={lightTheme}>
    <StatusBar />
    <NavigationContainer>
      <AuthProvider>
        <Routers />
      </AuthProvider>
    </NavigationContainer>
  </ThemeProvider>
);

export default App;
