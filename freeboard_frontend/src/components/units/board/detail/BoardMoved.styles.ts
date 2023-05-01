import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #0d110f;
`;

export const Wrapper = styled.div`
  width: 1000px;
  margin: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const BoardWrapper = styled.div`
  padding: 80px 120px;
  background-color: #d6fae4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid black;
  border-radius: 15px;
  filter: drop-shadow(0 0 0.75rem #8cf2b3);
`;

export const WriterHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const WriterProfile = styled.div`
  display: flex;
  flex-direction: row;
`;

export const WriterBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-left: 16.67px;
`;

export const WriterName = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #191f1c;
`;

export const ProfileImg = styled.img`
  object-fit: contain;
`;
export const CreateDate = styled.div`
  font-size: 16px;
  color: #242d29;
`;

export const ImgBox = styled.div`
  display: flex;
  align-items: center;
`;

export const ImageBtn = styled.button`
  border: none;
  background-color: #d6fae4;
  cursor: pointer;
`;

export const DivideLine = styled.div`
  width: 100%;
  border-top: 1px solid #bdbdbd;
  margin-top: 20px;
  margin-bottom: 80px;
`;

export const WriterContents = styled.div`
  display: flex;
  flex-direction: column;
  color: #191f1c;
`;

export const BoardTitle = styled.div`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 40px;
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Image = styled.img`
  width: 100%;
  height: 600px;
  object-fit: contain;
  margin-bottom: 30px;
`;

export const YoutubeView = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const BoardContents = styled.div`
  margin-top: 40px;
`;

export const LikeImgBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 160px;
`;

export const LikeUpBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`;

export const LikeDownBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
`;

export const LikeButton = styled.button`
  border: none;
  cursor: pointer;
  background-color: #d6fae4;

  margin-bottom: 4px;
`;

export const LikeBtnImg = styled.img`
  width: 30px;
  height: 100%;
`;

export const LikeFont = styled.div`
  color: #ffd600;
  font-size: 18px;
`;
export const DislikeFont = styled.div`
  color: #828282;
  font-size: 18px;
`;

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const ContentsBtn = styled.button`
  padding: 14px 60px;
  background-color: #8cf2b3;
  border: 5px solid #4ce185;
  margin: 101px 12px 0px 12px;
  cursor: pointer;
  border-radius: 15px;
`;

export const DivideLine2 = styled.div`
  width: 100%;
  border-top: 1px solid #bdbdbd;
  margin-top: 87px;
  margin-bottom: 40px;
`;
