import React from 'react';
import { Container, Banner, Title, RateContainer, Rate } from './styles';
import { Ionicons } from '@expo/vector-icons';

interface SearchItemProps {
  data: {
    poster_path: string,
    title: string,
    vote_average: number,
    release_date: Date
  },
  navigatePage: () => void;
}

export function SearchItem({ data, navigatePage }: SearchItemProps) {

  function detailMovie() {
    if(!data.release_date) {
      alert('Filme ainda sem data');
      return;
    }

    navigatePage();
  }

  return (
    <Container activeOpacity={ 0.7 } onPress={ detailMovie }>
      <Banner 
      resizeMethod='resize'
      source={ 
        data?.poster_path ?
        { uri: `https://image.tmdb.org/t/p/original/${ data.poster_path }` } :
        require('../../assets/movie_not_image.jpg') 
      }
      />

      <Title numberOfLines={ 1 }>{ data?.title }</Title>

      <RateContainer>
        <Ionicons name='md-star' size={ 12 } color='#E7A74E' />
        <Rate>{ data?.vote_average.toFixed(1) }/10</Rate>
      </RateContainer>

    </Container>
  );
}