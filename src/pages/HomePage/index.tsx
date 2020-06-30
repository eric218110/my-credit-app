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
import { AuthContext } from '../../contexts/auth';
import {
  LoginManager,
  GraphRequest,
  GraphRequestManager,
  AccessToken,
} from 'react-native-fbsdk';

export const HomePage: React.FC = () => {
  const navigation = useNavigation();
  const { signInWithFacebook } = React.useContext(AuthContext);

  function _handleLoginFacebook() {
    LoginManager.logInWithPermissions(['public_profile', 'email']).then(
      async (result) => {
        if (result.isCancelled) {
          console.log('Login Cancelled');
        } else {
          await AccessToken.getCurrentAccessToken().then(() => {
            const request = new GraphRequest(
              '/me?fields=name,picture,email',
              null,
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              (error: any, result: any) => {
                if (error) {
                  console.log(error);
                } else {
                  signInWithFacebook({
                    data: {
                      name: result.name,
                      email: result.email,
                      photoURL: result.picture.data.url,
                    },
                  });
                }
              }
            );
            new GraphRequestManager().addRequest(request).start();
          });
        }
      },
      function (error) {
        console.log(`Error in login with facebook: ${error}`);
      }
    );
  }

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
          <ButtonFacebook loading={false} onPress={_handleLoginFacebook} />
          <ButtonGmail
            loading={false}
            onPress={async () => {
              signInWithFacebook({
                data: {
                  name: 'Eric Silva',
                  email: 'ericsilvaccp@gmail.com',
                  photoURL:
                    'https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=2071537502990779&height=50&width=50&ext=1595686049&hash=AeSjangqEib810oB',
                },
              });
            }}
          />
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
