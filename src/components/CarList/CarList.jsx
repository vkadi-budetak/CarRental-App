import React from 'react';
import CarItem from 'components/CarItem/CarItem';


import { useSelector } from 'react-redux';

import {
  selectAdverts,
  selectAdvertsError,
  selectAdvertsIsLoading,
} from 'redax/adverts.selectors';

import Loader from 'components/Loader/Loader';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';
import { GridItem, GridStyled } from './CarList.Styled';

export default function CarList() {
  const adverts = useSelector(selectAdverts);
  const isLoading = useSelector(selectAdvertsIsLoading);
  const error = useSelector(selectAdvertsError);

  console.log(adverts)

  return (
    <GridStyled>
      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}

      {adverts.map(el => (
        <GridItem><CarItem key={el.id} {...el} /></GridItem>
        
      ))}
    </GridStyled>
  );
}
