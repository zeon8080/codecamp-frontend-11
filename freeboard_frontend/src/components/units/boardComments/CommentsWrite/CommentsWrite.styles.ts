import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #0d110f;
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

export const CommentContainer = styled.div`
  width: 1200px;
  background-color: #d6fae4;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0px 360px;
  filter: drop-shadow(0 0 0.5rem #8cf2b3);
  padding: 30px;
  margin-bottom: 30px;
`;

export const CommentHead = styled.div`
  margin-bottom: 40px;
  display: flex;
  flex-direction: row;
`;

export const CommentWriterName = styled.div`
  font-weight: bold;
`;

export const CommentContents = styled.div`
  font-size: 16px;
  margin-top: 8px;
`;

export const CommentImg = styled.image`
  display: flex;
`;

export const CommentSpan = styled.span`
  margin-left: 14px;
`;

export const CommentInfoInput = styled.input`
  width: 160px;
  padding: 14px 0px 14px 20px;
  margin-right: 24px;
  margin-bottom: 20px;
  font-family: "Malgun gothic", dotum, sans-serif;
  border: 1px solid #bdbdbd;
`;

export const CommentTextareaBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 161px;
  border: 1px solid #bdbdbd;
  margin-bottom: 42px;
`;

export const CommentWriteNew = styled.div`
  position: relative;
`;

export const CommentInput = styled.textarea`
  width: 100%;
  height: 108px;
  padding: 20px 20px 64px 20px;
  border: none;
  /* border-radius: 15px; */
  resize: none;
  box-sizing: border-box;
  font-family: "Malgun gothic", dotum, sans-seri;
`;

export const CommentBtnBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  border-top: 1px solid #f2f2f2;
`;

export const CommentLimit = styled.span`
  color: #bdbdbd;
  padding: 14px 20px;
`;

export const CommentBtn = styled.button`
  width: 120px;
  height: 100%;
  padding: 14px 16px;
  border: 3px solid #58e48e;
  color: #0d110f;
  background-color: #58e48e;
  cursor: pointer;
`;

export const CommentDate = styled.div`
  padding: 20px 60px;
  font-size: 12px;
`;

export const CommentDivide = styled.div`
  width: 100%;
  border-top: 1px solid #bdbdbd;

  margin-bottom: 20px;
`;
