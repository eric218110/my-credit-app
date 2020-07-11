import { apiAxios } from './api';

interface IUser {
  id: string;
  name: string;
  email: string;
  photoURL: string;
}
export interface IResponse {
  token: string;
  user: IUser;
}

export function signIn(): Promise<IResponse> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: 'dbdgbdgbdgbdgbdb',
        user: {
          id: '5',
          name: 'Eric Silva',
          email: 'ericsilvaccp@gmail.com',
          photoURL: 'string',
        },
      });
    }, 2000);
  });
}

export async function signInWithFacebook(user: IUser): Promise<IResponse> {
  const response = await apiAxios.post('/auth/facebook', user);

  const userResponse: IResponse = {
    user: {
      id: response.data.user.id,
      email: response.data.user.email,
      name: response.data.user.name,
      photoURL: response.data.user.photoURL,
    },
    token: response.data.user.token,
  };

  return userResponse;
}
