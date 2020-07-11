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
  ContainerBody,
  Body,
  MainContainer,
  ListRecent,
  Recent,
  IconRecent,
  TitleRecent,
  ContainerAvatar,
  TextCardEmpty,
} from './styles';
import CreditCard from '../../../components/CreditCard';
import { ModalHome } from '../../../components/Modal/HomeModal';
import { getCards, IResponseCards } from '../../../services/cards';

interface IState {
  card: IResponseCards[];
}

export const HomeTab: React.FC = () => {
  const { user, signOut } = React.useContext(AuthContext);
  const [card, setCard] = React.useState<IState>({
    card: [{} as IResponseCards],
  });

  async function setCards() {
    const cardResponse = await getCards();
    setCard({ card: cardResponse });
  }

  React.useEffect(() => {
    setCards();
  }, []);

  return (
    <Background>
      <MainContainer>
        <Container>
          <Header>
            <Username>
              <Hello>Bem vindo</Hello>
              <Name>{user?.name.toLocaleUpperCase()}</Name>
            </Username>
            <ContainerAvatar onPress={() => signOut()}>
              <Avatar source={{ uri: user?.photoURL }} />
              <Hello>sair</Hello>
            </ContainerAvatar>
          </Header>
          <ContainerCreditCard>
            <NewCreditCard>
              <Plus>+</Plus>
            </NewCreditCard>
            <ListCreditCard>
              {/* <CreditCard
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
              /> */}
              {card.card === undefined || card?.card.length === 0 ? (
                <TextCardEmpty>Adicionar novo cartão</TextCardEmpty>
              ) : (
                <TextCardEmpty>Card</TextCardEmpty>
                )
              }
            </ListCreditCard>
          </ContainerCreditCard>
        </Container>
        <ContainerBody>
          <Body>
            <ListRecent>
              <Recent>
                <IconRecent color={'red'} name={'home'} />
                <TitleRecent>Todos</TitleRecent>
              </Recent>
              <Recent>
                <IconRecent color={'red'} name={'home'} />
                <TitleRecent>Todos</TitleRecent>
              </Recent>
              <Recent>
                <IconRecent color={'red'} name={'home'} />
                <TitleRecent>Todos</TitleRecent>
              </Recent>
              <Recent>
                <IconRecent color={'red'} name={'home'} />
                <TitleRecent>Todos</TitleRecent>
              </Recent>
            </ListRecent>
          </Body>
        </ContainerBody>
        <ModalHome />
      </MainContainer>
    </Background>
  );
};
