import React, { useState, useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ActivityIndicator } from 'react-native';
import { SearchItem } from '../../components';
import { Container, ListMovies } from './styles';
import { api } from '../../services/api';

export function Search() {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();

  const [movies, setMovies] = useState<any>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isActive = true;

    async function getSearchMovie() {
      const response = await api.get(`/search/movie`, {
        params: {
          query: route.params.name
        }
      });

      if(isActive){
        setMovies(response.data.results);
        setLoading(false);
      }
    }

    if(isActive) getSearchMovie();
    
    return () => {
      isActive = false;
    }
  }, []);

  function navigateDetailPage(item: any) {
    navigation.navigate('Detail', { id: item.id });
  }

  if(loading)
    return (
      <Container>
        <ActivityIndicator size={ 70 } style={{ marginTop: 50 }} color='#FFF'/>
      </Container>
    )

  return (
    <Container>
      <ListMovies 
        data={ movies }
        showsVerticalScrollIndicator={ false }
        keyExtractor={(item: any) => String(item.id)}
        renderItem={ ({ item }: any) => <SearchItem data={ item } navigatePage={() => navigateDetailPage(item)}/> }
      />
    </Container>
  );
}