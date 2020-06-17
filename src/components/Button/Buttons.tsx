import styled from 'styled-components/native';
import Ripple from 'react-native-material-ripple';

interface IButtonProps {
  backgroundColor: string;
}

export const Button = styled(Ripple).attrs(() => ({
  rippleColor: '#FEFEFE',
  rippleDuration: 700,
}))<IButtonProps>`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 3px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: ${(props) => props.backgroundColor};
  height: 55px;
  elevation: 5;
  shadow-offset: 0 0;
  shadow-opacity: 0.2;
  shadow-color: #d3d3d3;
`;

export const Text = styled.Text``;
