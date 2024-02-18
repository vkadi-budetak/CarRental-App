import React from 'react';
import { NavLink } from 'react-router-dom';
import { HeaderWrap } from './Header.Styled';

const Header = () => {
  return (
    <HeaderWrap>
      <div>
      <NavLink to="/"><img src="/CarRental-App/HomePage2.png" alt="CarLogo" /></NavLink>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/catalog">Catalog</NavLink>
          </li>
          <li>
            <NavLink to="/favorites">Favorites</NavLink>
          </li>
        </ul>
      </nav>
    </HeaderWrap>
  );
};

export default Header;
