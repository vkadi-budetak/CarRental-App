import SearchCar from './SearchCar/SearchCar';
import CarList from './CarList/CarList';
import ModalCartCar from './ModalCartCar/CartCarModal';

import { Container } from './App.styled';
import { useState } from 'react';

export const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  }

  return (
    <Container>
      <SearchCar/>
      <CarList />
      <button onClick={openModal}>Відкрити модалку</button>
      {isModalOpen && <ModalCartCar/>}
      
    </Container>
  );
};
