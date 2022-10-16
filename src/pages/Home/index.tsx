import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { ScrollView } from 'react-native';
import { 
    Banner, 
    BannerButton, 
    Container, 
    Input, 
    SearchButton, 
    SearchContainer, 
    Title,
    SliderMovie 
} from './styles';
import { Header, SliderItem } from '../../components';
import { api } from '../../services/api';
import { getListMovies } from '../../utils/movie';

export function Home() {

    const [nowMovies, setNowMovies] = useState([]);
    const [popularMovies, setPopularMovies] = useState([]);
    const [topMovies, setTopMovies] = useState([]);

    useEffect(() => {
         async function getMovies() {    
            const [nowData, popularData, topData] = await Promise.all([
                api.get('/movie/now_playing'), 
                api.get('/movie/popular'),
                api.get('/movie/top_rated'),
            ]);

            setNowMovies(getListMovies(10, nowData.data.results));
            setPopularMovies(getListMovies(5, popularData.data.results));
            setTopMovies(getListMovies(5, topData.data.results));
        }
        getMovies();

    }, []);

    return (
        <Container>
            <Header title='React Prime' />
            
            <SearchContainer>
                <Input placeholder='Ex Batman' placeholderTextColor='#DDD' />

                <SearchButton>
                    <Feather name='search' size={ 30 } color='#FFF' />
                </SearchButton>
            </SearchContainer>

            <ScrollView showsVerticalScrollIndicator={ false }>
                <Title>Em Cartaz</Title>

                <BannerButton activeOpacity={ 0.9 } onPress={() => {}}>
                    <Banner 
                    resizeMethod='resize'
                    source={{ uri: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80' }}
                    />
                </BannerButton>

                <SliderMovie
                horizontal={ true }
                showsHorizontalScrollIndicator={ false }
                data={ nowMovies }
                renderItem={({ item }: any) => <SliderItem data={ item } /> }
                keyExtractor={ (item: any) => String(item.id) }
                />

                <Title>Populares</Title>

                <SliderMovie
                horizontal={ true }
                showsHorizontalScrollIndicator={ false }
                data={ popularMovies }
                renderItem={({ item }: any) => <SliderItem data={ item } /> }
                keyExtractor={ (item: any) => String(item.id) }
                />

                <Title>Mais Votados</Title>

                <SliderMovie
                horizontal={ true }
                showsHorizontalScrollIndicator={ false }
                data={ topMovies }
                renderItem={({ item }: any) => <SliderItem data={ item } /> }
                keyExtractor={ (item: any) => String(item.id) }
                />
            </ScrollView>
        </Container>
    );
}