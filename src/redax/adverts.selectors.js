import { createSelector } from '@reduxjs/toolkit';

const selectAdvertsStore = state => state.advertsStore;

export const selectAdverts = createSelector(
  selectAdvertsStore,
  advertsStore => advertsStore.adverts
);

export const selectAdvertsIsLoading = createSelector(
  selectAdvertsStore,
  advertsStore => selectAdverts.isLoading
);

export const selectAdvertsError = createSelector(
  selectAdvertsStore,
  advertsStore => advertsStore.error
);

export const selectAdvertsFilter = createSelector(
  selectAdvertsStore,
  advertsStore => advertsStore.filter
);