import React, { useRef } from 'react';
import { Text } from 'react-native';
import { Modalize } from 'react-native-modalize';

interface IItem {
  id: number;
  heading: string;
}

export const ModalHome: React.FC = () => {
  const modalizeRef = useRef<Modalize>(null);
  return (
    <Modalize ref={modalizeRef} alwaysOpen={300} snapPoint={80}>
      <Text>ERIC SILVA</Text>
    </Modalize>
  );
};
