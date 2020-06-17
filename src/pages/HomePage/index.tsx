import * as React from 'react';
import {
  Container,
  ContentButtons,
  ContentText,
  ContentDivider,
  Divider,
  TextDivider,
} from './styles';
import { StatusBar } from 'react-native';
import { LottieBackground } from '../../components/Background';
import { Title, Subtitle } from '../../components/Text';
import {
  ButtonFacebook,
  ButtonGmail,
  ButtonEmail,
} from '../../components/Button/SocialButtons';

export const HomePage: React.FC = () => {
  return (
    <React.Fragment>
      <StatusBar barStyle="dark-content" />
      <LottieBackground
        position={{ bottom: false }}
        source={require('../../assets/lottie/background_top')}
      />
      <Container>
        <ContentText>
          <Title>Bem vindo</Title>
          <Subtitle>
            Vamos te ajudar com seus cartões, primeiro relize login
          </Subtitle>
        </ContentText>
        <ContentButtons>
          <ButtonFacebook text={'Login com Facebook'} />
          <ButtonGmail text={'Login com Gmail'} />
          <ContentDivider>
            <TextDivider>ou</TextDivider>
            <Divider />
          </ContentDivider>
          <ButtonEmail text={'Login com Email'} />
        </ContentButtons>
      </Container>
      <LottieBackground
        position={{ bottom: true }}
        source={require('../../assets/lottie/background_bottom')}
      />
    </React.Fragment>
  );
};
