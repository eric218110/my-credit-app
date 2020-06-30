import * as React from 'react';
import { Background } from '../../../components/Background';
import { AuthContext } from '../../../contexts/auth';
import {
  Container,
  Header,
  Username,
  Hello,
  Name,
  Avatar,
  ContainerCreditCard,
  ListCreditCard,
  NewCreditCard,
  Plus,
} from './styles';
import CreditCard from '../../../components/CreditCard';

export const HomeTab: React.FC = () => {
  const { user } = React.useContext(AuthContext);
  return (
    <Background>
      <Container>
        <Header>
          <Username>
            <Hello>Olá, boa noite</Hello>
            <Name>{user?.name}!</Name>
          </Username>
          <Avatar source={{ uri: user?.photoURL }} />
        </Header>
        <ContainerCreditCard>
          <NewCreditCard>
            <Plus>+</Plus>
          </NewCreditCard>
          <ListCreditCard>
            <CreditCard
              card={{
                flagIconName: 'cc-visa',
                cardName: 'viagens',
                cardNumber: '218110',
                balance: '24.55',
              }}
            />
            <CreditCard
              card={{
                backgroundCard: '#49148a',
                flagIconName: 'cc-mastercard',
                cardName: 'compras',
                cardNumber: '218110',
                balance: '24.55',
              }}
            />
          </ListCreditCard>
        </ContainerCreditCard>
      </Container>
    </Background>
  );
};
