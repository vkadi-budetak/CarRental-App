import React from 'react';

import {
  CarItemStyled,
  ImgCarStyled,
  TitleStyled,
  TitleBrandkStyled,
  TitlePriceStyled,
  TitleDetailStyled,
  DescStyled,
  CarItemBtnStyled,
} from './CarItem.Styled';

export default function CarItem() {
  return (
    <CarItemStyled>
      <ImgCarStyled src="" alt="photoCar" />

      <TitleStyled>
        Volvo <TitleBrandkStyled>XC90</TitleBrandkStyled>, 2019
        <TitlePriceStyled>$50</TitlePriceStyled>
      </TitleStyled>
      <TitleDetailStyled>
        <DescStyled>Kiev</DescStyled>
        <DescStyled>Ukraine</DescStyled>
        <DescStyled>Auto Rentals</DescStyled>
        <DescStyled>Premium</DescStyled>
      </TitleDetailStyled>
      <TitleDetailStyled>
        <DescStyled>Suv</DescStyled>
        <DescStyled>Volvo</DescStyled>
        <DescStyled>9584</DescStyled>
        <DescStyled>Premium Sound System</DescStyled>
      </TitleDetailStyled>

      <svg width="18" height="18"></svg>

      <CarItemBtnStyled>Learn more</CarItemBtnStyled>
    </CarItemStyled>
  );
}
