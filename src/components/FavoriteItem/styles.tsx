import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 14px;
`;

export const Title = styled.Text`
  color: #FFF;
  font-size: ${({ size }: any) => size }px;
  font-weight: bold;
`;

export const RateContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 12px 0;
`;

export const Rate = styled.Text`
  color: #FFF;
  font-size: 13px;
  padding-left: 4px;
`;

export const ActionContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const DetailButton = styled.TouchableOpacity`
  width: 85%;
  height: 30px;
  background-color: #e72f48;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
`;

export const DeleteButton = styled.TouchableOpacity`
  width: 15%;
  height: 30px;
  justify-content: center;
  align-items: center;
`;
