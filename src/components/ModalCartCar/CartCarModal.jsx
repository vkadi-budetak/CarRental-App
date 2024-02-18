import React, { useEffect } from 'react';

import {
  BtnModalStyled,
  CartCarModalStyled,
  CloseBtnIconStyled,
  CloseBtnStyled,
  ConteinerModalStyled,
  ContentStyled,
  ImgModalStyled,
  RentalConditionConteinerStyled,
  RentalConditionsStyled,
  RentalConditionsTitleStyled,
  SubtitleModalStyled,
  TextModalStyled,
  TitleDetailModalStyled,
  TitleModalBrandkStyled,
  TitleModalStyled,
} from './CartCarModal.Styled';

const ModalCartCar = ({ data, closeModal }) => {
  const {
    make,
    model,
    year,
    img,
    address,
    id,
    type,
    fuelConsumption,
    engineSize,
    accessories,
    functionalities,
    rentalConditions,
    mileage,
    rentalPrice,
  } = data;

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  function handleKeyDown(event) {
    if (event.code === 'Escape') {
      closeModal();
    }
  }

  const handleOverlayClick = event => {
    if (event.currentTarget === event.target) {
      closeModal();
    }
  };

  return (
    <CartCarModalStyled onClick={handleOverlayClick}>
      <ContentStyled>
        <ConteinerModalStyled>
          <div>
            <CloseBtnStyled onClick={closeModal}>
              <CloseBtnIconStyled>&times;</CloseBtnIconStyled>
            </CloseBtnStyled>
          </div>

          <ImgModalStyled>
            <img src={img} alt="photoCar" />
          </ImgModalStyled>
          <TitleModalStyled>
            {make} <TitleModalBrandkStyled>{model}</TitleModalBrandkStyled>,
            {year}
          </TitleModalStyled>
          <TitleDetailModalStyled>
            <span>{address}</span>
            <span>Id: {id}</span>
            <span>Year: {year}</span>
            <span>Type: {type}</span>
            <span>Fuel Consumption: {fuelConsumption}</span>
            <span>Engine Size: {engineSize}</span>
          </TitleDetailModalStyled>
          <TextModalStyled>
            The Buick Enclave is a stylish and spacious SUV known for its
            comfortable ride and luxurious features.
          </TextModalStyled>
          <SubtitleModalStyled>
            Accessories and functionalities:
          </SubtitleModalStyled>
          <TitleDetailModalStyled>
            <span>{accessories}</span>
            <span>{functionalities}</span>
          </TitleDetailModalStyled>
          <SubtitleModalStyled>Rental Conditions: </SubtitleModalStyled>
          <RentalConditionsStyled>
            <RentalConditionConteinerStyled>
              <RentalConditionsTitleStyled>
                {rentalConditions}
              </RentalConditionsTitleStyled>
            </RentalConditionConteinerStyled>
            <RentalConditionConteinerStyled>
              Mileage:
              <RentalConditionsTitleStyled>
                {mileage}
              </RentalConditionsTitleStyled>
            </RentalConditionConteinerStyled>
            <RentalConditionConteinerStyled>
              Price:
              <RentalConditionsTitleStyled>
                {rentalPrice}
              </RentalConditionsTitleStyled>
            </RentalConditionConteinerStyled>
          </RentalConditionsStyled>
          <BtnModalStyled href='tel:+380730000000'>Rental car</BtnModalStyled>
        </ConteinerModalStyled>
      </ContentStyled>
    </CartCarModalStyled>
  );
};

export default ModalCartCar;


