import styled from "@emotion/styled";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Wrapper = styled.div`
  height: 600px;
  width: 100%;
  text-align: center;
  //
`;

const ImgSize = styled.img`
  height: 300px;
  margin: 0 auto;
  width: cover;
`;

const ImgWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-color: rgb(250, 249, 249);
  /* background-image: url("../../../recYellow.png"); */
`;

const ImgContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 100%;
`;

export default function LayoutBanner(): JSX.Element {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 1500,
    cssEase: "linear",
  };
  return (
    <Wrapper>
      <ImgWrapper>
        <Slider {...settings}>
          <ImgContainer>
            <ImgSize src="/r3.png"></ImgSize>
            <h4 style={{ color: "white" }}>YAMAHA</h4>
          </ImgContainer>
          <ImgContainer>
            <ImgSize src="/r6.png"></ImgSize>
            <h4 style={{ color: "white" }}>YAMAHA</h4>
          </ImgContainer>
          <ImgContainer>
            <ImgSize src="/r1.png"></ImgSize>
            <h4 style={{ color: "white" }}>YAMAHA</h4>
          </ImgContainer>
          <ImgContainer>
            <ImgSize src="/n400.png"></ImgSize>
            <h4 style={{ color: "white" }}>KAWASAKI</h4>
          </ImgContainer>
          <ImgContainer>
            <ImgSize src="/zx10r.png"></ImgSize>
            <h4 style={{ color: "white" }}>KAWASAKI</h4>
          </ImgContainer>
          <ImgContainer>
            <ImgSize src="/z900.png"></ImgSize>
            <h4 style={{ color: "white" }}>KAWASAKI</h4>
          </ImgContainer>
          <ImgContainer>
            <ImgSize src="/cbr600r.png"></ImgSize>
            <h4 style={{ color: "white" }}>HONDA</h4>
          </ImgContainer>
          <ImgContainer>
            <ImgSize src="/cbr1000rr.png"></ImgSize>
            <h4 style={{ color: "white" }}>HONDA</h4>
          </ImgContainer>
        </Slider>
      </ImgWrapper>
    </Wrapper>
  );
}
