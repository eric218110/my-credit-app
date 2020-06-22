import React from 'react';

import {
  Container,
  StatusBar,
  HeaderContainer,
  BodyContainer,
  HeaderContentTop,
  BalanceContainer,
  BalanceContent,
  BalanceTitle,
  BalanceSubTitle,
  IconEye,
  Avatar,
  HeaderContentBottom,
  ListActionsContent,
  ActionItem,
  ActionIcon,
  ActionText,
  Balance,
} from './styles';

export const HomeTab: React.FC = () => {
  return (
    <React.Fragment>
      <StatusBar />
      <Container>
        <HeaderContainer>
          <HeaderContentTop>
            <BalanceContainer>
              <BalanceContent>
                <BalanceTitle>R$ 2.589,05</BalanceTitle>
                <Balance>
                  <BalanceSubTitle>Saldo atual</BalanceSubTitle>
                  <IconEye />
                </Balance>
              </BalanceContent>
              <Avatar
                source={{
                  uri:
                    'https://avatars3.githubusercontent.com/u/33959079?s=400&u=5171e4ffba05e99e6ff44643f9c32bd6c2b87bd3&v=4',
                }}
              />
            </BalanceContainer>
          </HeaderContentTop>
          <HeaderContentBottom>
            <ListActionsContent>
              <ActionItem>
                <ActionIcon />
                <ActionText>Boraaa</ActionText>
              </ActionItem>
              <ActionItem>
                <ActionIcon />
                <ActionText>Boraaa</ActionText>
              </ActionItem>
              <ActionItem>
                <ActionIcon />
                <ActionText>Boraaa</ActionText>
              </ActionItem>
              <ActionItem>
                <ActionIcon />
                <ActionText>Boraaa</ActionText>
              </ActionItem>
              <ActionItem>
                <ActionIcon />
                <ActionText>Boraaa</ActionText>
              </ActionItem>
              <ActionItem>
                <ActionIcon />
                <ActionText>Boraaa</ActionText>
              </ActionItem>
            </ListActionsContent>
          </HeaderContentBottom>
        </HeaderContainer>
        <BodyContainer></BodyContainer>
      </Container>
    </React.Fragment>
  );
};
