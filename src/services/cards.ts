import { apiAxios } from './api';

export interface IResponseCards {
  name: string;
  number: string;
  holderName: string;
  flag: string;
  balance: number;
  backgroundColor: string | undefined;
}

export async function getCards(): Promise<IResponseCards[]> {
  const response = await apiAxios
    .get<IResponseCards[]>('/card')
    .then(({ status, data }) => {
      return status === 200 ? data : undefined;
    });

  return response === undefined ? [] : response;
}
