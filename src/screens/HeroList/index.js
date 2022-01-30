import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {Keyboard, TouchableWithoutFeedback, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import Characters from '../../services/Characters';

import HeroCard from './components/HeroCard';
import HeroFooter from './components/HeroFooter';

import * as S from './styles';

function HeroList() {
  const [characters, setCharacters] = useState([]);
  const [searchCharacter, setSearchCharacter] = useState([]);
  const [offset, setOffset] = useState(0);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  async function fetchCharacters(count = 0) {
    const response = await Characters.getCharacters(count);

    if (!response.ok) {
      setError(true);
      return;
    }
    setCharacters(response.data);
    setError(false);
    setLoading(false);
  }
  async function searchCharacters(name = search, index = offset) {
    const response = await Characters.showCharacter(name, index);

    if (!response.ok) {
      setError(true);
      return;
    }
    if (response.data.data.count === 0) {
      setOffset(0);
    }
    setError(false);
    setSearchCharacter(response.data.data);
  }

  const memoizedTotal = useMemo(() => characters.total, [characters]);

  const renderEmptyList = useCallback(() => {
    return (
      <S.ContentError>
        <S.Title>Ainda não há resultados, submeter para pesquisar</S.Title>
      </S.ContentError>
    );
  }, []);

  const renderError = useCallback(() => {
    return (
      <S.ContentError>
        <S.Title>
          Houve algum erro na requisição, Favor reiniciar o app e conferir
          conexão{' '}
        </S.Title>
      </S.ContentError>
    );
  }, []);

  useEffect(() => {
    if (search !== '') {
      searchCharacters(search, offset);
    }
    fetchCharacters(offset);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offset]);
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <S.Container>
        <S.TitleWrapper>
          <S.TitleBlack>BUSCA MARVEL</S.TitleBlack>
          <S.TitleLine />
          <S.Title>TESTE FRONT-END</S.Title>
        </S.TitleWrapper>
        <View>
          <S.Title>Nome do Personagem</S.Title>
          <S.ContainerInput>
            <TouchableOpacity onPress={searchCharacters}>
              <S.ButtonIcon name="search" />
            </TouchableOpacity>
            <S.InputText
              keyboardAppearance="light"
              placeholderTextColor="#959595"
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="Busque por um personagem"
              onSubmitEditing={() => searchCharacters()}
              onBlur={() => searchCharacters()}
              onChangeText={e => setSearch(e)}
            />
          </S.ContainerInput>
        </View>
        <S.HeaderList>
          <S.TextWhite>Nome</S.TextWhite>
        </S.HeaderList>
        {loading ? (
          <S.ContainerLoad>
            <S.ActivityIndicator color={'#d42026'} size={50} />
          </S.ContainerLoad>
        ) : error ? (
          renderError()
        ) : (
          <S.FlatListCharacters
            data={search === '' ? characters.results : searchCharacter.results}
            keyExtractor={item => String(item.id)}
            renderItem={({item}) => <HeroCard item={item} />}
            ItemSeparatorComponent={() => <S.Separator />}
            ListEmptyComponent={renderEmptyList}
          />
        )}

        <S.Separator />
        <HeroFooter
          total={search === '' ? memoizedTotal : searchCharacter.total}
          offset={offset}
          setOffset={setOffset}
        />
        <S.Separator size={10} />
      </S.Container>
    </TouchableWithoutFeedback>
  );
}

export default HeroList;

