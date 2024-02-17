import styled from 'styled-components';

export const CartCarModalStyled = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.8);
  overflow: hidden;
  z-index: 10;
`;

export const ContentStyled = styled.div`
  position: relative;
  height: auto;
  width: 541px;
  max-height: 752px;
  overflow-y: auto;
  background-color: #ffffff;
  padding: 32px 24px;
  border-radius: 10px;
  font-size: 18px;
  line-height: 1.1;

  /* @media (min-width: 1440px) {
      width: 592px;
      padding: 32px 24px;
    }

    @media (min-width: 768px) and (max-width: 1439px) {
      width: 704px;
      padding: 32px 24px;
    }
    @media (min-width: 320px) and (max-width: 767px) {
      width: 280px;
      padding: 24px 12px;
    } */
`;

export const ConteinerModalStyled = styled.div`
  margin: 40px;
  color: rgb(18, 20, 23);
`;

export const ImgModalStyled = styled.div`
  max-width: 461px;
  max-height: 248px;
  border-radius: 14px;
  margin-bottom: 14px;
`;

export const TitleModalStyled = styled.h3`
  /* margin-top: 14px; */
  font-size: 18px;
  margin-bottom: 8px;
`;

export const TitleModalBrandkStyled = styled.span`
  color: rgb(52, 112, 255);
`;

export const TitleDetailModalStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  /* max-width: 277px;
height: 40px; */
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  margin-top: 8px;
`;

export const TextModalStyled = styled.p`
  margin-top: 14px;
  font-size: 14px;
  font-weight: 400;
  /* color: rgb(18, 20, 23); */
`;

export const SubtitleModalStyled = styled.p`
  margin-top: 24px;
  font-size: 14px;
  font-weight: 500;
  /* color: rgb(18, 20, 23); */
`;
export const RentalConditionsStyled = styled.div`
   display: flex;
    gap: 8px;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  color: rgb(54, 53, 53);
`;

export const RentalConditionConteinerStyled = styled.div`
  width: auto;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: 1px solid rgb(249, 249, 249);
  border-radius: 35px;
  
`;

export const RentalConditionsTitleStyled = styled.span`
  font-weight: 600;
  color: rgb(52, 112, 255);
`;
