import React from 'react';
import { Container, Name } from './styles';

interface GenresProps {
  name: string;
}

export function Genres({ name }: GenresProps) {
  return (
    <Container>
      <Name>{ name }</Name>
    </Container>
  );
}