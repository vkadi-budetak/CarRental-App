import SearchCar from './SearchCar/SearchCar';
import CarList from './CarList/CarList';

import { Container } from './App.styled';


export const App = () => {
  return (
    <Container>
      <SearchCar/>
      <CarList />
    </Container>
  );
};
