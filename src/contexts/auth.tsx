import * as React from 'react';
import * as auth from '../services/auth';
import AsyncStorage from '@react-native-community/async-storage';

interface IAuthProviderProps {
  children: React.ReactNode;
}

interface IUser {
  name: string;
  email: string;
  photoURL: string;
}

interface IAuthContextProps {
  signed: boolean;
  user: IUser | null;
  signIn(): Promise<void>;
  signInWithFacebook(user: { data: IUser }): Promise<void>;
  signOut(): void;
}

export const AuthContext = React.createContext<IAuthContextProps>(
  {} as IAuthContextProps
);

export const AuthProvider: React.FC<IAuthProviderProps> = ({
  children,
}: IAuthProviderProps) => {
  const [userContext, setUserContext] = React.useState<IUser>({
    email: '',
    name: '',
    photoURL: '',
  });

  React.useEffect(() => {
    async function loadStorage() {
      const UserStorage = await AsyncStorage.getItem('@MyCredit:user');
      const Tokekstorage = await AsyncStorage.getItem('@MyCredit:token');

      if (UserStorage && Tokekstorage) {
        setUserContext(JSON.parse(UserStorage));
      }
    }

    loadStorage();
  }, []);

  async function signIn(): Promise<void> {
    const { user, token } = await auth.signIn();

    setUserContext(user);

    await AsyncStorage.setItem('@MyCredit:user', JSON.stringify(user));
    await AsyncStorage.setItem('@MyCredit:token', token);
  }

  async function signOut(): Promise<void> {
    AsyncStorage.clear().then(() => {
      setUserContext({
        email: '',
        name: '',
        photoURL: '',
      });
    });
  }

  async function signInWithFacebook(paramsUser: {
    data: IUser;
  }): Promise<void> {
    const { data } = paramsUser;
    const response = await auth.signInWithFacebook({
      email: data.email,
      name: data.email,
      photoURL: data.photoURL,
    });

    setUserContext({
      email: response.user.email,
      name: response.user.name,
      photoURL: response.user.photoURL,
    });
    await AsyncStorage.setItem('@MyCredit:user', JSON.stringify(response.user));
    await AsyncStorage.setItem('@MyCredit:token', response.token);
    console.log(userContext);
  }

  return (
    <AuthContext.Provider
      value={{
        signed: userContext.email === '' ? false : true,
        user: userContext,
        signIn,
        signOut,
        signInWithFacebook,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
