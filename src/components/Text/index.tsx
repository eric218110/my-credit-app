import styled from 'styled-components/native';

export const Title = styled.Text`
  color: ${(props) => props.theme.current.text.shade01};
  font-size: 48px;
  font-weight: bold;
`;

export const Subtitle = styled.Text`
  color: ${(props) => props.theme.current.text.shade01};
  font-size: 20px;
  font-weight: bold;
`;
