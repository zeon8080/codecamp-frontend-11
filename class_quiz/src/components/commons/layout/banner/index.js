import styled from "@emotion/styled";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Wrapper = styled.div`
  height: 300px;
  background-color: #efc851;

  text-align: center;
`;

const ImgSize = styled.img`
  height: 200px;
  margin: 0 auto;
  width: cover;
`;

export default function LayoutBanner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Wrapper>
      <div>
        <h2> React-slick </h2>
        <Slider {...settings}>
          <div>
            <ImgSize src="/red.jpeg"></ImgSize>
            <h3>윈도우 레드</h3>
          </div>
          <div>
            <ImgSize src="/purple.jpeg"></ImgSize>
            <h3>윈도우 퍼플</h3>
          </div>
          <div>
            <ImgSize src="/pink.jpeg"></ImgSize>
            <h3>윈도우 핑크</h3>
          </div>
          <div>
            <ImgSize src="/cmsn.png"></ImgSize>
            <h3>커밍 순</h3>
          </div>
          <div>
            <ImgSize src="/cmsn.png"></ImgSize>
            <h3>커밍 순</h3>
          </div>
        </Slider>
      </div>
    </Wrapper>
  );
}
