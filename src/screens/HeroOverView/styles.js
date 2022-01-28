import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  background-color: #f0f0f5;
`;
export const CharacterInfo = styled.View`
  flex: 1;
  margin-top: -30px;
  padding: 15px 25px;
  background: #f0f0f5;
  align-items: flex-start;
`;
export const CharacterTitle = styled.Text`
  font-family: 'Roboto-SemiBold';
  font-size: 24px;
  line-height: 36px;
  color: #333333;
  width: 90%;
`;
export const CharacterSubTitle = styled.Text`
  max-width: 100%;
  font-family: 'Roboto-Regular';
  font-size: 16px;
  line-height: 24px;
  color: #333333;
`;
export const CharacterImage = styled.Image`
  margin-bottom: 11px;
  width: 100%;
  height: 437px;
  left: 0px;
  top: 0px;
`;
export const ViewRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
export const ReturnButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 999;
  top: 15px;
  left: 15px;
  height: 50px;
  width: 50px;
  background: #d42026;
  border-radius: 25px;
`;
export const ReturnButtonIcon = styled(Icon)`
  margin-left: 3px;
  color: #ffffff;
  font-size: 26px;
`;
export const Footer = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
  height: 56px;
  background-color: #d42026;
`;
export const FooterText = styled.Text`
  margin-left: 16px;
  font-size: 20px;
  font-family: 'Roboto-SemiBold';
  line-height: 33px;
  text-align: center;
  color: #e1e1e6;
`;
