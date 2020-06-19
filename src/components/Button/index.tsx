/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { forwardRef } from 'react';
import {
  Container,
  TextButton,
  ContentLeftIcon,
  ContentLeft,
  Loading,
} from './styles';
import { ViewStyle, TextStyle, ButtonProps, FlexStyle } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props extends ButtonProps {
  style?: ViewStyle | TextStyle | FlexStyle;
  icon: {
    name: string;
    color?: string;
    size?: number;
  };
  title: string;
  loading: boolean;
}

const Input = (
  { style, icon, loading, title, ...rest }: Props,
  ref?: React.Ref<any>
): JSX.Element => (
  <Container style={style} {...rest} ref={ref}>
    <ContentLeft>
      <ContentLeftIcon>
        <MaterialCommunityIcons
          name={icon.name}
          color={icon.color !== undefined ? icon.color : '#A19DA7'}
          size={icon.size !== undefined ? icon.size : 28}
        />
      </ContentLeftIcon>
      {loading ? <Loading /> : <TextButton>{title}</TextButton>}
    </ContentLeft>
  </Container>
);

export const ButtonGroup = forwardRef(Input);
