import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

// export const Video = styled.video`
//   position: fixed;
//   width: 100%;
//   background-size: cover;
//   background-position: center;
//   z-index: -1; ;
// `;

export const MainPageBackground = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: fixed;
  height: 100%;
  width: 100%;
`;

export const TitleBox = styled.div`
  position: absolute;
  top: 75%;
  left: 35%;
  text-shadow: ghostwhite 5px 5px 10px;
`;

export const Texts = styled.div`
  color: white;
  font-size: 200px;
`;

export const WheelBtn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  position: absolute;
  left: 90%;
  top: 10%;
  margin-left: -50px;
`;

export const Wheel = styled.img`
  width: 100px;
  height: 100px;

  animation: Wheel 0.8s infinite;

  @keyframes Wheel {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;
