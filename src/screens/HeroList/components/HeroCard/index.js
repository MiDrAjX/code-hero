import React, {useCallback} from 'react';
import {useNavigation} from '@react-navigation/core';

import * as S from './styles';

function HeroCard({item}) {
  const navigation = useNavigation();

  const handleCharacterListAcess = useCallback(() => {
    navigation.navigate('CharacterOverView', {item});
  }, [navigation, item]);

  const image = item.thumbnail.path + '.' + item.thumbnail.extension;
  return (
    <S.Container onPress={() => handleCharacterListAcess()}>
      <S.CardImage source={{uri: image}} resizeMode="cover" />
      <S.HeroName>{item.name}</S.HeroName>
    </S.Container>
  );
}

export default HeroCard;
