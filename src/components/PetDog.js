import React from "react";
import styled from "styled-components";

import Petdog from "../assets/images/petdog.gif";

const Container = styled.div`
  position: absolute;
  bottom: 100px;
  left: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const PetContainer = styled.div`
  width: 440px;
  height: 440px;
  background-image: url(${Petdog});
  background-size: cover;
`;

function PetDog() {
  return (
    <Container>
      <PetContainer></PetContainer>
    </Container>
  );
}

export default PetDog;
