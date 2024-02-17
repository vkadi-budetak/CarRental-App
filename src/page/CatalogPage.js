import CarList from 'components/CarList/CarList';
import SearchCar from 'components/SearchCar/SearchCar';

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAdverts } from 'redax/advertsThunk';

const CatalogPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  return (
    <>
      <h1>Catalog</h1>
      <SearchCar/>
      <CarList/>
    </>
  );
};

export default CatalogPage;
