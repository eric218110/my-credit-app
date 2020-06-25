import { apiAxios } from './api';

interface IUser {
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
      email: response.data.email,
      name: response.data.name,
      photoURL: response.data.photoURL,
    },
    token: response.data.token,
  };

  console.log(response.data.photoURL)

  return userResponse;
}
