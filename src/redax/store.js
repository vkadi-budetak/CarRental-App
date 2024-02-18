import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import { advertsReducer } from './advertsReducer';
import { favoritesReducer } from './favoritesReducer';

const favoritesConfig = {
  key: 'favorites',
  storage,
  whitelist: ['items'],
};

export const rootReducer = combineReducers({
  advertsStore: advertsReducer,
  favoritesStore: persistReducer(favoritesConfig, favoritesReducer),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
