import * as React from 'react';
import {
  Container,
  ContentButtons,
  ContentText,
  ContentDivider,
  Divider,
  TextDivider,
  ButtonGmail,
  ButtonFacebook,
  ButtonEmail,
} from './styles';
import { Background } from '../../components/Background';
import { Title, Subtitle } from '../../components/Text';
import { useNavigation } from '@react-navigation/native';

export const HomePage: React.FC = () => {
  const navigation = useNavigation();
  return (
    <Background>
      <Container>
        <ContentText>
          <Title>Bem vindo</Title>
          <Subtitle>
            Vamos te ajudar com seus cartões, primeiro realize login
          </Subtitle>
        </ContentText>
        <ContentButtons>
          <ButtonFacebook
            loading={false}
            onPress={() => console.log('testes')}
          />
          <ButtonGmail loading={false} onPress={() => console.log('testes')} />
          <ContentDivider>
            <TextDivider>ou</TextDivider>
            <Divider />
          </ContentDivider>
          <ButtonEmail
            loading={false}
            onPress={() => navigation.navigate('LoginScreen')}
          />
        </ContentButtons>
      </Container>
    </Background>
  );
};
