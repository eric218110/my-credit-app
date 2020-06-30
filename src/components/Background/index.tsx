import styled from 'styled-components/native';

export const Background = styled.ImageBackground.attrs({
  source: require('../../assets/background/background.png'),
  queryCache: 'disk',
})`
  flex: 1;
`;
