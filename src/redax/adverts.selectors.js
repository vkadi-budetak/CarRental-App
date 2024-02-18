import { createSelector } from '@reduxjs/toolkit';

const selectAdvertsStore = state => state.advertsStore;

export const selectAdverts = createSelector(
  selectAdvertsStore,
  advertsStore => advertsStore.adverts
);

export const selectAdvertsIsLoading = createSelector(
  selectAdvertsStore,
  advertsStore => advertsStore.isLoading
);

export const selectAdvertsError = createSelector(
  selectAdvertsStore,
  advertsStore => advertsStore.error
);

export const selectAdvertsPage = createSelector(
  selectAdvertsStore,
  advertsStore => advertsStore.page
);

export const selectAdvertsBrand = createSelector(
  selectAdvertsStore,
  advertsStore => advertsStore.filterBrand
);