import {
  DescStyled,
  TitleDetailStyled,
} from 'components/CarItem/CarItem.Styled';
import {
  CartCarModalStyled,
  ConteinerModalStyled,
  ContentStyled,
  ImgModalStyled,
  TextModalStyled,
  TitleDetailModalStyled,
  TitleModalBrandkStyled,
  TitleModalStyled,
} from './CartCarModal.Styled';

const ModalCartCar = () => {
  // const [isModalOpen, setModalOpen] = useState(false)

  // const closeModal = () => {
  //   setModalOpen(false)
  // }

  return (
    <CartCarModalStyled>
      <ContentStyled>
        <ConteinerModalStyled>
          {/* <div>
            <button>
            <span onClick={closeModal}>
              &times;
            </span>
            </button>
          </div> */}

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
          <div>
            <p>Accessories and functionalities:</p>
            <span>Leather seats</span>
            <span>Panoramic sunroof</span>
            <span>Power liftgate</span>
            <span>Premium audio system</span>
            <span>Remote start</span>
            <span>Blind-spot monitoring</span>
          </div>
          <div>
            <p>Rental Conditions: </p>
            <span>
              Minimum age : <span>25</span>
            </span>
            <span>Valid driver’s license</span>
            <span>Security deposite required </span>
            <span>
              Mileage: <span>5,858</span>
            </span>
            <span>
              Price: <span>40$</span>
            </span>
          </div>
        </ConteinerModalStyled>
      </ContentStyled>
    </CartCarModalStyled>
  );
};

export default ModalCartCar;
