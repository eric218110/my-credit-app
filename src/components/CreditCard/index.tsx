import * as React from 'react';
import {
  Container,
  Flag,
  ContainerHeader,
  ContainerBottom,
  CardName,
  CardNumber,
  Balance,
  Content,
  Button,
  Edit,
} from './styles';
import { ViewStyle, TextStyle, FlexStyle } from 'react-native';

interface ICard {
  cardName: string;
  balance: string;
  cardNumber: string;
  flagIconName: string;
  backgroundCard?: string;
  color?: string;
}

interface IPropsCreditCard {
  style?: ViewStyle | TextStyle | FlexStyle;
  card: ICard;
}

const CreditCard = (
  { style, card, ...rest }: IPropsCreditCard,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref?: React.Ref<any>
): JSX.Element => {
  return (
    <Container
      backgroundColor={card.backgroundCard}
      style={style}
      {...rest}
      ref={ref}
    >
      <ContainerHeader>
        <CardName>{card.cardName}</CardName>
        <Button>
          <Edit />
        </Button>
      </ContainerHeader>
      <ContainerBottom>
        <Content>
          <CardNumber>{`* * * *  ${card.cardNumber}`}</CardNumber>
          <Balance>{`R$ ${card.balance}`}</Balance>
        </Content>
        <Content>
          <Flag name={card.flagIconName} />
        </Content>
      </ContainerBottom>
    </Container>
  );
};

export default React.forwardRef(CreditCard);
