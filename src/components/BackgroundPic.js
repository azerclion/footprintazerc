import React from "react";
import styled, { keyframes } from "styled-components";

import Background from "../assets/images/backgroundimage.png";

import PetDog from "./PetDog";
import Board6 from "./Board6";
import Jincat from "./Jincat";
import Squirrel3 from "./Squirrel3";
import Twitterbird from "./Twitterbird";
import Gallery from "./Carousel";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const OutlineAni = keyframes`
0% {
  border-radius: 68% 32% 48% 52% / 39% 60% 40% 61%;
}
50%{
  border-radius: 76% 24% 20% 80% / 62% 32% 68% 38% ;
}
100% {
  border-radius: 68% 32% 48% 52% / 39% 60% 40% 61%;
}
`;

const BackContainer = styled.div`
  width: 1920px;
  height: 1080px;
  position: relative;
  background-image: url(${Background});
  background-size: cover;
  background-color: teal;
  animation: ${OutlineAni} 4s linear infinite;
`;

function BackgroundPic() {
  return (
    <Container>
      <BackContainer>
        <PetDog></PetDog>
        <Board6></Board6>
        <Jincat></Jincat>
        <Squirrel3></Squirrel3>
        <Twitterbird></Twitterbird>
        <Gallery></Gallery>
      </BackContainer>
    </Container>
  );
}

export default BackgroundPic;
