import React from 'react';
import { Feather } from '@expo/vector-icons';
import { ScrollView } from 'react-native';
import { 
    Banner, 
    BannerButton, 
    Container, 
    Input, 
    SearchButton, 
    SearchContainer, 
    Title 
} from './styles';
import { Header } from '../../components';

export function Home() {
    return (
        <Container>
            <Header title='React Prime' />
            
            <SearchContainer>
                <Input placeholder='Ex Batman' placeholderTextColor='#DDD' />

                <SearchButton>
                    <Feather name='search' size={ 30 } color='#FFF' />
                </SearchButton>
            </SearchContainer>

            <ScrollView>
                <Title>Em Cartaz</Title>

                <BannerButton activeOpacity={ 0.9 } onPress={() => alert('teste')}>
                    <Banner 
                    resizeMethod='resize'
                    source={{ uri: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80' }}
                    />
                </BannerButton>
            </ScrollView>
        </Container>
    );
}