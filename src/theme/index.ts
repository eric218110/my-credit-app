import { DefaultTheme } from 'styled-components';
import { ITheme } from '../common/Theme';

const theme: ITheme = {
  pallete: {
    primary: {
      shade01: '#DB975D',
      shade02: '#A45D2B',
      shade03: '#151838',
      shade04: '#2a3055',
    },
    secundary: {
      shade01: '#6A29A6',
      shade02: '#aa6ae7',
      shade03: '#24B4B3',
      shade04: '#4bd8d8',
    },
  },
  text: {
    shade01: '#FFFFFF',
    shade02: '#E6D9CC',
    shade03: '#A59282',
    shade04: '#A19DA7',
  },
};

export const lightTheme: DefaultTheme = {
  current: theme,
};
