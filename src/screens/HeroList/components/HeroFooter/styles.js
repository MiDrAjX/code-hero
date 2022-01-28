import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.View`
  margin: 15px 0
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  margin: 0 7.5px;

  width: 50px;
  height: 50px;
  background: ${({selectedColor}) => (selectedColor ? '#d42026' : '#ffffff')};
  border: 2px solid #d42026;
  border-radius: 50px;
  justify-content: center;
  align-self: center;
  align-items: center;
`;
export const TextCard = styled.Text`
  top: 3px;
  font-size: 20px;
  font-weight: 600;
  line-height: 19px;
  color: ${({selectedColor}) => (selectedColor ? '#ffffff' : '#d42026')}; ;
`;
export const ButtonIcon = styled(Icon)`
  top: 0px;
  color: #d42026;
  font-size: 60px;
`;

export const Separator = styled.View`
  width: 100%;
  height: 2px;
  background-color: #d42026;
`;
