import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../../redux/auth/selectors';
import { useSelector } from 'react-redux';
import {
  FormSection,
  FormContainer,
  TitleCheckOut,
  TextCheckOut,
  Btn,
  BasketCompTitle,
  AuthCheckOutBox,
  AuthCheckOutBox2,
  BasketCompList,
  Delivery,
  DeliveryInfoBox,
  DeliveryBlock,
  DeliveryBlockOptions,
  DeliveryInfoBoxTitle,
  DeliveryBlockOptionsLable,
  DeliveryBlockOptionsInput,
  DeliveryForm,
  DeliveryFormInput,
  DeliveryFormUser,
  DeliveryFormLable,
  DeliveryFormBtn,
  PaymentBlockOptionsLable,
  DeliveryFormBtnFinish,
} from './Checkout.styled';
import { CustomCheckOut } from 'components/CheckOut/CustomCheckOut';
import { selectBasket } from 'redux/basket/selectors';
import { TotalPrice } from './TotalPrice';
// import { useTranslation } from 'react-i18next';

export const CheckOut = () => {
  const auth = useSelector(getUser);
  // const { t } = useTranslation();
  const basket = useSelector(selectBasket);
  const [selectedPaymentOption, setSelectedPaymentOption] = useState('');
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedOption1, setSelectedOption1] = useState(null);
  const [showPaymentInfo, setShowPaymentnfo] = useState(false);
  const [order, setOrder] = useState([]);

  const handlePaymentOptionChange = event => {
    setSelectedPaymentOption(event.target.value);
    setShowPaymentnfo(event.target.value === 'Visa/Mastercard');
  };

  const showPaymentBlock = () => {
    const deliveryBlock = document.getElementById('deliveryBlock');
    const paymentBlock = document.getElementById('paymentBlock');
    deliveryBlock.style.display = 'none';
    paymentBlock.style.display = 'block';
  };

  const goBackToDelivery = () => {
    const deliveryBlock = document.getElementById('deliveryBlock');
    const paymentBlock = document.getElementById('paymentBlock');
    deliveryBlock.style.display = 'block';
    paymentBlock.style.display = 'none';
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
      patronymic: document.getElementById('patronymic').value,
      email: document.getElementById('email').value,
      phone: document.getElementById('phone').value,
      address: document.getElementById('address').value,
      house: document.getElementById('house').value,
      apartment: document.getElementById('apartment').value,
      paymentMethod: selectedPaymentOption,
    };
    setOrder([...order, newOrder]);
    console.log(newOrder);
  };

  const handleOptionClick = index => {
    setSelectedOption(index);
  };

  const handleOptionClickLableCard = index => {
    setSelectedOption1(index);
  };

  return (
    <FormSection>
      <FormContainer>
        <BasketCompTitle>Basket</BasketCompTitle>
        {basket.length !== 0 ? (
          <div>
            <BasketCompList>
              {basket.map((product, idx) => (
                <CustomCheckOut
                  key={`${idx}${product._id}`}
                  {...{ ...product, index: idx }}
                />
              ))}
            </BasketCompList>

            <TotalPrice />

            <Delivery>
              <DeliveryInfoBox>
                <DeliveryInfoBoxTitle>
                  1- Delivery information
                </DeliveryInfoBoxTitle>

                <DeliveryBlock id="deliveryBlock">
                  <DeliveryBlockOptions>
                    <DeliveryBlockOptionsLable
                      onClick={() => handleOptionClick(0)}
                      isSelected={selectedOption === 0}
                    >
                      <DeliveryBlockOptionsInput type="radio" name="delivery" />
                      <span>Нова Пошта</span>
                    </DeliveryBlockOptionsLable>

                    <DeliveryBlockOptionsLable
                      onClick={() => handleOptionClick(1)}
                      isSelected={selectedOption === 1}
                    >
                      <DeliveryBlockOptionsInput type="radio" name="delivery" />
                      <span>Укр Пошта</span>
                    </DeliveryBlockOptionsLable>

                    <DeliveryBlockOptionsLable
                      onClick={() => handleOptionClick(2)}
                      isSelected={selectedOption === 2}
                    >
                      <DeliveryBlockOptionsInput type="radio" name="delivery" />
                      <span>Доставка кур&#39;єром</span>
                    </DeliveryBlockOptionsLable>
                  </DeliveryBlockOptions>

                  <DeliveryForm>
                    <DeliveryFormUser>
                      <DeliveryFormLable>
                        <DeliveryFormInput
                          type="text"
                          id="name"
                          name="name"
                          required
                          placeholder="Name"
                        />
                      </DeliveryFormLable>

                      <DeliveryFormLable>
                        <DeliveryFormInput
                          type="text"
                          id="surname"
                          name="surname"
                          required
                          placeholder="Surname"
                        />
                      </DeliveryFormLable>

                      <DeliveryFormLable>
                        <DeliveryFormInput
                          type="text"
                          id="patronymic"
                          name="patronymic"
                          required
                          placeholder="Patronymic"
                        />
                      </DeliveryFormLable>

                      <DeliveryFormLable>
                        <DeliveryFormInput
                          type="email"
                          id="email"
                          name="email"
                          required
                          placeholder="E-mail"
                        />
                      </DeliveryFormLable>

                      <DeliveryFormLable>
                        <DeliveryFormInput
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          placeholder="Phone"
                        />
                      </DeliveryFormLable>
                    </DeliveryFormUser>

                    <DeliveryFormUser>
                      <DeliveryFormLable>
                        <DeliveryFormInput
                          type="text"
                          id="address"
                          name="address"
                          required
                          placeholder="Street"
                        />
                      </DeliveryFormLable>

                      <DeliveryFormLable>
                        <DeliveryFormInput
                          type="text"
                          id="house"
                          name="house"
                          required
                          placeholder="House"
                        />
                      </DeliveryFormLable>

                      <DeliveryFormLable>
                        <DeliveryFormInput
                          type="text"
                          id="apartment"
                          name="apartment"
                          required
                          placeholder="Apartment"
                        />
                      </DeliveryFormLable>
                    </DeliveryFormUser>

                    {/* Адреса нова пошта */}

                    <DeliveryFormBtn type="button" onClick={showPaymentBlock}>
                      Next
                    </DeliveryFormBtn>
                  </DeliveryForm>
                </DeliveryBlock>
              </DeliveryInfoBox>

              <div>
                <DeliveryInfoBoxTitle>2- Payment</DeliveryInfoBoxTitle>
                <div id="paymentBlock" style={{ display: 'none' }}>
                  <DeliveryBlock>
                    <DeliveryBlockOptions>
                      <PaymentBlockOptionsLable
                        onClick={() => handleOptionClickLableCard(3)}
                        isSelected={selectedOption1 === 3}
                      >
                        <DeliveryBlockOptionsInput
                          type="radio"
                          name="payment"
                          value="Visa/Mastercard"
                          checked={selectedPaymentOption === 'Visa/Mastercard'}
                          onChange={handlePaymentOptionChange}
                        />
                        <span>Visa/Mastercard</span>
                      </PaymentBlockOptionsLable>

                      <PaymentBlockOptionsLable
                        onClick={() => handleOptionClickLableCard(4)}
                        isSelected={selectedOption1 === 4}
                      >
                        <DeliveryBlockOptionsInput
                          type="radio"
                          name="payment"
                          value="PaymentOnDelivery"
                          checked={
                            selectedPaymentOption === 'PaymentOnDelivery'
                          }
                          onChange={handlePaymentOptionChange}
                        />
                        <span>
                          Оплата при отриманні замовлення (без комісій, ви
                          платите лише суму вказану на сайті)
                        </span>
                      </PaymentBlockOptionsLable>
                    </DeliveryBlockOptions>
                  </DeliveryBlock>

                  {showPaymentInfo && (
                    <div>
                      <p>номер</p>
                      <p>дата</p>
                    </div>
                  )}
                  <DeliveryFormBtn
                    type="button"
                    onClick={goBackToDelivery}
                    style={{ marginRight: 20 }}
                  >
                    Back
                  </DeliveryFormBtn>
                  <DeliveryFormBtnFinish type="submit" onClick={handleAddOrder}>
                    Finish
                  </DeliveryFormBtnFinish>
                </div>
              </div>
            </Delivery>
          </div>
        ) : (
          <AuthCheckOutBox2>
            <TitleCheckOut>YOUR Basket is empty</TitleCheckOut>
            <TextCheckOut>Please add an item to checkout</TextCheckOut>
            <Link to="/catalog" style={{ textDecoration: 'none' }}>
              <Btn>SHOP</Btn>
            </Link>
          </AuthCheckOutBox2>
        )}

        {!auth._id && (
          <AuthCheckOutBox>
            <TitleCheckOut>Do not see selected products?</TitleCheckOut>
            <TextCheckOut>
              Make sure you’re signed into your account
            </TextCheckOut>
            <Link to="/signin" style={{ textDecoration: 'none' }}>
              <Btn>SIGN IN</Btn>
            </Link>
          </AuthCheckOutBox>
        )}
      </FormContainer>
    </FormSection>
  );
};

export default CheckOut;
