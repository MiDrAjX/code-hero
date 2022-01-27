import React from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import * as S from './styles';

const MAX_ITEMS = 3;
const MAX_LEFT = (MAX_ITEMS - 1) / 2;

function HeroFooter({total, offset, setOffset}) {
  const limit = 4;
  // eslint-disable-next-line prettier/prettier
  const current = offset ? (offset / limit) + 1 : 1;
  const pages = Math.ceil(total / limit);
  const first = Math.max(current - MAX_LEFT, 1);

  function onPageChange(page) {
    setOffset((page - 1) * limit);
  }
  return (
    <S.Container>
      <TouchableOpacity
        onPress={() => onPageChange(current - 1)}
        disabled={current === 1}>
        <S.ButtonIcon name={'arrow-left'} />
      </TouchableOpacity>
      {Array.from({length: Math.min(MAX_ITEMS, pages)})
        .map((_, index) => index + first)
        .map(page => (
          <S.Button onPress={() => onPageChange(page)} key={page}>
            <S.TextCard>{page}</S.TextCard>
          </S.Button>
        ))}
      <TouchableOpacity
        onPress={() => onPageChange(current + 1)}
        disabled={current === pages}>
        <S.ButtonIcon name={'arrow-right'} />
      </TouchableOpacity>
    </S.Container>
  );
}

export default HeroFooter;
