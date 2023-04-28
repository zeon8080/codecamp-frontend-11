import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  height: 90px;
  position: sticky;
  top: 0;
  right: 0;
  z-index: 1;
  display: flex;
  flex-direction: row;
  justify-content: right;
  align-items: center;
  padding: 20px 0;
  transition: all 0.3s ease-in-out;
  background-color: rgba(13, 17, 15, 1);

  :hover {
    background-color: rgba(13, 17, 15, 0.9);
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  margin-right: 20px;
`;

export const BtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  align-items: center;
  width: 100%;
  height: 100px;
`;

export const Btns = styled.div`
  font-size: 14px;
  margin-left: 60px;
  cursor: pointer;
`;

export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 1374px;
  height: 157px;
`;

export const Logo = styled.div`
  cursor: pointer;
`;

export const UserName = styled.div`
  font-size: 20px;
  font-weight: 500;
  margin-right: 5px;
  margin-left: 5px;
`;

export const Point = styled.div`
  font-size: 20px;
  font-weight: 500;
  text-decoration: underline;
  margin: 0 5px;
`;

export const Charge = styled.div`
  font-size: 20px;
  text-decoration: underline;
  cursor: pointer;
`;

export const Basket = styled.div`
  background-color: #8cf2b3;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  font-size: 12px;
  text-align: center;
  line-height: 20px;
  margin-left: 5px;
  color: black;
`;
