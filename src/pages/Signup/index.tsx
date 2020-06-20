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

export const SignupPage: React.FC = () => {
  const emailRef = React.createRef<NativeMethods>();
  const passwordRef = React.createRef<NativeMethods>();
  const repeatPasswordRef = React.createRef<NativeMethods>();
  const [loading, setLoading] = React.useState<IState>({ isLoading: false });
  const navigation = useNavigation();

  function handleSignup() {
    setLoading({ isLoading: true });
  }

  return (
    <Background>
      <Container>
        <Content>
          <ContentText>
            <Title>Criar conta</Title>
            <Subtitle>
              Informe os dados abaixo para criar uma nova conta
            </Subtitle>
          </ContentText>
          <ContentForm>
            <ContentInput>
              <Input
                icon={{ name: 'account' }}
                placeholder={'Informe seu nome'}
                returnKeyType={'next'}
                onSubmitEditing={() => emailRef.current?.focus()}
              />
              <Input
                icon={{ name: 'email' }}
                placeholder={'Informe seu usuário ou e-mail'}
                returnKeyType={'next'}
                onSubmitEditing={() => repeatPasswordRef.current?.focus()}
                ref={emailRef}
              />
              <Input
                icon={{ name: 'lock' }}
                placeholder={'Crie uma senha'}
                returnKeyType={'next'}
                onSubmitEditing={() => passwordRef.current?.focus()}
                ref={repeatPasswordRef}
              />
              <Input
                icon={{ name: 'lock' }}
                placeholder={'repita sua senha'}
                returnKeyType={'send'}
                ref={passwordRef}
                onSubmitEditing={handleSignup}
              />
            </ContentInput>
            <ButtonGroup
              positionBanner={'left'}
              loading={loading.isLoading}
              icon={{ name: 'plus' }}
              title={'Criar conta'}
              onPress={handleSignup}
            />
            <Actions
              onPress={() => {
                navigation.navigate('LoginScreen');
              }}
            >
              <ActionText>Já possui conta? Entrar</ActionText>
            </Actions>
          </ContentForm>
        </Content>
      </Container>
    </Background>
  );
};
