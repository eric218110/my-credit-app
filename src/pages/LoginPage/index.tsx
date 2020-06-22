import * as React from 'react';
import {
  Container,
  Content,
  ContentText,
  ContentForm,
  ContentInput,
  Actions,
  ActionText,
} from './styles';
import { Title, Subtitle } from '../../components/Text';
import { Background } from '../../components/Background';
import { NativeMethods } from 'react-native';
import { ButtonGroup } from '../../components/Button';
import Input from '../../components/Input';
import { useNavigation } from '@react-navigation/native';

interface IState {
  isLoading: boolean;
}

export const LoginPage: React.FC = () => {
  const passwordRef = React.createRef<NativeMethods>();
  const [loading, setLoading] = React.useState<IState>({ isLoading: false });
  const navigation = useNavigation();

  function handleLogin() {
    setLoading({ isLoading: true });
    setTimeout(() => {
      navigation.navigate('TabsScreen');
    }, 3000);
  }

  return (
    <Background>
      <Container>
        <Content>
          <ContentText>
            <Title>Login</Title>
            <Subtitle>Informe os dados abaixo</Subtitle>
          </ContentText>
          <ContentForm>
            <ContentInput>
              <Input
                icon={{ name: 'account' }}
                placeholder={'Informe seu usuário ou e-mail'}
                returnKeyType={'next'}
                onSubmitEditing={() => passwordRef.current?.focus()}
              />
              <Input
                icon={{ name: 'lock' }}
                placeholder={'Informe sua senha'}
                returnKeyType={'send'}
                ref={passwordRef}
                onSubmitEditing={handleLogin}
              />
            </ContentInput>
            <ButtonGroup
              positionBanner={'left'}
              loading={loading.isLoading}
              icon={{ name: 'arrow-right' }}
              title={'Login'}
              onPress={handleLogin}
            />
            <Actions>
              <ActionText>Esqueci minha senha</ActionText>
            </Actions>
            <Actions
              onPress={() => {
                navigation.navigate('HomeScreen');
              }}
            >
              <ActionText>Entrar com facebook ou Gmail</ActionText>
            </Actions>
            <Actions
              onPress={() => {
                navigation.navigate('SignupScreen');
              }}
            >
              <ActionText>Criar conta</ActionText>
            </Actions>
          </ContentForm>
        </Content>
      </Container>
    </Background>
  );
};
