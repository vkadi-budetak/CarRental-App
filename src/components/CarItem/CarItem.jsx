import React, { useState } from 'react';

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
import ModalCartCar from 'components/ModalCartCar/CartCarModal';

export default function CarItem({img, make, model, year, rentalPrice, address, rentalCompany, type, id, accessories}) {
const [isModalOpen , setModalOpen] = useState(false);

const openModal = () => {
  setModalOpen(true);
}

  return (
    <CarItemStyled>
      {img && (<ImgCarStyled src={img} alt="photoCar" />)}
      
      <TitleStyled>
        {make} <TitleBrandkStyled>{model}</TitleBrandkStyled>, {year}
        <TitlePriceStyled>{rentalPrice}</TitlePriceStyled>
      </TitleStyled>
      <TitleDetailStyled>
        <DescStyled>{address}</DescStyled>
        <DescStyled>{rentalCompany}</DescStyled>
      </TitleDetailStyled>
      <TitleDetailStyled>
        <DescStyled>{type}</DescStyled>
        <DescStyled>{make}</DescStyled>
        <DescStyled>{id}</DescStyled>
        <DescStyled>{accessories}</DescStyled>
      </TitleDetailStyled>

      <svg width="18" height="18"></svg>

      <CarItemBtnStyled onClick={openModal}>Learn more</CarItemBtnStyled>
      {isModalOpen && <ModalCartCar/>}
    </CarItemStyled>
  );
}
