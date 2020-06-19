import styled from 'styled-components/native';
import { TextInputProps } from 'react-native';

interface IProps {
  propsInput?: TextInputProps;
}

export const Container = styled.View`
  border-radius: 4px;
  background-color: ${(props) => props.theme.current.text.shade02};
  border-radius: 10px;
  margin-bottom: 10px;
  height: 55px;
  flex-direction: row;
  align-items: center;
  max-width: 100%;
  elevation: 5;
  padding-left: 10px;
  padding-right: 20px;
`;

export const TInput = styled.TextInput<IProps>`
  color: ${(props) => props.theme.current.text.shade04};
  width: 95%;
  font-size: 18px;
`;
