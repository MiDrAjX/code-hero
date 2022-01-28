import styled from 'styled-components/native';

import Icon from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #ffffff;
`;
export const TitleWrapper = styled.View`
  width: 90%;
  flex-direction: row;
  margin: 12px 0;
`;
export const Title = styled.Text`
  color: #d42026;
  font-size: 16px;
  font-family: 'Roboto-Light';
`;
export const TitleBlack = styled(Title)`
  font-family: 'Roboto-Black';
`;
export const TextWhite = styled(Title)`
  right: 60px;
  color: #ffffff;
  font-family: 'Roboto-Regular';
`;
export const TitleLine = styled.View`
  background-color: #d42026;
  height: 2px;
  width: 53px;
  position: absolute;
  top: 20px;
`;

export const HeaderList = styled.View`
  width: 100%;
  height: 50px;
  background-color: #d42026;
  justify-content: center;
  align-items: center;
`;
export const ContainerLista = styled.View`
  width: 90%;
  height: 40px;
  flex-direction: row;
  align-items: center;
  background: #ffffff;
  border-radius: 6px;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
  elevation: 5;
  margin: 4px 0 12px;
  padding: 0 15px;
`;
export const InputTextLista = styled.TextInput`
  flex: 1;
  color: #222222;
  font-size: 16px;
  font-family: 'Roboto-Regular';
  left: 5px;
  top: 1px;
`;

export const FlatListCharacters = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  width: 100%;
  align-content: center;
`;

export const Separator = styled.View`
  width: 100%;
  height: ${props => (props.size ? props.size : 1)}px;
  background-color: #d42026;
`;

export const ButtonIcon = styled(Icon)`
  color: #1e2047;
  font-size: 20px;
`;

export const ActivityIndicator = styled.ActivityIndicator``;

export const ContainerLoad = styled.View`
  flex: 1;
  justify-content: center;
`;
export const ContentError = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin: 20px 10px;
`;
