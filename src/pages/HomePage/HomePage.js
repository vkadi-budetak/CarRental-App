import React, { useState } from 'react';
import {
  HomePageBtn,
  HomePageImgStyled,
  HomePageTextStyled,
} from './HomePage.styled';

// import CatalogPage from 'pages/CatalogPage/CatalogPage';
import { NavLink } from 'react-router-dom';

const HomePage = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const OpenModal = () => {
    setModalOpen(true);
  };

  return (
    <>
      <HomePageImgStyled src="/CarRental-App/home_page.png" alt="CarFon" />
      <HomePageTextStyled>
        <h1>A company that provides car ornamentation services in Ukraine.</h1>
        <p>Go to the catalog and choose a car!</p>

        <NavLink to="/catalog">
          <HomePageBtn onClick={OpenModal}>A Good Trip!</HomePageBtn>
          {isModalOpen}
        </NavLink>
      </HomePageTextStyled>
    </>
  );
};

export default HomePage;
