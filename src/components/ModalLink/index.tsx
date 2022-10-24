import React from 'react';
import { BackButton, Name } from './styles';
import { Feather } from '@expo/vector-icons';
import { WebView } from 'react-native-webview';

interface ModalLinkProps {
  link: string;
  title: string;
  closeModal: () => void;
}

export function ModalLink({ link, title, closeModal  }: ModalLinkProps) {
  return (
    <>
      <BackButton onPress={ closeModal }>
        <Feather name='x' size={ 35 } color='#FFF' />
        <Name numberOfLines={ 1 }>{ title }</Name>
      </BackButton>
      
      <WebView
        source={{ uri: link }}
      />
    </>
  );
}