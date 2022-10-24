import React from 'react';
import { ActionContainer, Container, DeleteButton, DetailButton, Rate, RateContainer, Title } from './styles';
import { Ionicons, Feather } from '@expo/vector-icons';

interface FavoriteItemProps {
  data: {
    title: string;
    vote_average: number;
  },
  deleteMovie: () => void;
  navigatePage: () => void;
}

export function FavoriteItem({ data, deleteMovie, navigatePage }: FavoriteItemProps) {
  return (
    <Container>
      <Title size={ 22.5 }>{ data.title }</Title>

      <RateContainer>
        <Ionicons name='md-star' size={ 12 } color='#E7A74E' />
        <Rate>{ data.vote_average.toFixed(1) }/10</Rate>
      </RateContainer>

      <ActionContainer>
        <DetailButton activeOpacity={ 0.7 } onPress={ navigatePage }>
          <Title size={ 14 }>Ver Detalhes</Title>
        </DetailButton>

        <DeleteButton onPress={ deleteMovie }>
          <Feather name='trash' size={ 24 } color='#FFF' />        
        </DeleteButton>
      </ActionContainer>
    </Container>
  );
}