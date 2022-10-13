import React from 'react';
import { Feather } from '@expo/vector-icons';
import { Container, MenuButton, Title } from './styles';
import { useNavigation, DrawerActions } from '@react-navigation/native';

interface HeaderProps {
    title: string;
}

export function Header({ title }: HeaderProps) {
    const navigation = useNavigation();

    return (
        <Container>
            <MenuButton onPress={() => navigation.dispatch(DrawerActions.openDrawer())}> 
                <Feather name='menu' color='#FFF' size={ 36 }/>
            </MenuButton>
            <Title>{ title }</Title>
        </Container>
    );
}