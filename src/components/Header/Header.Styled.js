import styled from 'styled-components';

export const HeaderWrap = styled.div`
  display: flex;
  text-decoration: none;
  gap: 50px;
  align-items: center;
  justify-content: space-between;
  background-color: rgb(52, 112, 255);
  padding: 5px 100px;

  img {
    width: 60px;
   
  }

  ul {
    display: flex;
    gap: 20px;
    font-size: 20px;

    list-style: none;
    padding: 0;
    margin: 0;

    li {
      a {
        color: white;
        text-decoration: none;
        border-bottom: 2px solid transparent;
        padding-bottom: 2px;

        &.active {
          border-color: white;
        }
      }
    }
  }

  nav {
    display: flex;
    flex-wrap: nowrap;
  }
`;
