import styled from 'styled-components/native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

export const HeaderContainer = styled.View`
  width: 100%;
  background-color: transparent;
  height: 20px;
  padding: 10px;
`;

export const IconLeft = styled(SimpleLineIcons).attrs((props) => ({
  color: props.theme.current.text.shade01,
  size: 28,
  name: 'arrow-left',
}))`
  background-color: transparent;
`;
