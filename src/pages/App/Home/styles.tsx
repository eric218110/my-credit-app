import styled from 'styled-components/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ripple from 'react-native-material-ripple';

export const Container = styled.View`
  width: 100%;
  padding: 10px;
`;

export const MainContainer = styled.View`
  flex: 1;
  background-color: rgba(229, 228, 249, 0.3);
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.current.pallete.secundary.shade04};
  padding: 20px;
  margin-bottom: 15px;
  border-radius: 15px;
`;

export const Username = styled.View``;

export const Hello = styled.Text`
  font-size: 15px;
  color: ${(props) => props.theme.current.text.shade04};
  font-weight: 800;
`;

export const Name = styled.Text`
  font-size: 20px;
  color: ${(props) => props.theme.current.pallete.secundary.shade01};
  font-weight: bold;
`;

export const ContainerAvatar = styled.TouchableOpacity`
  justify-content: space-around;
  align-items: center;
`;

export const Avatar = styled.Image.attrs({
  resizeMode: 'cover',
})`
  height: 48px;
  width: 48px;
  border-radius: 24px;
`;

export const ContainerCreditCard = styled.View`
  height: 160px;
  flex-direction: row;
`;

export const ListCreditCard = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { alignItems: 'center' },
})`
  width: 80%;
`;

export const NewCreditCard = styled.View`
  width: 15%;
  height: 45%;
  margin-right: 15px;
  border-radius: 18px;
  justify-content: center;
  align-items: center;
`;

export const TextCardEmpty = styled.Text`
  color: ${(props) => props.theme.current.pallete.secundary.shade01};
  font-size: 32px;
  flex: 1;
  align-self: center;
  margin: auto;
`;

export const Plus = styled.Text`
  font-size: 45px;
  color: ${(props) => props.theme.current.pallete.secundary.shade02};
`;

export const ContainerBody = styled.View`
  flex: 1;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
`;

export const Body = styled.View`
  flex: 1;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const ListRecent = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;

export const Recent = styled(Ripple).attrs((props) => ({
  rippleColor: props.theme.current.text.shade04,
  rippleDuration: 700,
  rippleFades: true,
}))`
  align-items: center;
  justify-content: center;
`;

export const IconRecent = styled(MaterialCommunityIcons).attrs({
  size: 32,
})`
  padding: 16px;
  height: 70px;
  width: 70px;
  background-color: rgba(229, 228, 249, 0.3);
  border-radius: 10px;
  margin-bottom: 10px;
`;

export const TitleRecent = styled.Text``;
