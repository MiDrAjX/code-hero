import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  margin: 18px 0px 0 15px;

  width: 50px;
  height: 50px;
  background: #ffffff;
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
  color: #d42026;
`;
export const ButtonIcon = styled(Icon)`
  margin: 18px 30px 0 30px;
  color: #d42026;
  font-size: 60px;
`;

export const Separator = styled.View`
  width: 100%;
  height: 2px;
  background-color: #d42026;
`;
