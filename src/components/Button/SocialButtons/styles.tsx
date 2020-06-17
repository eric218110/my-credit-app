import styled from 'styled-components/native';

interface IProps {
  backgroundColor: string;
}

export const Text = styled.Text`
  color: #fff;
  font-weight: bold;
  font-family: roboto;
  font-size: 20px;
  align-self: center;
`;

export const Content = styled.View`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  padding-left: 80px;
  justify-content: space-between;
  align-items: center;
`;

export const ContentIcon = styled.View<IProps>`
  background-color: ${(props) => props.backgroundColor};
  height: 100%;
  width: 64px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CircleIcon = styled.View`
  background-color: #ffffff;
  border-radius: 30px;
  height: 45px;
  width: 45px;
  align-items: center;
  justify-content: center;
`;

export const Gmail = styled.Image.attrs(() => ({
  resizeMode: 'cover',
}))`
  width: 35px;
  height: 35px;
`;
