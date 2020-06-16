import * as React from 'react';
import { Container } from './styles';
import { Text, StatusBar } from 'react-native';

export const HomePage: React.FC = () => {
  return (
    <React.Fragment>
      <StatusBar barStyle="dark-content" />
      <Container>
        <Text>Home Page</Text>
      </Container>
    </React.Fragment>
  );
};
