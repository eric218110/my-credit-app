import styled from 'styled-components/native';
import Ripple from 'react-native-material-ripple';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface IProps {
  active: boolean;
}

export const ContainerTab = styled.View`
  background-color: ${(props) => props.theme.current.text.shade02};
  flex-direction: row;
  height: 55px;
`;

export const ContainerItem = styled(Ripple).attrs((props) => ({
  rippleColor: props.theme.current.pallete.primary.shade01,
  rippleDuration: 700,
  rippleFades: true,
}))`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 25px 5px 25px 5px;
  height: 100%;
  width: 100%;
  flex-direction: column;
`;

export const TabItemContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const TabItemIcon = styled(MaterialCommunityIcons).attrs({
  size: 25,
})<IProps>`
  color: ${(props) =>
    props.active
      ? props.theme.current.pallete.secundary.shade01
      : props.theme.current.text.shade03};
  padding: 0px 5px 3px 5px;
`;

export const IsItemActive = styled.View`
  height: 6px;
  width: 6px;
  border-radius: 3px;
  background-color: ${(props) => props.theme.current.pallete.secundary.shade01};
`;
