import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, deleteItem } from 'redax/favoritesReducer';
import { selectFavorites } from 'redax/favorites.selectors';

import {
  CarItemStyled,
  ImgCarStyled,
  TitleStyled,
  TitleBrandkStyled,
  TitlePriceStyled,
  TitleDetailStyled,
  DescStyled,
  CarItemBtnStyled,
  LikeStyled,
} from './CarItem.Styled';
import ModalCartCar from 'components/ModalCartCar/CartCarModal';

export default function CarItem({ data }) {
  const {
    img,
    make,
    model,
    year,
    rentalPrice,
    address,
    rentalCompany,
    type,
    id,
    accessories,
  } = data;

  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const addFavorite = data => {
    if (!favorites.some(item => item.id === data.id)) {
      dispatch(addItem(data));
    }
  };

  const removeFavorite = id => {
    if (favorites.some(item => item.id === id)) {
      dispatch(deleteItem(id));
    }
  };

  useEffect(() => {
    if (favorites.find(item => item.id === id)) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  }, [favorites, id, dispatch]);

  return (
    <CarItemStyled>
      {img && <ImgCarStyled src={img} alt="photoCar" />}

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
      <CarItemBtnStyled onClick={openModal}>Learn more</CarItemBtnStyled>
      {isModalOpen && <ModalCartCar data={data} closeModal={closeModal} />}
      <LikeStyled>
        {isFavorite ? (
          <LikeActive
            handleClick={() => {
              removeFavorite(id);
            }}
          />
        ) : (
          <LikeNonActive
            handleClick={() => {
              addFavorite(data);
            }}
          />
        )}
      </LikeStyled>
    </CarItemStyled>
  );
}

function LikeActive({ handleClick }) {
  return (
    <span onClick={handleClick}>
      <svg
        width="16.677246"
        height="14.673889"
        viewBox="0 0 16.6772 14.6739"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <defs />
        <path
          id="Vector"
          d="M14.9685 1.70886C14.5854 1.32562 14.1306 1.02161 13.6299 0.814209C13.1294 0.60675 12.5928 0.5 12.051 0.5C11.509 0.5 10.9727 0.60675 10.4719 0.814209C9.97144 1.02161 9.5166 1.32562 9.13354 1.70886L8.33838 2.50385L7.54346 1.70886C6.76978 0.93512 5.72021 0.500427 4.62598 0.500427C3.53174 0.500427 2.48218 0.93512 1.7085 1.70886C0.934814 2.48267 0.5 3.5321 0.5 4.62634C0.5 5.72064 0.934814 6.77008 1.7085 7.54388L2.50342 8.33887L8.33838 14.1739L14.1736 8.33887L14.9685 7.54388C15.3518 7.16083 15.6558 6.70599 15.863 6.20538C16.0706 5.70477 16.1772 5.16821 16.1772 4.62634C16.1772 4.08453 16.0706 3.54797 15.863 3.04736C15.6558 2.54675 15.3518 2.09192 14.9685 1.70886Z"
          fill="#3470FF"
          fillOpacity="1.000000"
          fillRule="nonzero"
        />
        <path
          id="Vector"
          d="M13.6299 0.814209C13.1294 0.60675 12.5928 0.5 12.051 0.5C11.509 0.5 10.9727 0.60675 10.4719 0.814209C9.97144 1.02161 9.5166 1.32562 9.13354 1.70886L8.33838 2.50385L7.54346 1.70886C6.76978 0.93512 5.72021 0.500427 4.62598 0.500427C3.53174 0.500427 2.48218 0.93512 1.7085 1.70886C0.934814 2.48267 0.5 3.5321 0.5 4.62634C0.5 5.72064 0.934814 6.77008 1.7085 7.54388L2.50342 8.33887L8.33838 14.1739L14.1736 8.33887L14.9685 7.54388C15.3518 7.16083 15.6558 6.70599 15.863 6.20538C16.0706 5.70477 16.1772 5.16821 16.1772 4.62634C16.1772 4.08453 16.0706 3.54797 15.863 3.04736C15.6558 2.54675 15.3518 2.09192 14.9685 1.70886C14.5854 1.32562 14.1306 1.02161 13.6299 0.814209Z"
          stroke="#3470FF"
          strokeOpacity="1.000000"
          strokeWidth="1.000000"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function LikeNonActive({ handleClick }) {
  return (
    <span onClick={handleClick}>
      <svg
        width="17.177246"
        height="15.173889"
        viewBox="0 0 17.1772 15.1739"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <defs />
        <path
          id="Vector"
          d="M13.8799 1.06421C13.3794 0.85675 12.8428 0.75 12.301 0.75C11.759 0.75 11.2227 0.85675 10.7219 1.06421C10.2214 1.27161 9.7666 1.57562 9.38354 1.95886L8.58838 2.75385L7.79346 1.95886C7.01978 1.18512 5.97021 0.750427 4.87598 0.750427C3.78174 0.750427 2.73218 1.18512 1.9585 1.95886C1.18481 2.73267 0.75 3.7821 0.75 4.87634C0.75 5.97064 1.18481 7.02008 1.9585 7.79388L2.75342 8.58887L8.58838 14.4239L14.4236 8.58887L15.2185 7.79388C15.6018 7.41083 15.9058 6.95599 16.113 6.45538C16.3206 5.95477 16.4272 5.41821 16.4272 4.87634C16.4272 4.33453 16.3206 3.79797 16.113 3.29736C15.9058 2.79675 15.6018 2.34192 15.2185 1.95886C14.8354 1.57562 14.3806 1.27161 13.8799 1.06421Z"
          stroke="#FFFFFF"
          strokeOpacity="0.800000"
          strokeWidth="1.500000"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}
