import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props) => props.theme.current.pallete.secundary.shade01};
`;

export const StatusBar = styled.StatusBar.attrs((props) => ({
  barStyle: 'light-content',
  backgroundColor: props.theme.current.pallete.secundary.shade01,
}))``;
