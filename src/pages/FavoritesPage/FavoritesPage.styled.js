import styled from 'styled-components';

export const FavoritesPageStyled = styled.div`
  max-width: 1184px;
  margin: 40px auto;
  padding: 0 16px;
`;

export const FavoritesTextStyled = styled.p`
  margin: 60px auto;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  cursor: pointer;

  .link{
    text-decoration: none;
  }
`;

export const FavoritesItemStyled = styled.span`
  color: rgb(52, 112, 255);

  &:hover,
  &:focus {
    color: rgb(11, 68, 205);
  }
`;
