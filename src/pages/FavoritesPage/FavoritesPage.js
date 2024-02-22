import React from 'react';
import { useSelector } from 'react-redux';
import { selectFavorites } from 'redax/favorites.selectors';
import { GridStyled, GridItem } from 'components/CarList/CarList.Styled';
import CarItem from 'components/CarItem/CarItem';
import {
  FavoritesItemStyled,
  FavoritesPageStyled,
  FavoritesTextStyled,
} from './FavoritesPage.styled';
import { NavLink } from 'react-router-dom';

const FavoritesPage = () => {
  const favorites = useSelector(selectFavorites);

  return (
    <FavoritesPageStyled>
      <GridStyled>
        {favorites.length ? (
          favorites.map(el => (
            <GridItem key={el.id}>
              <CarItem data={el} />
            </GridItem>
          ))
        ) : (
          <FavoritesTextStyled>
            No selected cars yet. Explore our
            <NavLink className="link" to="/catalog">
              <FavoritesItemStyled> catalog</FavoritesItemStyled>
            </NavLink> now.
          </FavoritesTextStyled>
        )}
      </GridStyled>
    </FavoritesPageStyled>
  );
};

export default FavoritesPage;
