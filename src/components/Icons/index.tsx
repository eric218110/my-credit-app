import * as React from 'react';
import styled from 'styled-components';

export interface IIconProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  iconType: any;
  name: string;
  size?: number;
  color?: string;
}

export const Icons: React.FC<IIconProps> = ({
  iconType,
  size,
  color,
  name,
}: IIconProps) => {
  const IconStyled = styled(iconType).attrs(() => {
    return {
      size: size !== undefined ? size : 24,
      color: color !== undefined ? color : '#FFF',
      name,
    };
  })`
    margin-right: 5px;
  `;
  return <IconStyled />;
};
