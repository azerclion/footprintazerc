import React from "react";
import Carousel from "better-react-carousel";
import styled from "styled-components";

const Container = styled.div`
  width: 280px;
  height: 250px;
  position: absolute;
  top: 400px;
  left: 1120px;
`;

const Gallery = () => {
  return (
    <Container>
      <Carousel cols={1} rows={1} gap={10} loop>
        <Carousel.Item>
          <img
            src="https://iili.io/HK6cDE7.png"
            style={{ width: "280px", height: "250px" }}
            alt="pic"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://iili.io/HK6lZAJ.png"
            style={{ width: "280px", height: "250px" }}
            alt="pic"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://iili.io/HK6039s.png"
            style={{ width: "280px", height: "250px" }}
            alt="pic"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://picsum.photos/280/250?random=4" alt="pic" />
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://picsum.photos/280/250?random=5" alt="pic" />
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://picsum.photos/280/250?random=6" alt="pic" />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default Gallery;
