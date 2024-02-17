import React from 'react';
import { NavLink } from 'react-router-dom';
import { HeaderWrap } from './Header.Styled';

const Header = () => {
  return (
    <HeaderWrap>
      {/* <img src="/CarRental-App/home_page.jpg" alt="fonCar" /> */}
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
