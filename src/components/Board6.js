import React from "react";
import styled from "styled-components";

import board6 from "../assets/images/board6.png";

const Container = styled.div`
  position: absolute;
  top: 300px;
  left: 1100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Board6Container = styled.div`
  width: 340px;
  height: 340px;
  background-image: url(${board6});
  background-size: cover;
`;

function Board6() {
  return (
    <Container>
      <Board6Container></Board6Container>
    </Container>
  );
}

export default Board6;
