import styled from "@emotion/styled";
import LazyLoad from "react-lazy-load";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default function ImagePage() {
  return (
    <Wrapper>
      <LazyLoad height={762}>
        <img src="/1.jpeg" />
      </LazyLoad>
      <LazyLoad height={762}>
        <img src="/2.jpeg" />
      </LazyLoad>
      <LazyLoad height={762}>
        <img src="/3.jpeg" />
      </LazyLoad>
      <LazyLoad height={762}>
        <img src="/4.jpeg" />
      </LazyLoad>
      <LazyLoad height={762}>
        <img src="/5.jpeg" />
      </LazyLoad>
      <LazyLoad height={762}>
        <img src="/6.jpeg" />
      </LazyLoad>
      <LazyLoad height={762}>
        <img src="/7.jpeg" />
      </LazyLoad>
      <LazyLoad height={762}>
        <img src="/8.jpeg" />
      </LazyLoad>
      <LazyLoad height={762}>
        <img src="/9.jpeg" />
      </LazyLoad>
      <LazyLoad height={762}>
        <img src="/10.jpeg" />
      </LazyLoad>
    </Wrapper>
  );
}
