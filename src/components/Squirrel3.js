import React from "react";
import styled from "styled-components";

import squirrel3 from "../assets/images/squirrel3.gif";

const Container = styled.div`
  position: absolute;
  bottom: 200px;
  left: -50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Squirrel3Container = styled.div`
  width: 400px;
  height: 400px;
  background-image: url(${squirrel3});
  background-size: cover;
`;

function Squirrel3() {
  return (
    <Container>
      <Squirrel3Container></Squirrel3Container>
    </Container>
  );
}

export default Squirrel3;
