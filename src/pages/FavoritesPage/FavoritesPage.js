import React from 'react';
import { useSelector } from 'react-redux';
import { selectFavorites } from 'redax/favorites.selectors';
import { GridStyled, GridItem } from 'components/CarList/CarList.Styled';
import CarItem from 'components/CarItem/CarItem';

const FavoritesPage = () => {
  const favorites = useSelector(selectFavorites);

  return (
    <GridStyled>
      {favorites.length
        ? favorites.map(el => (
            <GridItem key={el.id}>
              <CarItem data={el} />
            </GridItem>
          ))
        : false}
    </GridStyled>
  );
};

export default FavoritesPage;
