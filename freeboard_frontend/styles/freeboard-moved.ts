import styled from "@emotion/styled";

export const Container = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const BoardWrapper = styled.div`
  padding: 80px 120px;
  background-color: white;

  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px;

  filter: drop-shadow(0 0 0.75rem rgba(0, 0, 0, 0.2));
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
  justify-content: left;

  margin-left: 16.67px;
`;

export const WriterName = styled.div`
  font-size: 24px;
  font-weight: bold;
`;
export const CreateDate = styled.div`
  font-size: 16px;
  color: #828282;
`;

export const ImgBox = styled.div`
  display: flex;
  align-items: center;
`;

export const ImageBtn = styled.button`
  border: none;
  background-color: white;
  margin-left: 29.33px;
  cursor: pointer;
`;

export const DivideLine = styled.div`
  width: 100%;
  border-top: 1px solid #bdbdbd;
  margin-top: 20px;
  margin-bottom: 80px;
`;

// export const ImgLocation = styled.image`
//   /* margin-left: 29.33px; */
// `;

export const WriterContents = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BoardTitle = styled.div`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 40px;
`;

export const ContentsView = styled.img`
  /* display: flex;
  justify-content: center; */
`;

export const BoardContents = styled.div`
  margin-top: 40px;
  margin-bottom: 120px;
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
  background-color: white;
  margin-bottom: 4px;
`;

export const LikeBtnImg = styled.img`
  width: 20px;
  height: 100%;
`;

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const ContentsBtn = styled.button`
  background-color: white;
  padding: 14px 60px;

  margin: 101px 12px 0px 12px;
  cursor: pointer;
`;

export const DivideLine2 = styled.div`
  width: 100%;
  border-top: 1px solid #bdbdbd;
  margin-top: 87px;
  margin-bottom: 80px;
`;
