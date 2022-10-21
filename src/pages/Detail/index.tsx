import React, { useEffect, useState } from 'react';
import { 
  Container, 
  Header, 
  HeaderButton, 
  Banner, 
  ButtonLink, 
  Title, 
  ContentArea, 
  Rate,
  ListGenres,
  Description
} from './styles';
import Stars from 'react-native-stars'
import { Feather, Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { api } from '../../services/api';
import { ActivityIndicator, ScrollView, Modal } from 'react-native';
import { Genres, ModalLink } from '../../components';

export function Detail() {
  const navigation = useNavigation();
  const route = useRoute<any>();

  const [movie, setMovie] = useState<any>();
  const [openLink, setOpenLink] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isActive = true;

    async function getMovie() {
      const response = await api.get(`/movie/${ route.params?.id }`);

      if(isActive){ 
        setMovie(response.data);
        setLoading(false);
      }
    }

    if(isActive) getMovie();
    
    return () => { isActive = false; }
    
  }, []);

  if(loading){
    return (
      <Container>
          <ActivityIndicator size={ 70 } style={{ marginTop: 50 }} color='#FFF'/>
      </Container>
  );
  }

  return (
    <Container>
      <Header>
        <HeaderButton activeOpacity={ 0.7 } onPress={() => navigation.goBack()}>
          <Feather
          name='arrow-left'
          size={ 28 }
          color='#FFF'
          />
        </HeaderButton>
        <HeaderButton activeOpacity={ 0.7 }>
          <Ionicons
          name='bookmark'
          size={ 28 }
          color='#FFF'
          />
        </HeaderButton>
      </Header>

      <Banner
      resizeMethod='resize'
      source={{ uri: `https://image.tmdb.org/t/p/original/${ movie.poster_path }` }}
      />

      <ButtonLink activeOpacity={ 0.7 } disabled={ !Boolean(movie.homepage) } onPress={() => setOpenLink(true)}>
        <Feather
        name='link'
        size={ 24 }
        color='#FFF'
        />
      </ButtonLink>

      <Title numberOfLines={ 2 }>{ movie.title }</Title>

      <ContentArea>
        <Stars
          default={ movie.vote_average }
          count={ 10 }
          half={ true }
          startSize={ 20 }
          fullStar={ <Ionicons name='md-star' size={ 24 } color='#E7A74E' /> }
          emptyStar={ <Ionicons name='md-star-outline' size={ 24 } color='#E7A74E' />  }
          halfStar={ <Ionicons name='md-star-half' size={ 24 } color='#E7A74E' />  }
          disabled={ true }
        />
        <Rate>{ movie.vote_average.toFixed(1) }/10</Rate>
      </ContentArea>

      <ListGenres
      style={{ marginTop: 15 }}
      data={ movie?.genres }
      horizontal={ true }
      showsHorizontalScrollIndicator={ false }
      keyExtractor={(item: any) => String(item.id)}
      renderItem={({ item }: any) => <Genres name={ item.name }/>}
      />

      <ScrollView showsVerticalScrollIndicator={ false }>
        <Title>Descrição</Title>

        <Description>
          { movie?.overview }
        </Description>
      </ScrollView>

      <Modal style={{ backgroundColor: '#DDD' }} animationType='slide' transparent visible={ openLink }>
        <ModalLink 
        link={ movie?.homepage }
        title={ movie?.title }
        closeModal={() => setOpenLink(false)}
        />
      </Modal>

    </Container>
  );
}