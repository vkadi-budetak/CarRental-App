import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Container } from './App.styled';
import Header from './Header/Header';
import Loader from './Loader/Loader';

const HomePage = lazy(() => import('../page/HomePage'));
const CatalogPage = lazy(() => import('../page/CatalogPage'));
const FavoritesPage = lazy(() => import('../page/FavoritesPage'));

const appRoutes = [
  {
    path: '/',
    element: (
        <HomePage />
    ),
  },
  {
    path: 'catalog',
    element: (
        <CatalogPage />
    ),
  },
  {
    path: 'favorites',
    element: (
        <FavoritesPage />
    ),
  },
];

const App = () => {
  return (
    <Container>
      <Header />
      <Suspense fallback={<Loader />}>
          <Routes>
            {appRoutes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
          </Routes>
        </Suspense>
    </Container>
  );
};

export default App;