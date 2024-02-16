import styled from "styled-components"

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
  `

  export const ContentStyled = styled.div`
    position: relative;
    height: auto;
    width: 541px;
    height: 752px;
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
  `

export const ConteinerModalStyled = styled.div`
margin: 40px;
`

export const ImgModalStyled = styled.div`
max-width: 461px;
max-height: 248px;
border-radius: 14px;
margin-bottom: 14px;
`

export const TitleModalStyled = styled.h3`
margin-top: 14px;
font-size: 16px;
`

export const TitleModalBrandkStyled = styled.span`
color: rgb(52, 112, 255);
`

export const TitleDetailModalStyled = styled.div`
/* display: flex;
flex-wrap: nowrap;
gap: 8px; */
margin-bottom: 8px;
color: rgba(18, 20, 23, 0.5);
font-size: 12px;
`

export const TextModalStyled = styled.p`
margin-bottom: 24px;
font-size: 14px;
color: rgb(18, 20, 23);
`

export const SubtitleModalStyled = styled.p`
margin-bottom: 8px;
font-size: 14px;
`