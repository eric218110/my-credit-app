import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Background = styled(LinearGradient).attrs((props) => ({
  colors: [
    props.theme.current.pallete.secundary.shade02,
    props.theme.current.pallete.secundary.shade01,
  ],
}))`
  flex: 1;
`;
