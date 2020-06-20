import 'styled-components';
import { ITheme } from 'src/common/Theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    current: ITheme;
  }
}
