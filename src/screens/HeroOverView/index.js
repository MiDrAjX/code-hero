import React, {useCallback} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Linking, View} from 'react-native';
import * as S from './styles';

function HeroOverView() {
  const route = useRoute('CharacterOverView');
  const {item} = route.params;
  const image = item.thumbnail.path + '.' + item.thumbnail.extension;

  const navigation = useNavigation();

  const handleReturn = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const handleGoogle = useCallback(async searchName => {
    Linking.openURL(`https://www.google.com/search?q=${searchName}+marvel`);
  }, []);

  return (
    <S.Container>
      <S.CharacterImage source={{uri: image}} resizeMode="cover" />
      <S.ReturnButton onPress={() => handleReturn()}>
        <S.ReturnButtonIcon name="arrow-left" />
      </S.ReturnButton>
      <S.CharacterInfo>
        <S.CharacterTitle>{item.name}</S.CharacterTitle>
        <View>
          <S.CharacterSubTitle>
            {item.description ||
              'Sem descrição atualmente, para mais informações clique no botão abaixo'}
          </S.CharacterSubTitle>
        </View>
      </S.CharacterInfo>
      <S.Footer onPress={() => handleGoogle(item.name)}>
        <S.FooterText>Buscar no Google</S.FooterText>
      </S.Footer>
    </S.Container>
  );
}

export default HeroOverView;
