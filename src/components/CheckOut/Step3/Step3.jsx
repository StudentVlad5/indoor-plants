import React, { useEffect } from 'react';
import {
  LIQPAY,
  Wallet,
  PaymentFormBtn,
  PaymentFormBtnFinish,
  PaymentFormBtnBox,
  PaymentBlockOptionsLable,
  PaymentBlockOptionsInput,
  DeliveryBlockOptionsTitle,
  DeliveryBlockOptionsLableBox,
  Payment,
} from '../Order/Order.styled';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { saveToStorage, getFromStorage } from 'services/localStorService';

const Step3 = () => {
  const [selectedPaymentOption, setSelectedPaymentOption] = useState(
    getFromStorage('selectedPaymentOption')
      ? getFromStorage('selectedPaymentOption')
      : '',
  );
  const navigate = useNavigate();
  const [isDisabled, setDisabled] = useState(false);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  useEffect(() => {
    selectedPaymentOption !== '' ? setDisabled(false) : setDisabled(true);
  }, [selectedPaymentOption]);

  const handleAddOrder = e => {
    e.preventDefault();
    saveToStorage('step', '4');
    navigate('/checkout/step4', { replace: true });
  };

  const handleInputChange = e => {
    setSelectedPaymentOption(e.target.value);
    saveToStorage('selectedPaymentOption', e.target.value);
  };

  return (
    <Payment>
      <PaymentBlockOptionsLable>
        <PaymentBlockOptionsInput
          type="radio"
          name="payment"
          value="Payment by bank card"
          checked={selectedPaymentOption === 'Payment by bank card'}
          onChange={handleInputChange}
        />
        <LIQPAY />
        <DeliveryBlockOptionsLableBox>
          <DeliveryBlockOptionsTitle>
            Payment by bank card
          </DeliveryBlockOptionsTitle>
        </DeliveryBlockOptionsLableBox>
      </PaymentBlockOptionsLable>
      <PaymentBlockOptionsLable>
        <PaymentBlockOptionsInput
          type="radio"
          name="payment"
          value="Payment on account"
          checked={selectedPaymentOption === 'Payment on account'}
          onChange={handleInputChange}
        />
        <Wallet style={{ width: 65 }} />
        <DeliveryBlockOptionsLableBox>
          <DeliveryBlockOptionsTitle>
            Payment on account
          </DeliveryBlockOptionsTitle>
        </DeliveryBlockOptionsLableBox>
      </PaymentBlockOptionsLable>
      <PaymentBlockOptionsLable>
        <PaymentBlockOptionsInput
          type="radio"
          name="payment"
          value="Cash on delivery"
          checked={selectedPaymentOption === 'Cash on delivery'}
          onChange={handleInputChange}
        />
        <Wallet style={{ width: 65 }} />
        <DeliveryBlockOptionsLableBox>
          <DeliveryBlockOptionsTitle>
            Cash on delivery
          </DeliveryBlockOptionsTitle>
        </DeliveryBlockOptionsLableBox>
      </PaymentBlockOptionsLable>
      <PaymentFormBtnBox>
        <Link to={`/checkout/step2`}>
          <PaymentFormBtn type="button">Back</PaymentFormBtn>
        </Link>
        <PaymentFormBtnFinish
          type="button"
          onClick={handleAddOrder}
          disabled={isDisabled}
        >
          Next
        </PaymentFormBtnFinish>
      </PaymentFormBtnBox>
    </Payment>
  );
};

export default Step3;
