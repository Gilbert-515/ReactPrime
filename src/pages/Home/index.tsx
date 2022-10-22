import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { ActivityIndicator, ScrollView } from 'react-native';
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
import { getListMovies, randomBanner } from '../../utils/movie';

import { useNavigation } from '@react-navigation/native';

export function Home() {
    const navigation = useNavigation<any>();

    const [nowMovies, setNowMovies] = useState<any>([]);
    const [popularMovies, setPopularMovies] = useState([]);
    const [topMovies, setTopMovies] = useState([]);
    const [bannerMovie, setBannerMovie] = useState<any>({});
    const [input, setInput] = useState('');

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let isActive = true;
        const abortController = new AbortController();

         async function getMovies() {    
            const [nowData, popularData, topData] = await Promise.all([
                api.get('/movie/now_playing'), 
                api.get('/movie/popular'),
                api.get('/movie/top_rated'),
            ]);

            if(isActive) {
                setNowMovies(getListMovies(10, nowData.data.results));
                setPopularMovies(getListMovies(6, popularData.data.results));
                setTopMovies(getListMovies(6, topData.data.results));
                setBannerMovie(getListMovies(10, nowData.data.results)[randomBanner(getListMovies(10, nowData.data.results))]);
                
                setLoading(false);
            }
        }
        getMovies();

        return () => {
            isActive = false;
            abortController.abort();
        }

    }, []);

    function navigateDetailPage(item: any) {
        navigation.navigate('Detail', { id: item.id });
    }

    function handleSearcMovie() {
        if(!input) return;

        navigation.navigate('Search', { name: input });
        setInput('');
    }

    if(loading) 
        return (
            <Container>
                <ActivityIndicator size={ 70 } style={{ marginTop: 50 }} color='#FFF'/>
            </Container>
        );
    
    return (
        <Container>
            <Header title='React Prime' />
            
            <SearchContainer>
                <Input 
                placeholder='Ex Batman' 
                placeholderTextColor='#DDD' 
                value={ input }
                onChangeText={(text: string) => setInput(text)}
                />

                <SearchButton onPress={ handleSearcMovie }>
                    <Feather name='search' size={ 30 } color='#FFF' />
                </SearchButton>
            </SearchContainer>

            <ScrollView showsVerticalScrollIndicator={ false }>
                <Title>Em Cartaz</Title>

                <BannerButton activeOpacity={ 0.9 } onPress={() => navigateDetailPage(bannerMovie)}>
                    <Banner 
                    resizeMethod='resize'
                    source={{ uri: `https://image.tmdb.org/t/p/original/${ bannerMovie.poster_path }`}} 
                    />
                </BannerButton>

                <SliderMovie
                horizontal={ true }
                showsHorizontalScrollIndicator={ false }
                data={ nowMovies }
                renderItem={({ item }: any) => <SliderItem data={ item } navigatePage={ () => navigateDetailPage(item) } /> }
                keyExtractor={ (item: any) => String(item.id) }
                />

                <Title>Populares</Title>

                <SliderMovie
                horizontal={ true }
                showsHorizontalScrollIndicator={ false }
                data={ popularMovies }
                renderItem={({ item }: any) => <SliderItem data={ item } navigatePage={ () => navigateDetailPage(item) } /> }
                keyExtractor={ (item: any) => String(item.id) }
                />

                <Title>Mais Votados</Title>

                <SliderMovie
                horizontal={ true }
                showsHorizontalScrollIndicator={ false }
                data={ topMovies }
                renderItem={({ item }: any) => <SliderItem data={ item } navigatePage={ () => navigateDetailPage(item) } /> }
                keyExtractor={ (item: any) => String(item.id) }
                />
            </ScrollView>
        </Container>
    );
}