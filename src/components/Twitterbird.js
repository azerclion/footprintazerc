import React from "react";
import styled from "styled-components";

import twitterbird from "../assets/images/twitterbird.png";

const Container = styled.div`
  position: absolute;
  top: 150px;
  left: 1130px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    top: 50px;
  }
`;
const TwitterbirdContainer = styled.div`
  width: 150px;
  height: 150px;
  background-image: url(${twitterbird});
  background-size: cover;
  cursor: pointer;
  &:hover {
    width: 250px;
    height: 250px;
  }
`;

function Twitterbird() {
  return (
    <Container>
      <TwitterbirdContainer></TwitterbirdContainer>
    </Container>
  );
}

export default Twitterbird;
