import React from "react";
import styled from "styled-components";

import jincat from "../assets/images/jincat.png";

const Container = styled.div`
  position: absolute;
  top: 400px;
  left: 1165px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const JincatContainer = styled.div`
  width: 220px;
  height: 220px;
  background-image: url(${jincat});
  background-size: cover;
`;

function Jincat() {
  return (
    <Container>
      <JincatContainer></JincatContainer>
    </Container>
  );
}

export default Jincat;
