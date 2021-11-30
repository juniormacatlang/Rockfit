import React from "react";
import styled from "styled-components";

export default function Empty() {
  return (
    <ComponentContainer>
      <EmptyText>Add Goals!</EmptyText>
      <EmptyImage
        source={require('../assets/empty.png')}
      />
      
    </ComponentContainer>
  );
}

const ComponentContainer = styled.View`
  align-items: center;

  height: 650px;
`;

const EmptyImage = styled.Image`
  width: 350px;
  height: 300px;
`;

const EmptyText = styled.Text`
  color: white;
  
  margin-top: 30px;
  font-size: 30px;
`;
//font-family: poppins-bold;