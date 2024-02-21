import React from 'react';
import CarList from 'components/CarList/CarList';
import SearchCar from 'components/SearchCar/SearchCar';
import { CatalogPageStyled } from './CatalogPage.styled';

const CatalogPage = () => {
  return (
    <CatalogPageStyled>
      <SearchCar/>
      <CarList/>
    </CatalogPageStyled>
  );
};

export default CatalogPage;
