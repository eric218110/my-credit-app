import styled from "styled-components/native";

export const StatusBar = styled.StatusBar.attrs((props) => ({
  barStyle: 'light-content',
  backgroundColor: props.theme.current.pallete.secundary.shade02,
}))``;
