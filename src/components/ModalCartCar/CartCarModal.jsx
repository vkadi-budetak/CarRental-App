import { useState } from 'react';

import {
  BtnModalStyled,
  CartCarModalStyled,
  CloseBtnIconStyled,
  CloseBtnStyled,
  ConteinerModalStyled,
  ContentStyled,
  ImgModalStyled,
  RentalConditionConteinerStyled,
  RentalConditionsStyled,
  RentalConditionsTitleStyled,
  SubtitleModalStyled,
  TextModalStyled,
  TitleDetailModalStyled,
  TitleModalBrandkStyled,
  TitleModalStyled,
} from './CartCarModal.Styled';

const ModalCartCar = () => {
  const [isModalOpen, setModalOpen] = useState(true)

  const closeModal = () => {
    setModalOpen(false)
  }

  return (
    <CartCarModalStyled>
      { isModalOpen && ( 
        <ContentStyled>
        <ConteinerModalStyled>
        <div>
          <CloseBtnStyled onClick={closeModal}>
          <CloseBtnIconStyled>
            &times;
          </CloseBtnIconStyled>
          </CloseBtnStyled>

        </div>

        <ImgModalStyled>
          <img src="../../../public/ferrari.png" alt="photoCar" />
        </ImgModalStyled>
        <TitleModalStyled>
          Buick <TitleModalBrandkStyled>Enclave</TitleModalBrandkStyled>, 2008
        </TitleModalStyled>
        <TitleDetailModalStyled>
          <span>Kiev</span>
          <span>Ukraine</span>
          <span>Id: 9582</span>
          <span>Year: 2008</span>
          <span>Type: Suv</span>
          <span>Fuel Consumption: 10.5</span>
          <span>Engine Size: 3.6L V6</span>
        </TitleDetailModalStyled>
        <TextModalStyled>
          The Buick Enclave is a stylish and spacious SUV known for its
          comfortable ride and luxurious features.
        </TextModalStyled>
        <SubtitleModalStyled>Accessories and functionalities:</SubtitleModalStyled>
        <TitleDetailModalStyled>
          <span>Leather seats</span>
          <span>Panoramic sunroof</span>
          <span>Power liftgate</span>
          <span>Premium audio system</span>
          <span>Remote start</span>
          <span>Blind-spot monitoring</span>
        </TitleDetailModalStyled>
          <SubtitleModalStyled>Rental Conditions: </SubtitleModalStyled>
          <RentalConditionsStyled>
            <RentalConditionConteinerStyled>
              Minimum age : <RentalConditionsTitleStyled>25</RentalConditionsTitleStyled>
            </RentalConditionConteinerStyled>
            <RentalConditionConteinerStyled>Valid driver’s license</RentalConditionConteinerStyled>
            <RentalConditionConteinerStyled>Security deposite required </RentalConditionConteinerStyled>
            <RentalConditionConteinerStyled>
              Mileage: <RentalConditionsTitleStyled>5,858</RentalConditionsTitleStyled>
            </RentalConditionConteinerStyled>
            <RentalConditionConteinerStyled>
              Price: <RentalConditionsTitleStyled>40$</RentalConditionsTitleStyled>
            </RentalConditionConteinerStyled>
          </RentalConditionsStyled>
        <BtnModalStyled>Rental car</BtnModalStyled>
      </ConteinerModalStyled>
    </ContentStyled>
      )}
      
    </CartCarModalStyled>
  );
};

export default ModalCartCar;





//---------------------
//   componentDidMount() {
//     window.addEventListener('keydown', this.onKeyDown);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.onKeyDown);
//   }

//   onKeyDown = event => {
//     if (event.code === 'Escape') {
//       this.props.onCloseModal();
//     }
//   };

//   onOverlayClick = event => {
//     if (event.currentTarget === event.target) {
//       this.props.onCloseModal();
//     }
//   };

//   render() {
//     return (
//       <div onClick={this.onOverlayClick} className="Overlay">
//         <div className="Modal">
//           <img src={this.props.data.src} alt={this.props.data.alt} />
//         </div>
//       </div>
//     );
//   }
// }
//--------------