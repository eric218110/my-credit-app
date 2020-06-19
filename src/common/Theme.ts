interface IPallete {
  shade01: string;
  shade02: string;
  shade03: string;
  shade04: string;
}

export interface ITheme {
  pallete: {
    primary: IPallete;
    secundary: IPallete;
  };
  text: IPallete;
}
