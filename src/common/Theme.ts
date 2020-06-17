interface IbackgroundColor {
  primary: string;
  primaryVariant: string;
  secundary: string;
  secundaryVariant: string;
}

export interface IActionsColors {
  danger: string;
  warning: string;
  success: string;
  default: string;
  disable: string;
}

export interface IPreferences {
  ripple: string;
  shadow: string;
  inner: string;
  actions: IActionsColors;
}

export interface IDefaultProps {
  backgroundColor: IbackgroundColor;
  preferences: IPreferences;
}

interface IBackground {
  button: IDefaultProps;
  text: IDefaultProps;
  icon: IDefaultProps;
  input: IDefaultProps;
}

export interface ITheme {
  colors: IbackgroundColor;
  background: IBackground;
}
