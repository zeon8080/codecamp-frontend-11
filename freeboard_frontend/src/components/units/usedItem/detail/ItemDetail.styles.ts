import styled from "@emotion/styled";
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #0d110f;
`;

export const Wrapper = styled.div`
  width: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 100px;
`;
export const DetailWrapper = styled.div`
  padding: 80px 120px;
  height: 100%;
  background-color: #d6fae4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid black;
  border-radius: 15px;
  filter: drop-shadow(0 0 0.2rem #8cf2b3);
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
export const Seller = styled.div`
  font-size: 24px;
  font-weight: bold;
`;
export const CreateDate = styled.div`
  font-size: 16px;
  color: #828282;
`;

export const DivideLine = styled.div`
  width: 100%;
  border-top: 1px solid #bdbdbd;
  margin-top: 20px;
  margin-bottom: 50px;
`;

export const ItemImage = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Remarks = styled.div`
  font-size: 16px;
  color: gray;
  margin-bottom: 20px;
`;

export const ItemName = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const ItemContents = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

export const ItemPrice = styled.div`
  font-size: 24px;
  color: red;
  margin-bottom: 20px;
`;
export const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const a = styled.a`
  text-decoration: unset;
  color: black;
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
export const TopWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const ImageBox = styled.div`
  width: 480px;
  height: 480px;
  margin-right: 68px;

  > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const NameBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 820px;
  font-size: 24px;
  font-weight: 700;
`;
export const EditBtnBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: #d6fae4;
  cursor: pointer;
  margin-left: 16px;
`;

export const Divide1 = styled.div`
  border-top: 1px solid gray;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const Price = styled.span`
  font-size: 20px;
  font-weight: 500;
  margin-right: 8px;
`;

export const Divide2 = styled.div`
  border-top: 1px solid rgba(85, 85, 85, 1);
  margin-top: 5px;
  margin-bottom: 35px;
`;
export const BtnBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
`;

export const EditBtn = styled.div`
  border: 1px solid black;
  border-radius: 10px;
  height: 50px;
  width: 100px;
  font-weight: bold;
  color: #3e4149;
  background-color: #8cf2b3;
  border: 5px solid #4ce185;
  margin-right: 10px;
  cursor: pointer;
  text-align: center;
`;

export const PickBtn = styled.button`
  border: 1px solid black;
  border-radius: 10px;
  height: 60px;
  width: 150px;
  font-weight: bold;
  color: #3e4149;
  background-color: #8cf2b3;
  border: 5px solid #4ce185;
  margin-right: 10px;
  cursor: pointer;
`;

export const BasketBtn = styled.button`
  border: 1px solid black;
  border-radius: 10px;
  height: 60px;
  width: 150px;
  font-weight: bold;
  color: #3e4149;
  background-color: #8cf2b3;
  border: 5px solid #4ce185;
  margin-right: 10px;
  cursor: pointer;
`;

export const BuyBtn = styled.button`
  border: 1px solid black;
  border-radius: 10px;
  height: 60px;
  width: 150px;
  font-weight: bold;
  color: #3e4149;
  background-color: #8cf2b3;
  border: 5px solid #4ce185;
  margin-right: 10px;
  cursor: pointer;
`;
