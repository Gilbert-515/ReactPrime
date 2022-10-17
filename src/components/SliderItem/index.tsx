import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Container, BannerItem, Rate, RateContainer, Title } from './styles';

interface SlideritemProps {
  data: {
    poster_path: string;
    title: string;
    vote_average: string;
  },
  navigatePage: () => void
}

export function SliderItem({ data, navigatePage }: SlideritemProps) {
  return (
    <Container activeOpacity={ 0.7 } onPress={ navigatePage }>
      <BannerItem
      source={{ uri: `https://image.tmdb.org/t/p/original/${ data.poster_path }` }}
      />

      <Title numberOfLines={ 1 }>{ data.title }</Title>

      <RateContainer>
        <Ionicons name='md-star' size={ 12 } color='#E7A74E' />
        <Rate>{ data.vote_average }/10</Rate>
      </RateContainer>
    </Container>
  );
}