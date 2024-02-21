import styled from 'styled-components';

export const CarItemStyled = styled.div`
  padding-bottom: 50px;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const ImgCarStyled = styled.img`
  height: 274px;
  max-width: 100%;
  border-radius: 14px;
  object-fit: cover;
`;

export const TitleStyled = styled.h3`
  margin-top: 14px;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
`;

export const TitleBrandkStyled = styled.span`
  color: rgb(52, 112, 255);
`;

export const TitlePriceStyled = styled.span`
  margin-left: 10px;
`;

export const TitleDetailStyled = styled.div`
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;

  & :last-child {
    border-right: none;
    padding-right: 0;
  }
  & :first-child {
    padding-left: 0;
  }
`;

export const DescStyled = styled.span`
  padding: 0 6px;
  border-right: 1px solid rgba(18, 20, 23, 0.1);
  white-space: nowrap;

  &:last-child {
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

export const CarItemBtnStyled = styled.button`
  width: 100%;
  height: 44px;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  background-color: rgb(52, 112, 255);
  color: rgb(255, 255, 255);
  margin-top: 28px;

  &:hover,
  &:focus {
    background-color: rgb(11, 68, 205);
  }
`;

export const LikeStyled = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
`;
