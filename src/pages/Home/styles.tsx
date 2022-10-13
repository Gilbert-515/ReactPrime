import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    background-color: #141A29;
    flex: 1;
`;

export const SearchContainer = styled.View`
    flex-direction: row;
    width: 100%;
    height: 50px;
    align-items: center;
    padding: 0 14px;
    margin-bottom: 8px;
`;

export const SearchButton = styled.TouchableOpacity`
    width: 15%;
    height: 50px;
    align-items: center;
    justify-content: center;
`;

export const Input = styled.TextInput`
    background-color: rgba(255, 255, 255, 0.4);
    width: 85%;
    height: 50px;
    border-radius: 10px;
    padding: 8px 15px;
    font-size: 18px;
    color: #FFF;
`;

export const Title = styled.Text`
    padding: 20px 14px 8px 14px;
    font-size: 24px;
    font-weight: bold;
    color: #FFF;
`;

export const BannerButton = styled.TouchableOpacity`

`;

export const Banner = styled.Image`
    height: 150px;
    border-radius: 6px;
    margin: 0 14px;
`;