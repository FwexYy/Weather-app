import { ServerStyleSheet, styled } from "styled-components";

export const Card = styled.div`
  width: 90%;
  max-width: 470px;
  background: linear-gradient(135deg);
  color: #fff;
  margin: 0 auto;
  border-radius: 20px;
  text-align: center;
  min-width: 470px;
  height: 100%;
  min-height: 650px;
  overflow: hidden;
`;

export const ContentWrapper = styled.div`
  padding: 40px 35px;
`;

export const Search = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SearchInput = styled.input`
  border: 0;
  outline: 0;
  background: #ebfffc;
  color: #555;
  padding: 10px 25px;
  height: 60px;
  border-radius: 30px;
  flex: 1;
  margin-right: 16px;
  font-size: 18px;
  max-width: 350px;
`;

export const SearchButton = styled.button`
  border: 0;
  outline: 0;
  background: #ebfffc;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  cursor: pointer;
`;

export const SearchButtonImage = styled.img`
  width: 20px;
`;

export const Icon = styled.img`
  width: 170px;
  margin-top: 30px;
`;

export const City = styled.h1`
  font-size: 80px;
  font-weight: 500;
`;

export const Temperature = styled.h2`
  font-size: 45px;
  font-weight: 400;
  margin-top: -10px;
`;

export const Details = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  max-width: 400px;
  padding: 0 20px;
`;
export const Col = styled.div`
  display: flex;
  align-items: center;
  text-align: left;
  margin-top: 35px;
  width: 150px;
`;
export const ColImage = styled.img`
  width: 40px;
  margin-right: 10px;
  ${(props) => props.deg && `transform: rotate(${props.deg}deg)`};
`;

export const DetailsInfo = styled.p`
  font-size: ${(props) => (props.isTime ? "20px" : "24px")};
  margin-top: -6px;
  width: 107px;
`;
