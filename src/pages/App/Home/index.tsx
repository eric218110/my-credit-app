import * as React from 'react';
import { Background } from '../../../components/Background';
import { AuthContext } from '../../../contexts/auth';
import { Button, Text, Image } from 'react-native';

export const HomeTab: React.FC = () => {
  const { signOut, user } = React.useContext(AuthContext);
  return (
    <Background>
      <Text>{user?.email}</Text>
      <Text>{user?.name}</Text>
      <Image
        style={{ width: 100, height: 100 }}
        source={{ uri: user?.photoURL }}
      />
      <Button
        title={'SAIR'}
        onPress={() => {
          signOut();
        }}
      />
    </Background>
  );
};
