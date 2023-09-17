import React, { useState } from 'react';
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
} from './Order.styled';
import { Container } from 'components/baseStyles/CommonStyle.styled';
import { selectBasket } from 'redux/basket/selectors';
import { useSelector } from 'react-redux';
import { BasketCompTitle, ShippingFast } from '../Checkout.styled';

export const Order = () => {
  const basket = useSelector(selectBasket);
  const [selectedPaymentOption, setSelectedPaymentOption] = useState('');
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedOption1, setSelectedOption1] = useState(null);
  const [showPaymentInfo, setShowPaymentnfo] = useState(false);
  const [order, setOrder] = useState([]);
  const [showMenu, setShowMenu] = useState(false);

  const handlePaymentOptionChange = event => {
    setSelectedPaymentOption(event.target.value);
    setShowPaymentnfo(event.target.value === 'Visa/Mastercard');
  };

  const showDeliveryInfoBlock = () => {
    const deliveryBlock = document.getElementById('deliveryBlock');
    const deliveryInfoBlock = document.getElementById('deliveryInfoBlock');
    const addressTitle = document.getElementById('addressTitle');
    const deliveryTitle = document.getElementById('deliveryTitle');

    deliveryBlock.style.display = 'none';
    deliveryInfoBlock.style.display = 'block';
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
    deliveryInfoBlock.style.display = 'block';
    paymentTitle.style.display = 'none';
    addressTitle.style.display = 'block';
  };

  const deliveryOptions = [
    { value: 'Нова Пошта', label: 'Нова Пошта' },
    { value: 'Укр Пошта', label: 'Укр Пошта' },
    { value: "Доставка кур'єром", label: "Доставка кур'єром" },
  ];

  const handleAddOrder = e => {
    e.preventDefault();
    const selectedDeliveryOption = deliveryOptions[selectedOption].label;

    const newOrder = {
      basket: basket,
      deliveryMethod: selectedDeliveryOption,
      name: document.getElementById('name').value,
      surname: document.getElementById('surname').value,
      company: document.getElementById('company').value,
      email: document.getElementById('email').value,
      phone: document.getElementById('phone').value,
      address1: document.getElementById('address1').value,
      address2: document.getElementById('address2').value,
      city: document.getElementById('city').value,
      state: document.getElementById('state').value,
      zipCode: document.getElementById('zipCode').value,
      paymentMethod: selectedPaymentOption,
    };
    setOrder([...order, newOrder]);
    console.log(newOrder);
  };

  const handleOptionClick = index => {
    setSelectedOption(index);
    setShowMenu(true);
  };

  const handleOptionClickLableCard = index => {
    setSelectedOption1(index);
  };

  return (
    <DeliverySection>
      <Container>
        <Delivery>
          <DeliveryInfoBox>
            <BasketCompTitle id="deliveryTitle">Delivery</BasketCompTitle>
            <BasketCompTitle id="addressTitle" style={{ display: 'none' }}>
              ADDRESS
            </BasketCompTitle>
            <BasketCompTitle id="paymentTitle" style={{ display: 'none' }}>
              payment
            </BasketCompTitle>

            {/* deliveryBlock */}
            <DeliveryBlock id="deliveryBlock">
              <DeliveryBlockOptions>
                <DeliveryBlockOptionsLable onClick={() => handleOptionClick(0)}>
                  <DeliveryBlockOptionsInput type="radio" name="delivery" />
                  <NovaPoshtaIcon />

                  <DeliveryBlockOptionsLableBox>
                    <DeliveryBlockOptionsTitle>
                      Нова Пошта
                    </DeliveryBlockOptionsTitle>
                    <DeliveryBlockOptionsTitleDiscr>
                      Cash upon delivery, card payment Visa, Master Card
                    </DeliveryBlockOptionsTitleDiscr>
                  </DeliveryBlockOptionsLableBox>

                  {showMenu && selectedOption !== null && (
                    <div>
                      <p>екст: {deliveryOptions[selectedOption].label}</p>
                      <p>ттекст: {deliveryOptions[selectedOption].value}</p>
                    </div>
                  )}
                </DeliveryBlockOptionsLable>

                <DeliveryBlockOptionsLable onClick={() => handleOptionClick(1)}>
                  <DeliveryBlockOptionsInput type="radio" name="delivery" />
                  <UkrPoshtaIcon />

                  <DeliveryBlockOptionsLableBox>
                    <DeliveryBlockOptionsTitle>
                      Укр Пошта
                    </DeliveryBlockOptionsTitle>
                    <DeliveryBlockOptionsTitleDiscr>
                      Cash upon delivery, card payment Visa, Master Card
                    </DeliveryBlockOptionsTitleDiscr>
                  </DeliveryBlockOptionsLableBox>
                </DeliveryBlockOptionsLable>

                <DeliveryBlockOptionsLable onClick={() => handleOptionClick(2)}>
                  <DeliveryBlockOptionsInput type="radio" name="delivery" />
                  <ShippingFast style={{ width: 55 }} />
                  <DeliveryBlockOptionsLableBox>
                    <DeliveryBlockOptionsTitle>
                      Доставка кур&#39;єром
                    </DeliveryBlockOptionsTitle>
                    <DeliveryBlockOptionsTitleDiscr>
                      Cash upon delivery, card payment Visa, Master Card
                    </DeliveryBlockOptionsTitleDiscr>
                  </DeliveryBlockOptionsLableBox>
                </DeliveryBlockOptionsLable>
              </DeliveryBlockOptions>

              <DeliveryFormBtn type="button" onClick={showDeliveryInfoBlock}>
                Next
              </DeliveryFormBtn>
            </DeliveryBlock>
          </DeliveryInfoBox>

          {/* deliveryInfoBlock */}
          <div>
            <div
              id="deliveryInfoBlock"
              style={{ display: 'none', position: 'relative' }}
            >
              <DeliveryForm>
                <DeliveryFormLable>
                  <DeliveryFormLableText>First name</DeliveryFormLableText>
                  <DeliveryFormInput
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="George"
                  />
                </DeliveryFormLable>

                <DeliveryFormLable>
                  <DeliveryFormLableText>Last name</DeliveryFormLableText>
                  <DeliveryFormInput
                    type="text"
                    id="surname"
                    name="surname"
                    required
                    placeholder="Washington"
                  />
                </DeliveryFormLable>

                <DeliveryFormLable>
                  <DeliveryFormLableText>Company</DeliveryFormLableText>
                  <DeliveryFormInput type="text" id="company" name="company" />
                </DeliveryFormLable>

                <DeliveryFormLable>
                  <DeliveryFormLableText>Address 1</DeliveryFormLableText>
                  <DeliveryFormInput
                    type="text"
                    id="address1"
                    name="address1"
                    required
                  />
                </DeliveryFormLable>

                <DeliveryFormLable>
                  <DeliveryFormLableText>Address 2</DeliveryFormLableText>
                  <DeliveryFormInput
                    type="text"
                    id="address2"
                    name="address2"
                  />
                </DeliveryFormLable>

                <DeliveryFormLable>
                  <DeliveryFormLableText>City</DeliveryFormLableText>
                  <DeliveryFormInput
                    type="text"
                    id="city"
                    name="city"
                    required
                  />
                </DeliveryFormLable>

                <DeliveryFormLable>
                  <DeliveryFormLableText>State</DeliveryFormLableText>
                  <DeliveryFormInput
                    type="text"
                    id="state"
                    name="state"
                    required
                  />
                </DeliveryFormLable>

                <DeliveryFormLable>
                  <DeliveryFormLableText>Zip code</DeliveryFormLableText>
                  <DeliveryFormInput
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    required
                  />
                </DeliveryFormLable>

                <DeliveryFormLable>
                  <DeliveryFormLableText>Phone</DeliveryFormLableText>
                  <DeliveryFormInput
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    placeholder="Phone"
                  />
                </DeliveryFormLable>

                <DeliveryFormLable>
                  <DeliveryFormLableText>Email</DeliveryFormLableText>
                  <DeliveryFormInput
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="george.washington@gmail.com"
                  />
                </DeliveryFormLable>
              </DeliveryForm>
              <DeliveryFormBtn type="button" onClick={goBackToDelivery}>
                Back
              </DeliveryFormBtn>

              <DeliveryFormBtnFinish type="button" onClick={showPayment}>
                Save
              </DeliveryFormBtnFinish>
            </div>
          </div>

          {/* Payment */}
          <div id="paymentBlock" style={{ display: 'none' }}>
            <DeliveryBlockOptions>
              <DeliveryBlockOptionsLable onClick={() => handleOptionClick(3)}>
                <DeliveryBlockOptionsInput type="radio" name="delivery" />
                <UkrPoshtaIcon />

                <DeliveryBlockOptionsLableBox>
                  <DeliveryBlockOptionsTitle>
                    Card or e-wallet
                  </DeliveryBlockOptionsTitle>
                  <DeliveryBlockOptionsTitleDiscr>
                    Visa, Master Card, Apple Pay, Google Pay
                  </DeliveryBlockOptionsTitleDiscr>
                </DeliveryBlockOptionsLableBox>
              </DeliveryBlockOptionsLable>

              <DeliveryBlockOptionsLable onClick={() => handleOptionClick(4)}>
                <DeliveryBlockOptionsInput type="radio" name="delivery" />
                <ShippingFast style={{ width: 55 }} />
                <DeliveryBlockOptionsLableBox>
                  <DeliveryBlockOptionsTitle>
                    Cash upon delivery
                  </DeliveryBlockOptionsTitle>
                  <DeliveryBlockOptionsTitleDiscr>
                    Only on delivery by courier Meest
                  </DeliveryBlockOptionsTitleDiscr>
                </DeliveryBlockOptionsLableBox>
              </DeliveryBlockOptionsLable>
            </DeliveryBlockOptions>

            <DeliveryFormBtn type="button" onClick={goBackToDeliveryInfo}>
              Back
            </DeliveryFormBtn>
            <DeliveryFormBtnFinish type="submit" onClick={handleAddOrder}>
              Total
            </DeliveryFormBtnFinish>
          </div>
        </Delivery>
      </Container>
    </DeliverySection>
  );
};
