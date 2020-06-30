import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  padding: 10px;
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
  background-color: rgba(229, 228, 249, 0.3);
  margin-right: 15px;
  border-radius: 18px;
  justify-content: center;
  align-items: center;
`;

export const Plus = styled.Text`
  font-size: 45px;
  color: ${(props) => props.theme.current.pallete.secundary.shade02};
`;
