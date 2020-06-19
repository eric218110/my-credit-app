import styled from 'styled-components/native';
import Ripple from 'react-native-material-ripple';
import { ButtonProps } from 'react-native';

interface IProps {
  propsButton?: ButtonProps;
  backgroundColorBanner?: string;
  backgroundColor?: string;
}

export const Container = styled(Ripple).attrs((props) => ({
  rippleColor: props.theme.current.text.shade04,
  rippleDuration: 700,
}))<IProps>`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 3px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: ${(props) =>
    props.backgroundColor !== undefined
      ? props.backgroundColor
      : props.theme.current.pallete.primary.shade03};
  height: 55px;
  elevation: 5;
  shadow-offset: 0 0;
  shadow-opacity: 0.2;
  shadow-color: #d3d3d3;
`;

export const TextButton = styled.Text`
  color: ${(props) => props.theme.current.text.shade01};
  font-size: 18px;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

export const ContentLeft = styled.View`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  padding-right: 40%;
  justify-content: space-between;
  align-items: center;
`;

export const ContentLeftIcon = styled.View<IProps>`
  background-color: ${(props) =>
    props.backgroundColor !== undefined
      ? props.backgroundColor
      : props.theme.current.pallete.primary.shade04};
  height: 100%;
  width: 64px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Loading = styled.ActivityIndicator.attrs((props) => ({
  color: props.theme.current.text.shade01,
  size: 'large',
}))``;
