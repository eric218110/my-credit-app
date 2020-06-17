import styled from 'styled-components/native';
import LottieView from 'lottie-react-native';
import { Dimensions } from 'react-native';

interface IPropsLottie {
  position: {
    bottom: boolean;
  };
}

const { height, width } = Dimensions.get('screen');

export const Container = styled.View`
  background-color: red;
  flex: 1;
  flex-direction: column;
`;

export const LottieBackground = styled(LottieView).attrs(() => ({
  autoPlay: true,
  loop: true,
  speed: 3,
  resizeMode: 'cover',
}))<IPropsLottie>`
  position: absolute;
  z-index: 4;
  height: ${height / 2}px;
  width: ${width}px;
  ${(props) => (props.position.bottom ? 'bottom: 0px' : 'top:0')}
`;

export const ContainerLottie = styled.View`
  z-index: 5;
  position: absolute;
  height: 100px;
`;
