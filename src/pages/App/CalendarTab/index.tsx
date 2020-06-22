import React from 'react';
import { Text } from 'react-native';

import { Container, StatusBar } from './styles';

export const CalendarTab: React.FC = () => {
  return (
    <React.Fragment>
      <StatusBar />
      <Container>
        <Text>CreditCard </Text>
      </Container>
    </React.Fragment>
  );
};
