import styled from 'styled-components';

export const CarItemStyled = styled.div`
  padding-bottom: 50px;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const ImgCarStyled = styled.img`
  height: 268px;
  max-width: 100%;
  border-radius: 14px;
  object-fit: cover;
`;

export const TitleStyled = styled.h3`
  margin-top: 14px;
  font-size: 16px;
`;

export const TitleBrandkStyled = styled.span`
  color: rgb(52, 112, 255);
`;

export const TitlePriceStyled = styled.span`
  margin-left: 87px;
`;

export const TitleDetailStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 8px;
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
`;
export const DescStyled = styled.span``;

export const CarItemBtnStyled = styled.button`
  margin-top: auto;
  width: 100%;
  height: 44px;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  background-color: rgb(52, 112, 255);
  color: rgb(255, 255, 255);

  &:hover,
  :focus {
    background-color: rgb(11, 68, 205);
  }
`;

export const LikeStyled = styled.div`
position: absolute;
top: 15px;
right: 15px;
`
