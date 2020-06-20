/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { forwardRef } from 'react';
import {
  Container,
  TextButton,
  ContentLeftIcon,
  ContentLeft,
  Loading,
  ContentRight,
  ContentRightIcon,
  ContentText,
} from './styles';
import { ViewStyle, TextStyle, ButtonProps, FlexStyle } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props extends ButtonProps {
  style?: ViewStyle | TextStyle | FlexStyle;
  backgroundColor?: string;
  backgroundColorBanner?: string;
  icon: {
    name: string;
    color?: string;
    size?: number;
  };
  title: string;
  loading: boolean;
  positionBanner: 'left' | 'right';
}

const Input = (
  {
    style,
    icon,
    loading,
    title,
    positionBanner,
    backgroundColor,
    backgroundColorBanner,
    ...rest
  }: Props,
  ref?: React.Ref<any>
): JSX.Element => (
  <Container
    backgroundColor={backgroundColor}
    style={style}
    {...rest}
    ref={ref}
  >
    {positionBanner === 'left' ? (
      <ContentRight>
        {loading ? (
          <Loading />
        ) : (
          <React.Fragment>
            <ContentText>
              <TextButton>{title}</TextButton>
            </ContentText>
            <ContentRightIcon backgroundColorBanner={backgroundColorBanner}>
              <MaterialCommunityIcons
                name={icon.name}
                color={icon.color !== undefined ? icon.color : '#FFF'}
                size={icon.size !== undefined ? icon.size : 28}
              />
            </ContentRightIcon>
          </React.Fragment>
        )}
      </ContentRight>
    ) : (
      <ContentLeft>
        <ContentLeftIcon backgroundColorBanner={backgroundColorBanner}>
          <MaterialCommunityIcons
            name={icon.name}
            color={icon.color !== undefined ? icon.color : '#FFF'}
            size={icon.size !== undefined ? icon.size : 28}
          />
        </ContentLeftIcon>
        {console.log(title)}
        {loading ? <Loading /> : <TextButton>{title}</TextButton>}
      </ContentLeft>
    )}
  </Container>
);

export const ButtonGroup = forwardRef(Input);
