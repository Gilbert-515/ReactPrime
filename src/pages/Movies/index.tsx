import React, { useState, useEffect } from 'react';
import { Container, ListMovies, Message, MessageContainer } from './styles';
import { FavoriteItem, Header } from '../../components';
import { deleteMovie, getMoviesSave } from '../../utils/storage';
import { useNavigation, useIsFocused } from '@react-navigation/native';

export function Movies() {
    const navigation = useNavigation<any>();
    const isFocused = useIsFocused();

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        let isActive = true;

        async function getFavoriteMovies() {
            const response = await getMoviesSave('@primereact');

            if(isActive) setMovies(response); 
        }

        if(isActive) getFavoriteMovies();

        return () => { isActive = false }

    }, [isFocused]);

    async function handleDelete(id: string) {
        const response = await deleteMovie(id);
        setMovies(response);
    }

    function navigationDetailPage(item: any) {
        navigation.navigate('Detail', { id: item.id })
    }

    return (
        <Container>
            <Header title='Meus Filmes'/>

            { movies.length === 0 ?
                <MessageContainer>
                    <Message> Sem filmes salvos </Message>
                </MessageContainer>
                :
                <ListMovies
                  showsVerticalScrollIndicator={ false }
                  data={ movies }
                  keyExtractor={(item: any) => String(item.id)}
                  renderItem={({ item }: any) => <FavoriteItem data={ item } deleteMovie={() => handleDelete(item.id)} navigatePage={() => navigationDetailPage(item)} />}
                />
            }
        </Container>
    );
}