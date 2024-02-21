import styled from 'styled-components';

export const SearchbarStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  justify-content: center;
`;

export const SearchbarDescStyled = styled.p`
font-size: 14px;
font-weight: 500;
line-height: 18px;
color: rgb(138, 138, 137);
`

export const SearchFormStyled = styled.input`
  background-color: tomato;
  &:hover {
  }
`;

export const SearchFormBtnStyled = styled.button`
  align-self: flex-end;
  background-color: rgb(52, 112, 255);
  width: 136px;
  height: 57px;
  border-radius: 12px;

  &:hover,
  :focus {
    background-color: rgb(11, 68, 205);
  }
`;

export const SearchFormBtnLabelStyled = styled.span`
  width: auto;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  color: rgb(255, 255, 255);
`;

