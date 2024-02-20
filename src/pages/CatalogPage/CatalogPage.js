import React from 'react';
import CarList from 'components/CarList/CarList';
import SearchCar from 'components/SearchCar/SearchCar';

const CatalogPage = () => {
  return (
    <>
      <SearchCar/>
      <CarList/>
    </>
  );
};

export default CatalogPage;
