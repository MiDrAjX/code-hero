import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  width: 100%;
  height: auto;
  background: #ffffff;
  padding: 18px;
  align-items: center;
`;

export const HeroName = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-size: 18px;
  color: #555;
  font-family: 'Roboto-Regular';
  width: 75%;
`;
export const CardImage = styled.Image`
  width: 75px;
  height: 75px;
  border-radius: 60px;
  background-color: #f0f0f5;
  margin-right: 20px;
`;
