import * as React from 'react';
import {
  Container,
  ContentButtons,
  ContentText,
  ContentDivider,
  Divider,
  TextDivider,
} from './styles';
import { Background } from '../../components/Background';
import { Title, Subtitle } from '../../components/Text';
import {
  ButtonFacebook,
  ButtonGmail,
  ButtonEmail,
} from '../../components/Button/ButtonsGroup';

export const HomePage: React.FC = () => {
  return (
    <Background>
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
    </Background>
  );
};
