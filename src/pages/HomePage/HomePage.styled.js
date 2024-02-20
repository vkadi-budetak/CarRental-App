import styled from 'styled-components';

export const HomePageImgStyled = styled.img`
  width: 100%;
`;

export const HomePageTextStyled = styled.div`
  margin-top: 220px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  z-index: 100;
  text-align: center;
  color: rgb(52, 112, 255);
`;


export const HomePageBtn = styled.button`
font-size: 30px;
border: 1px solid rgb(52, 112, 255);
border-radius: 10px;
  /* position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%; */
  /* opacity: 0.5; */
  z-index: 100;
  text-align: center;
  color: tomato;
  /* border: none; */
  background: transparent;

  &:hover,
  &:focus {
    color: rgb(11, 68, 205);

    border: 1px solid tomato;
    border-radius: 10px;
  }
`;
