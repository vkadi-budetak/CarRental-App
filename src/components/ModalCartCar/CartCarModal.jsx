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
  TitleTextModalStyled,
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
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeModal]);

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
            <CloseBtnStyled onClick={closeModal} widt>
              <CloseBtnIconStyled>&times;</CloseBtnIconStyled>
            </CloseBtnStyled>
          </div>

          <ImgModalStyled>
            <img src={img} alt="photoCar" />
          </ImgModalStyled>
          <TitleModalStyled>
            {make} <TitleModalBrandkStyled>{model}</TitleModalBrandkStyled>,{' '}
            {year}
          </TitleModalStyled>
          <TitleDetailModalStyled>
            <TitleTextModalStyled>{address[1]}</TitleTextModalStyled>
            <TitleTextModalStyled>{address[2]}</TitleTextModalStyled>
            <TitleTextModalStyled>Id: {id}</TitleTextModalStyled>
            <TitleTextModalStyled>Year: {year}</TitleTextModalStyled>
            <TitleTextModalStyled>Type: {type}</TitleTextModalStyled>
            <TitleTextModalStyled>
              Fuel Consumption: {fuelConsumption}
            </TitleTextModalStyled>
            <TitleTextModalStyled>
              Engine Size: {engineSize}
            </TitleTextModalStyled>
          </TitleDetailModalStyled>
          <TextModalStyled>
            The Buick Enclave is a stylish and spacious SUV known for its
            comfortable ride and luxurious features.
          </TextModalStyled>
          <SubtitleModalStyled>
            Accessories and functionalities:
          </SubtitleModalStyled>
          <TitleDetailModalStyled>
            <TitleTextModalStyled>{accessories[0]}</TitleTextModalStyled>
            <TitleTextModalStyled>{accessories[1]}</TitleTextModalStyled>
            <TitleTextModalStyled>{functionalities[0]}</TitleTextModalStyled>
            <TitleTextModalStyled>{accessories[2]}</TitleTextModalStyled>
            <TitleTextModalStyled>{functionalities[1]}</TitleTextModalStyled>
            <TitleTextModalStyled>{functionalities[2]}</TitleTextModalStyled>
          </TitleDetailModalStyled>
          <SubtitleModalStyled>Rental Conditions: </SubtitleModalStyled>
          <RentalConditionsStyled>
            <RentalConditionConteinerStyled>
              Minimum age:
              <RentalConditionsTitleStyled>
                {rentalConditions[0].split(':')[1]}
              </RentalConditionsTitleStyled>
            </RentalConditionConteinerStyled>
            <RentalConditionConteinerStyled>
              {rentalConditions[1]}
            </RentalConditionConteinerStyled>
            <RentalConditionConteinerStyled>
              {rentalConditions[1]}
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
          <BtnModalStyled href="tel:+380730000000">Rental car</BtnModalStyled>
        </ConteinerModalStyled>
      </ContentStyled>
    </CartCarModalStyled>
  );
};

export default ModalCartCar;
