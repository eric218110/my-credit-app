import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('screen');

export const Container = styled.View`
  height: ${height}px;
  width: ${width}px;
  z-index: 5;
  justify-content: center;
  align-items: center;
  position: absolute;
  padding: 20px;
`;

export const ContentButtons = styled.View`
  flex: 2;
`;

export const ContentText = styled.View`
  flex: 2;
  justify-content: space-around;
`;

export const ContentDivider = styled.View`
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TextDivider = styled.Text`
  font-size: 24px;
  color: #c4c4c4;
  font-weight: bold;
`;

export const Divider = styled.View`
  width: 90%;
  height: 1px;
  background-color: #c4c4c4;
  right: 0;
`;
