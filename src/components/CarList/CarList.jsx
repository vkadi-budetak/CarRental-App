import React, { useEffect } from 'react';
import CarItem from 'components/CarItem/CarItem';
import { incPage, resetAdverts } from 'redax/advertsReducer';

import { useDispatch, useSelector } from 'react-redux';
import { fetchAdverts } from 'redax/advertsThunk';

import {
  selectAdverts,
  selectAdvertsPage,
  selectAdvertsBrand,
  selectAdvertsError,
  selectAdvertsIsLoading,
} from 'redax/adverts.selectors';

import Loader from 'components/Loader/Loader';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';
import { CarListBtnStyled, GridItem, GridStyled } from './CarList.Styled';

export default function CarList() {
  const adverts = useSelector(selectAdverts);
  const page = useSelector(selectAdvertsPage);
  const make = useSelector(selectAdvertsBrand);
  const isLoading = useSelector(selectAdvertsIsLoading);
  const error = useSelector(selectAdvertsError);
  const dispatch = useDispatch();
  const limit = 12;

  useEffect(() => {
    dispatch(fetchAdverts({ limit, page, make }));
  }, [dispatch, page, make]);

  useEffect(() => {
    return () => {
      dispatch(resetAdverts());
    };
  }, [dispatch]);

  const handleLoadMore = () => {
    dispatch(incPage());
  };

  return (
    <GridStyled>
      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}

      {adverts.map(el => (
        <GridItem key={el.id}>
          <CarItem data={el} />
        </GridItem>
      ))}
      {adverts.length < 25 && !make ? (
        <CarListBtnStyled onClick={handleLoadMore}>Load more</CarListBtnStyled>
      ) : (
        false
      )}
    </GridStyled>
  );
}
