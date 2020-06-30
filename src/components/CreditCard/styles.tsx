import styled from 'styled-components/native';
import { lighten } from 'polished';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';

interface IPros {
  backgroundColor?: string;
}

let background: string | undefined = undefined;

export const Container = styled.View<IPros>`
  background-color: ${(props) =>
    props.backgroundColor !== undefined
      ? props.backgroundColor
      : props.theme.current.pallete.secundary.shade02};
  height: 100%;
  width: 280px;
  border-radius: 20px;
  justify-content: space-between;
  padding: 20px 0px 20px 0px;
  margin-right: 18px;
  ${(props) => (background = props.backgroundColor)};
`;

export const Button = styled.TouchableOpacity``;

export const ContainerHeader = styled.View`
  flex: 1;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 25px 0px 25px;
  align-items: flex-start;
`;

export const Flag = styled(FontAwesome5).attrs((props) => ({
  size: 50,
  color: lighten(
    0.3,
    background !== undefined
      ? background
      : props.theme.current.pallete.secundary.shade02
  ),
}))``;

export const Edit = styled(Feather).attrs((props) => ({
  name: 'edit',
  size: 23,
  color: lighten(
    0.3,
    background !== undefined
      ? background
      : props.theme.current.pallete.secundary.shade02
  ),
}))``;

export const CardName = styled.Text`
  align-self: flex-start;
  font-size: 18px;
  font-weight: bold;
  color: ${(props) =>
    lighten(
      0.3,
      background !== undefined
        ? background
        : props.theme.current.pallete.secundary.shade02
    )};
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const CardNumber = styled.Text`
  align-self: flex-start;
  font-size: 16px;
  font-weight: bold;
  color: ${(props) =>
    lighten(
      0.3,
      background !== undefined
        ? background
        : props.theme.current.pallete.secundary.shade02
    )};
`;

export const ContainerBottom = styled.View`
  flex: 1;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 0px 30px 0px 30px;
`;

export const Content = styled.View``;

export const Balance = styled.Text`
  font-size: 28px;
  text-transform: uppercase;
  color: ${(props) =>
    lighten(
      0.5,
      background !== undefined
        ? background
        : props.theme.current.pallete.secundary.shade02
    )};
  font-weight: bold;
`;
