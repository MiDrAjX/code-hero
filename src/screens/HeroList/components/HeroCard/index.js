import React from 'react';

import * as S from './styles';

function HeroCard({item}) {
  const image = item.thumbnail.path + '.' + item.thumbnail.extension;
  return (
    <S.Container>
      <S.CardImage source={{uri: image}} resizeMode="cover" />
      <S.HeroName>{item.name}</S.HeroName>
    </S.Container>
  );
}

export default HeroCard;
