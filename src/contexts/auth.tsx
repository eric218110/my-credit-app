import * as React from 'react';
import * as auth from '../services/auth';
import AsyncStorage from '@react-native-community/async-storage';
import { apiAxios } from '../services/api';
interface IAuthProviderProps {
  children: React.ReactNode;
}
interface IUser {
  id: string;
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
    id: '',
    email: '',
    name: '',
    photoURL: '',
  });

  React.useEffect(() => {
    async function loadStorage() {
      const userStorage = await AsyncStorage.getItem('@MyCredit:user');
      const tokenStorage = await AsyncStorage.getItem('@MyCredit:token');
      const idStorage = await AsyncStorage.getItem('@MyCredit:id');

      if (userStorage && tokenStorage && idStorage) {
        setUserContext(JSON.parse(userStorage));
        apiAxios.defaults.headers.common['Authorization'] = `Bearer ${tokenStorage}`;
        apiAxios.defaults.headers.common['userid'] = idStorage;
      }
    }

    loadStorage();
  }, []);

  async function signIn(): Promise<void> {
    const { user, token } = await auth.signIn();

    setUserContext(user);

    await AsyncStorage.setItem('@MyCredit:user', JSON.stringify(user));
    await AsyncStorage.setItem('@MyCredit:token', token);
    await AsyncStorage.setItem('@MyCredit:id', user.id);
  }

  async function signOut(): Promise<void> {
    AsyncStorage.clear().then(() => {
      setUserContext({
        id: '',
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
      id: data.id,
      email: data.email,
      name: data.name,
      photoURL: data.photoURL,
    });

    setUserContext({
      id: response.user.id,
      email: response.user.email,
      name: response.user.name,
      photoURL: response.user.photoURL,
    });

    await AsyncStorage.setItem('@MyCredit:user', JSON.stringify(response.user));
    await AsyncStorage.setItem('@MyCredit:token', response.token);
    await AsyncStorage.setItem('@MyCredit:id', response.user.id.toString());
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
