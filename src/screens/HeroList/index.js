import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import Characters from '../../services/Characters';
import HeroCard from './components/HeroCard';
import HeroFooter from './components/HeroFooter';
import * as S from './styles';
// 8309093bf2dfe4705a39661f8e9da75a

//private 179c2c9d374119ee24546295fa9c98af38c7df60

function HeroList() {
  const [characters, setCharacters] = useState([]);
  const [searchCharacter, setSearchCharacter] = useState([]);
  const [offset, setOffset] = useState(0);
  const [search, setSearch] = useState('');

  async function fetchCharacters(count = 0) {
    const response = await Characters.getCharacters(count);
    console.log(response);
    if (!response.ok) {
      return;
    }
    setCharacters(response.data);
  }
  async function searchCharacters(name = search, index = offset) {
    const response = await Characters.showCharacter(name, index);
    console.log(response);
    if (!response.ok) {
      return;
    }
    setSearchCharacter(response.data.data);
  }

  const memoizedTotal = useMemo(() => characters.total, [characters]);
  useEffect(() => {
    if (search !== '') {
      return searchCharacters(search, offset);
    }
    fetchCharacters(offset);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offset, search]);
  return (
    <S.Container>
      <S.TitleWrapper>
        <S.TitleBlack>BUSCA MARVEL</S.TitleBlack>
        <S.TitleLine />
        <S.Title>TESTE FRONT-END</S.Title>
      </S.TitleWrapper>
      <View>
        <S.Title>Nome do Personagem</S.Title>

        <S.ContainerLista>
          <TouchableOpacity onPress={searchCharacters}>
            <S.ButtonIcon name="search" />
          </TouchableOpacity>
          <S.InputTextLista
            keyboardAppearance="light"
            placeholderTextColor="#959595"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Busque por um personagem"
            onSubmitEditing={searchCharacters}
            onChangeText={e => setSearch(e)}
          />
        </S.ContainerLista>
      </View>
      <S.HeaderList>
        <S.TextWhite>Nome</S.TextWhite>
      </S.HeaderList>
      {search === '' ? (
        <>
          <S.FlatListCharacters
            data={characters.results}
            keyExtractor={item => String(item.id)}
            renderItem={({item}) => <HeroCard item={item} />}
            ItemSeparatorComponent={() => <S.Separator />}
            ListFooterComponent={() => (
              <HeroFooter
                total={memoizedTotal}
                offset={offset}
                setOffset={setOffset}
              />
            )}
          />
        </>
      ) : (
        <>
          <S.FlatListCharacters
            data={searchCharacter.results}
            keyExtractor={item => String(item.id)}
            renderItem={({item}) => <HeroCard item={item} />}
            ItemSeparatorComponent={() => <S.Separator />}
            ListFooterComponent={() => (
              <HeroFooter
                total={searchCharacter.total}
                offset={offset}
                setOffset={setOffset}
              />
            )}
          />
        </>
      )}
    </S.Container>
  );
}

export default HeroList;
