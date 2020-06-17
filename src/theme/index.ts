import { DefaultTheme } from 'styled-components';
import { ITheme, IActionsColors } from '../common/Theme';

const actionColors: IActionsColors = {
  danger: '#DB3A34',
  default: '#5885E4',
  disable: '#C4C4C4',
  success: '#4F9155',
  warning: '#C5B631',
};

const theme: ITheme = {
  colors: {
    primary: '#046F79',
    primaryVariant: '#42929A',
    secundary: '#FBB51A',
    secundaryVariant: '#C5B631',
  },
  background: {
    button: {
      backgroundColor: {
        primary: '#143642',
        primaryVariant: '#2E8BAB',
        secundary: '#E39494',
        secundaryVariant: '#F4BEBE',
      },
      preferences: {
        inner: '',
        ripple: '',
        shadow: '',
        actions: actionColors,
      },
    },
    icon: {
      backgroundColor: {
        primary: '',
        primaryVariant: '',
        secundary: '',
        secundaryVariant: '',
      },
      preferences: {
        inner: '',
        ripple: '',
        shadow: '',
        actions: actionColors,
      },
    },
    input: {
      backgroundColor: {
        primary: '',
        primaryVariant: '',
        secundary: '',
        secundaryVariant: '',
      },
      preferences: {
        inner: '',
        ripple: '',
        shadow: '',
        actions: actionColors,
      },
    },
    text: {
      backgroundColor: {
        primary: '#143642',
        primaryVariant: '#999783',
        secundary: '#FBB51A',
        secundaryVariant: '#F1CE7F',
      },
      preferences: {
        inner: '#5885E4',
        ripple: '#1976D2',
        shadow: '#999783',
        actions: actionColors,
      },
    },
  },
};

export const lightTheme: DefaultTheme = {
  current: theme,
};
