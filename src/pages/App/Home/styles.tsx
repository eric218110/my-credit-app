import styled from 'styled-components/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Gradient from 'react-native-linear-gradient';

export const StatusBar = styled.StatusBar.attrs((props) => ({
  barStyle: 'light-content',
  backgroundColor: props.theme.current.pallete.secundary.shade02,
}))``;

export const Container = styled(Gradient).attrs((props) => ({
  colors: [
    props.theme.current.pallete.secundary.shade02,
    props.theme.current.pallete.secundary.shade01,
  ],
}))``;

export const HeaderContainer = styled.View`
  height: 30%;
  width: 100%;
  flex-direction: column;
`;

export const HeaderContentTop = styled.View`
  justify-content: center;
  align-items: center;
  height: 40%;
  width: 100%;
`;

export const BalanceContainer = styled.View`
  width: 100%;
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const BalanceContent = styled.View`
  margin-right: 15%;
  justify-content: space-between;
`;

export const Balance = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 5px;
  justify-content: space-between;
`;

export const BalanceTitle = styled.Text`
  font-size: 32px;
  font-weight: bold;
  color: ${(props) => props.theme.current.pallete.secundary.shade04};
`;

export const IconEye = styled(MaterialCommunityIcons).attrs((props) => ({
  color: props.theme.current.pallete.secundary.shade04,
  size: 30,
  name: 'eye-off-outline',
}))`
  margin-left: 30px;
`;

export const BalanceSubTitle = styled.Text`
  font-size: 16px;
  color: ${(props) => props.theme.current.text.shade01};
`;

export const Avatar = styled.Image.attrs((props) => ({
  borderColor: props.theme.current.pallete.secundary.shade02,
  borderWidth: 1.5,
}))`
  width: 60px;
  height: 60px;
  border-radius: 30px;
`;

export const HeaderContentBottom = styled.View`
  flex: 1;
`;

export const ListActionsContent = styled.ScrollView.attrs({
  horizontal: true,
  contentContainerStyle: {
    paddingHorizontal: 5,
    alignItems: 'center',
  },
  showsHorizontalScrollIndicator: false,
})``;

export const ActionItem = styled.View`
  width: 100px;
  height: 100px;
  justify-content: space-around;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.1);
  padding-bottom: 10px;
  border-radius: 5px;
  margin-left: 5px;
  margin-right: 5px;
`;

export const ActionIcon = styled(SimpleLineIcons).attrs((props) => ({
  color: props.theme.current.text.shade01,
  size: 35,
  name: 'wallet',
}))`
  padding: 10px;
  border-radius: 10px;
`;

export const ActionText = styled.Text`
  font-size: 14px;
  color: ${(props) => props.theme.current.text.shade02};
`;

export const BodyContainer = styled.View`
  height: 70%;
  width: 100%;
  background-color: ${(props) => props.theme.current.pallete.secundary.shade04};
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
`;
