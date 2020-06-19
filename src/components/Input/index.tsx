/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { forwardRef } from 'react';
import { Container, TInput } from './styles';
import { ViewStyle, TextStyle, TextInputProps } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props extends TextInputProps {
  style?: ViewStyle | TextStyle;
  icon: {
    name: string;
    color?: string;
    size?: number;
  };
  propsInput?: TextInputProps;
}

const Input = (
  { style, icon, propsInput, ...rest }: Props,
  ref?: React.Ref<any>
): JSX.Element => (
  <Container style={style}>
    <MaterialCommunityIcons
      name={icon.name}
      color={icon.color !== undefined ? icon.color : '#A19DA7'}
      size={icon.size !== undefined ? icon.size : 28}
    />
    <TInput propsInput={propsInput} {...rest} ref={ref} />
  </Container>
);

export default forwardRef(Input);
