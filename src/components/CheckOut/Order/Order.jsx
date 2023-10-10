import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectBasket } from 'redux/basket/selectors';
import { addOrder } from 'redux/order/operations';
import { getUser } from 'redux/auth/selectors';
import { useAuth } from 'hooks/useAuth';
import { Container } from 'components/baseStyles/CommonStyle.styled';
import { NovaPoshta } from 'components/Delivery/NovaPoshta/NovaPoshta';
import { UkrPoshta } from 'components/Delivery/UkrPoshta/UkrPoshta';
import {
  Delivery,
  DeliveryInfoBox,
  DeliveryBlock,
  DeliveryBlockOptions,
  // DeliveryInfoBoxTitle,
  DeliveryBlockOptionsLable,
  DeliveryBlockOptionsInput,
  DeliveryForm,
  DeliveryFormInput,
  DeliveryFormLable,
  DeliveryFormBtn,
  // PaymentBlockOptionsLable,
  DeliveryFormBtnFinish,
  DeliverySection,
  DeliveryFormLableText,
  DeliveryBlockOptionsTitle,
  DeliveryBlockOptionsLableBox,
  DeliveryBlockOptionsTitleDiscr,
  UkrPoshtaIcon,
  NovaPoshtaIcon,
  PoshtaBox,
  DeliveryBlockOptionsBoxLable,
  PoshtaBoxTitle,
  BoxPost,
  PaymentOptionBox,
  LIQPAY,
  Wallet,
  PaymentFormBtn,
  PaymentFormBtnFinish,
  PaymentFormBtnBox,
  DeliveryBlockOptionsBtn,
  PaymentBlockOptionsLable,
  PaymentBlockOptionsInput,
  Btnwrapper,
  DeliveryInfoBlock,
} from './Order.styled';
import { CheckOutTitle } from '../Checkout.styled';

export const Order = () => {
  const basket = useSelector(selectBasket);
  const [selectedPaymentOption, setSelectedPaymentOption] = useState('');
  const [selectedOption, setSelectedOption] = useState(null);
  const [order, setOrder] = useState([]);

  const [selectedCity, setSelectedCity] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const dispatch = useDispatch();
  const auth = useSelector(getUser);
  let { userIn } = useAuth();
  // const orderRedux = useSelector(state => state.orders);

  const showDeliveryInfoBlock = () => {
    const deliveryBlock = document.getElementById('deliveryBlock');
    const deliveryInfoBlock = document.getElementById('deliveryInfoBlock');
    const addressTitle = document.getElementById('addressTitle');
    const deliveryTitle = document.getElementById('deliveryTitle');

    deliveryBlock.style.display = 'none';
    deliveryInfoBlock.style.display = 'flex';
    addressTitle.style.display = 'block';
    deliveryTitle.style.display = 'none';
  };

  const goBackToDelivery = () => {
    const deliveryBlock = document.getElementById('deliveryBlock');
    const deliveryInfoBlock = document.getElementById('deliveryInfoBlock');
    const addressTitle = document.getElementById('addressTitle');
    const deliveryTitle = document.getElementById('deliveryTitle');

    deliveryBlock.style.display = 'block';
    deliveryInfoBlock.style.display = 'none';
    addressTitle.style.display = 'none';
    deliveryTitle.style.display = 'block';
  };

  const showPayment = () => {
    const paymentBlock = document.getElementById('paymentBlock');
    const deliveryInfoBlock = document.getElementById('deliveryInfoBlock');
    const paymentTitle = document.getElementById('paymentTitle');
    const addressTitle = document.getElementById('addressTitle');

    paymentBlock.style.display = 'block';
    deliveryInfoBlock.style.display = 'none';
    paymentTitle.style.display = 'block';
    addressTitle.style.display = 'none';
  };

  const goBackToDeliveryInfo = () => {
    const paymentBlock = document.getElementById('paymentBlock');
    const deliveryInfoBlock = document.getElementById('deliveryInfoBlock');
    const paymentTitle = document.getElementById('paymentTitle');
    const addressTitle = document.getElementById('addressTitle');

    paymentBlock.style.display = 'none';
    deliveryInfoBlock.style.display = 'flex';
    paymentTitle.style.display = 'none';
    addressTitle.style.display = 'block';
  };

  const handleOptionClick = index => {
    const selectedDeliveryOption = deliveryOptions[index].label;
    setSelectedOption(index);
    setFormData({
      ...formData,
      selectedDeliveryOption,
    });

    setFormDataAuth({
      ...formDataAuth,
      selectedDeliveryOption,
    });
  };

  const handlePaymentOptionClick = index => {
    const selectedPaymentOptionData = paymentOptions[index].label;
    setSelectedPaymentOption(index);
    setFormData({
      ...formData,
      selectedPaymentOption: selectedPaymentOptionData,
    });
    setFormDataAuth({
      ...formDataAuth,
      selectedPaymentOption: selectedPaymentOptionData,
    });
  };

  const deliveryOptions = [
    { value: 'NovaPoshta', label: 'NovaPoshta' },
    { value: 'UkrPoshta', label: 'UkrPoshta' },
    { value: 'Courier delivery', label: 'Courier delivery' },
  ];

  const paymentOptions = [
    { value: 'Card', label: 'Card' },
    { value: 'On Department', label: 'onDepartment' },
  ];

  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    company: '',
    email: '',
    phone: '',
    address1: '',
    address2: '',
    town: '',
    state: '',
    zipCode: '',
  });

  const [formDataAuth, setFormDataAuth] = useState({});
  const handleAddOrder = e => {
    e.preventDefault();
    // const selectedDeliveryOption = deliveryOptions[selectedOption].label;
    // const selectedPaymentOptionData =
    //   paymentOptions[selectedPaymentOption].label;

    if (auth._id) {
      const newOrderAuth = {
        ...formDataAuth,
        basket: basket,
        cityDelivery: selectedCity,
        department: selectedDepartment,
        name: userIn.userName,
        email: userIn.phone,
        email: userIn.email,
        address1: userIn.location,
      };

      dispatch(addOrder(newOrderAuth));
      setOrder([...order, newOrderAuth]);
      localStorage.setItem('formData', JSON.stringify(newOrderAuth));
      console.log(newOrderAuth);
    } else {
      const newOrder = {
        ...formData,
        basket: basket,
        cityDelivery: selectedCity,
        // deliveryMethod: selectedDeliveryOption,
        department: selectedDepartment,
        // paymentMethod: selectedPaymentOptionData,
      };

      dispatch(addOrder(newOrder));
      setOrder([...order, newOrder]);
      localStorage.setItem('formData', JSON.stringify(newOrder));
      console.log(newOrder);
    }
  };

  const restoreFormDataFromLocalStorage = () => {
    const savedFormData = localStorage.getItem('formData');
    if (savedFormData) {
      setFormData(JSON.parse(savedFormData));
    }
  };

  useEffect(() => {
    restoreFormDataFromLocalStorage();
  }, []);

  const handleInputChange = e => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setFormData({
      ...formData,
      [inputName]: inputValue,
    });

    localStorage.setItem('formData', JSON.stringify(formData));
  };

  return (
    <DeliverySection>
      <Container>
        <Delivery>
          <DeliveryInfoBox>
            <CheckOutTitle id="deliveryTitle">Delivery</CheckOutTitle>
            <CheckOutTitle id="addressTitle" style={{ display: 'none' }}>
              ADDRESS
            </CheckOutTitle>
            <CheckOutTitle id="paymentTitle" style={{ display: 'none' }}>
              payment
            </CheckOutTitle>

            {/* deliveryBlock */}
            <DeliveryBlock id="deliveryBlock">
              <DeliveryBlockOptions>
                <DeliveryBlockOptionsBoxLable>
                  <DeliveryBlockOptionsLable
                    onClick={() => handleOptionClick(0)}
                    onChange={handleInputChange}
                  >
                    <DeliveryBlockOptionsInput type="radio" name="delivery" />
                    <NovaPoshtaIcon />

                    <DeliveryBlockOptionsLableBox>
                      <DeliveryBlockOptionsTitle>
                        NovaPoshta
                      </DeliveryBlockOptionsTitle>
                      <DeliveryBlockOptionsTitleDiscr>
                        Cash upon delivery, card payment Visa, Master Card
                      </DeliveryBlockOptionsTitleDiscr>
                    </DeliveryBlockOptionsLableBox>
                  </DeliveryBlockOptionsLable>

                  {selectedOption === 0 && (
                    <BoxPost>
                      <PoshtaBoxTitle>Select point office </PoshtaBoxTitle>

                      <PoshtaBox>
                        <NovaPoshta
                          setSelectedCity={setSelectedCity}
                          setSelectedDepartment={setSelectedDepartment}
                        />
                      </PoshtaBox>
                    </BoxPost>
                  )}
                </DeliveryBlockOptionsBoxLable>

                <DeliveryBlockOptionsBoxLable>
                  <DeliveryBlockOptionsLable
                    onClick={() => handleOptionClick(1)}
                    onChange={handleInputChange}
                  >
                    <DeliveryBlockOptionsInput type="radio" name="delivery" />
                    <UkrPoshtaIcon />

                    <DeliveryBlockOptionsLableBox>
                      <DeliveryBlockOptionsTitle>
                        UkrPoshta
                      </DeliveryBlockOptionsTitle>
                      <DeliveryBlockOptionsTitleDiscr>
                        Cash upon delivery, card payment Visa, Master Card
                      </DeliveryBlockOptionsTitleDiscr>
                    </DeliveryBlockOptionsLableBox>
                  </DeliveryBlockOptionsLable>

                  {selectedOption === 1 && (
                    <BoxPost>
                      <PoshtaBoxTitle>Select point office </PoshtaBoxTitle>

                      <PoshtaBox>
                        <UkrPoshta
                          setSelectedCity={setSelectedCity}
                          setSelectedDepartment={setSelectedDepartment}
                        />
                      </PoshtaBox>
                    </BoxPost>
                  )}
                </DeliveryBlockOptionsBoxLable>

                <DeliveryBlockOptionsBoxLable>
                  <DeliveryBlockOptionsLable
                    onClick={() => handleOptionClick(2)}
                    onChange={handleInputChange}
                  >
                    <DeliveryBlockOptionsInput type="radio" name="delivery" />
                    {/* <ShippingFast style={{ width: 55 }} /> */}
                    <DeliveryBlockOptionsLableBox>
                      <DeliveryBlockOptionsTitle>
                        Courier delivery
                      </DeliveryBlockOptionsTitle>
                      <DeliveryBlockOptionsTitleDiscr>
                        Cash upon delivery, card payment Visa, Master Card
                      </DeliveryBlockOptionsTitleDiscr>
                    </DeliveryBlockOptionsLableBox>
                  </DeliveryBlockOptionsLable>
                </DeliveryBlockOptionsBoxLable>

                <DeliveryBlockOptionsBtn
                  type="button"
                  onClick={showDeliveryInfoBlock}
                >
                  Next
                </DeliveryBlockOptionsBtn>
              </DeliveryBlockOptions>
            </DeliveryBlock>
          </DeliveryInfoBox>

          {/* deliveryInfoBlock */}
          <DeliveryInfoBlock id="deliveryInfoBlock" style={{ display: 'none' }}>
            {auth._id ? (
              <div>
                <p>{userIn.userName}</p>
                <p>{userIn.phone}</p>
                <p>{userIn.email}</p>
                <p>{userIn.location}</p>
              </div>
            ) : (
              <DeliveryForm>
                <DeliveryFormLable>
                  <DeliveryFormLableText>First name</DeliveryFormLableText>
                  <DeliveryFormInput
                    onChange={handleInputChange}
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    required
                    // placeholder="George"
                  />
                </DeliveryFormLable>

                <DeliveryFormLable>
                  <DeliveryFormLableText>Last name</DeliveryFormLableText>
                  <DeliveryFormInput
                    onChange={handleInputChange}
                    type="text"
                    id="surname"
                    name="surname"
                    value={formData.surname}
                    required
                    // placeholder="Washington"
                  />
                </DeliveryFormLable>

                <DeliveryFormLable>
                  <DeliveryFormLableText>Company</DeliveryFormLableText>
                  <DeliveryFormInput
                    onChange={handleInputChange}
                    type="text"
                    id="company"
                    value={formData.company}
                    name="company"
                  />
                </DeliveryFormLable>

                <DeliveryFormLable>
                  <DeliveryFormLableText>Address 1</DeliveryFormLableText>
                  <DeliveryFormInput
                    onChange={handleInputChange}
                    type="text"
                    id="address1"
                    value={formData.address1}
                    name="address1"
                    required
                  />
                </DeliveryFormLable>

                <DeliveryFormLable>
                  <DeliveryFormLableText>Address 2</DeliveryFormLableText>
                  <DeliveryFormInput
                    onChange={handleInputChange}
                    type="text"
                    id="address2"
                    name="address2"
                    value={formData.address2}
                  />
                </DeliveryFormLable>

                <DeliveryFormLable>
                  <DeliveryFormLableText>City</DeliveryFormLableText>
                  <DeliveryFormInput
                    onChange={handleInputChange}
                    type="text"
                    id="town"
                    name="town"
                    value={formData.town}
                    required
                  />
                </DeliveryFormLable>

                <DeliveryFormLable>
                  <DeliveryFormLableText>State</DeliveryFormLableText>
                  <DeliveryFormInput
                    onChange={handleInputChange}
                    type="text"
                    id="state"
                    name="state"
                    value={formData.state}
                    required
                  />
                </DeliveryFormLable>

                <DeliveryFormLable>
                  <DeliveryFormLableText>Zip code</DeliveryFormLableText>
                  <DeliveryFormInput
                    onChange={handleInputChange}
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    value={formData.zipCode}
                    required
                  />
                </DeliveryFormLable>

                <DeliveryFormLable>
                  <DeliveryFormLableText>Phone</DeliveryFormLableText>
                  <DeliveryFormInput
                    onChange={handleInputChange}
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    required
                    placeholder="Phone"
                  />
                </DeliveryFormLable>

                <DeliveryFormLable>
                  <DeliveryFormLableText>Email</DeliveryFormLableText>
                  <DeliveryFormInput
                    onChange={handleInputChange}
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    required
                    placeholder="george.washington@gmail.com"
                  />
                </DeliveryFormLable>
              </DeliveryForm>
            )}
            <Btnwrapper>
              <DeliveryFormBtn type="button" onClick={goBackToDelivery}>
                Back
              </DeliveryFormBtn>

              <DeliveryFormBtnFinish type="button" onClick={showPayment}>
                Save
              </DeliveryFormBtnFinish>
            </Btnwrapper>
          </DeliveryInfoBlock>

          {/* Payment */}
          <div id="paymentBlock" style={{ display: 'none' }}>
            <PaymentOptionBox>
              <PaymentBlockOptionsLable
                onClick={() => handlePaymentOptionClick(0)}
              >
                <PaymentBlockOptionsInput type="radio" name="payment" />
                <LIQPAY />

                <DeliveryBlockOptionsLableBox>
                  <DeliveryBlockOptionsTitle>
                    Card or e-wallet
                  </DeliveryBlockOptionsTitle>
                  <DeliveryBlockOptionsTitleDiscr>
                    Visa, Master Card, Apple Pay, Google Pay
                  </DeliveryBlockOptionsTitleDiscr>
                </DeliveryBlockOptionsLableBox>
              </PaymentBlockOptionsLable>
            </PaymentOptionBox>

            <PaymentOptionBox>
              <PaymentBlockOptionsLable
                onClick={() => handlePaymentOptionClick(1)}
                onChange={handleInputChange}
              >
                <PaymentBlockOptionsInput type="radio" name="payment" />
                <Wallet style={{ width: 65 }} />

                <DeliveryBlockOptionsLableBox>
                  <DeliveryBlockOptionsTitle>
                    Cash upon delivery
                  </DeliveryBlockOptionsTitle>
                  <DeliveryBlockOptionsTitleDiscr>
                    Only on delivery by courier Meest
                  </DeliveryBlockOptionsTitleDiscr>
                </DeliveryBlockOptionsLableBox>
              </PaymentBlockOptionsLable>
            </PaymentOptionBox>

            <PaymentFormBtnBox>
              <PaymentFormBtn type="button" onClick={goBackToDeliveryInfo}>
                Back
              </PaymentFormBtn>
              <PaymentFormBtnFinish type="submit" onClick={handleAddOrder}>
                Total
              </PaymentFormBtnFinish>
            </PaymentFormBtnBox>
          </div>
        </Delivery>
      </Container>
    </DeliverySection>
  );
};
