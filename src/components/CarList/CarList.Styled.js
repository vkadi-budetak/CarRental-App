import styled from 'styled-components';

export const GridStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-inline: -15px;
  margin-top: 50px;
`;
export const GridItem = styled.div`
  width: 25%;
  padding: 0 15px;

  @media only screen and (max-width: 1200px) {
    width: calc(100%/3);
    }

    @media only screen and (max-width: 768px) {
    width: 50%;
    }

    @media only screen and (max-width: 428px) {
    width: 100%;
    }
`;

export const CarListBtnStyled = styled.button`
  border: none;
  background: transparent;

  margin: 70px auto;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  cursor: pointer;

  color: rgb(52, 112, 255);

  &:hover,
  &:focus {
    color: rgb(11, 68, 205);
  }
`;
