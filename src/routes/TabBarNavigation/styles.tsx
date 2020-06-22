import styled from 'styled-components/native';
import Ripple from 'react-native-material-ripple';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface IProps {
  active: boolean;
}

export const ContainerTab = styled.View`
  background-color: ${(props) => props.theme.current.pallete.secundary.shade04};
  flex-direction: row;
  height: 55px;
`;

export const ContainerItem = styled(Ripple).attrs((props) => ({
  rippleColor: props.theme.current.pallete.secundary.shade01,
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

export const TabItemText = styled.Text<IProps>`
  color: ${(props) =>
    props.active
      ? props.theme.current.pallete.secundary.shade01
      : props.theme.current.text.shade03};
  font-weight: bold;
  border-bottom-color: ${(props) =>
    props.active
      ? props.theme.current.pallete.secundary.shade01
      : 'transparent'};
  border-bottom-width: ${(props) => (props.active ? '3px' : '0')};
  padding: 0px 5px 0px 5px;
`;
export const TabItemIcon = styled(MaterialCommunityIcons).attrs({
  size: 25,
})<IProps>`
  color: ${(props) =>
    props.active
      ? props.theme.current.pallete.secundary.shade01
      : props.theme.current.text.shade03};
  border-bottom-color: ${(props) =>
    props.active
      ? props.theme.current.pallete.secundary.shade01
      : 'transparent'};
  border-bottom-width: ${(props) => (props.active ? '3px' : '0')};
  padding: 0px 5px 3px 5px;
`;
export const TabItemAdd = styled.View``;
