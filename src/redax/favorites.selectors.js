import { createSelector } from '@reduxjs/toolkit';

const selectFavoritesStore = state => state.favoritesStore;

export const selectFavorites = createSelector(
  selectFavoritesStore,
  favoritesStore => favoritesStore.items
);