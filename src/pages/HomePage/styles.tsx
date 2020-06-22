import styled from 'styled-components/native';
import { ButtonGroup } from '../../components/Button';
import Lottie from 'lottie-react-native';

export const Container = styled.View`
  margin: auto;
  padding-left: 20px;
  padding-right: 20px;
  flex: 2;
`;

export const Content = styled.View`
  flex: 1;
`;

export const ContentButtons = styled.View`
  max-width: 100%;
  align-items: center;
`;

export const ContentText = styled.View`
  justify-content: flex-end;
  margin-bottom: 20px;
`;

export const ContentDivider = styled.View`
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TextDivider = styled.Text`
  font-size: 24px;
  color: #c4c4c4;
  font-weight: bold;
`;

export const Divider = styled.View`
  width: 90%;
  height: 1px;
  background-color: #c4c4c4;
  right: 0;
  margin-left: 15px;
`;

export const ButtonGmail = styled(ButtonGroup).attrs({
  backgroundColor: '#28DA97',
  backgroundColorBanner: '#196C59',
  icon: { name: 'google', size: 38 },
  title: 'Login com Gmail',
  positionBanner: 'left',
})``;

export const ButtonFacebook = styled(ButtonGroup).attrs({
  backgroundColor: '#2475FB',
  backgroundColorBanner: '#0052CC',
  icon: { name: 'facebook', size: 38 },
  title: 'Login com Facebook',
  positionBanner: 'left',
})``;

export const ButtonEmail = styled(ButtonGroup).attrs({
  icon: { name: 'email-outline' },
  title: 'Login com Email',
  positionBanner: 'left',
})``;

export const ContainerLottie = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const LottieField = styled(Lottie).attrs({
  autoPlay: true,
  loop: false,
  duration: 2000,
  resizeMode: 'cover',
})`
  margin-right: 20px;
`;
