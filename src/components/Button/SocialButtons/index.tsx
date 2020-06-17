import * as React from 'react';
import { Button } from '../Buttons';
import { Text, Content, ContentIcon, CircleIcon, Gmail } from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

interface IProps {
  text: string;
}

export const ButtonFacebook: React.FC<IProps> = ({ text }: IProps) => {
  return (
    <Button backgroundColor={'#415693'}>
      <Content>
        <Text>{text}</Text>
        <ContentIcon backgroundColor={'#152555'}>
          <CircleIcon>
            <FontAwesome name={'facebook'} color={'#415693'} size={32} />
          </CircleIcon>
        </ContentIcon>
      </Content>
    </Button>
  );
};

export const ButtonEmail: React.FC<IProps> = ({ text }: IProps) => {
  return (
    <Button backgroundColor={'#4F9155'}>
      <Content>
        <Text>{text}</Text>
        <ContentIcon backgroundColor={'#2F6834'}>
            <Feather name={'mail'} color={'#FFF'} size={32} />
        </ContentIcon>
      </Content>
    </Button>
  );
};

export const ButtonGmail: React.FC<IProps> = ({ text }: IProps) => {
  return (
    <Button backgroundColor={'#5885E4'}>
      <Content>
        <Text>{text}</Text>
        <ContentIcon backgroundColor={'#1976D2'}>
          <CircleIcon>
            <Gmail source={require('../../../assets/icons/icons_google.png')} />
          </CircleIcon>
        </ContentIcon>
      </Content>
    </Button>
  );
};
