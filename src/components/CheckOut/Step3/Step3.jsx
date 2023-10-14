import { useAuth } from 'hooks/useAuth';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from 'redux/auth/selectors';
import {
  PaymentOptionBox,
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
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { selectBasket } from 'redux/basket/selectors';
import { useEffect } from 'react';
import { addOrder } from 'redux/order/operations';
import {
  getFromStorage,
  removeItem,
  saveToStorage,
} from 'services/localStorService';

const Step3 = () => {
  const basket = useSelector(selectBasket);
  const [selectedPaymentOption, setSelectedPaymentOption] = useState('');
  const [order, setOrder] = useState([]);
  const [formDataAuth, setFormDataAuth] = useState({});

  //   const [selectedCity, setSelectedCity] = useState('');
  //   const [selectedDepartment, setSelectedDepartment] = useState('');
  const dispatch = useDispatch();
  const auth = useSelector(getUser);
  let { userIn } = useAuth();

  const selectedCity = getFromStorage('selectedCity');
  const selectedDepartment = getFromStorage('selectedDepartment');
  const selectedDeliveryOption = getFromStorage('selectedDeliveryOption');

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

  const paymentOptions = [
    { value: 'Terms of payment', label: 'Terms of payment' },
    { value: 'Cash on delivery', label: 'Cash on delivery' },
    { value: ' Payment on account', label: ' Payment on account' },
  ];

  const [formData, setFormData] = useState({
    name: auth._id ? userIn.address.userName : '',
    surname: auth._id ? userIn.address.surname : '',
    company: auth._id ? userIn.address.company : '',
    email: auth._id ? userIn.address.email : '',
    phone: auth._id ? userIn.address.phone : '',
    address1: auth._id ? userIn.address.address1 : '',
    address2: auth._id ? userIn.address.address2 : '',
    city: auth._id ? userIn.address.city : '',
    state: auth._id ? userIn.address.state : '',
    zipCode: auth._id ? userIn.address.zipCode : '',
  });

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
        selectedDeliveryOption: selectedDeliveryOption,
        name: formData.name + ' ' + formData.surname,
        company: formData.company,
        city: formData.city,
        state: formData.state,
        phone: formData.phone,
        email: formData.email,
        address1: formData.address1,
        address2: formData.address2,
        zipCode: formData.zipCode,
      };

      dispatch(addOrder(newOrderAuth));
      setOrder([...order, newOrderAuth]);
      saveToStorage('formData', newOrderAuth);
      console.log(newOrderAuth);
    } else {
      const newOrder = {
        ...formData,
        basket: basket,
        cityDelivery: selectedCity,
        selectedDeliveryOption: selectedDeliveryOption,
        // deliveryMethod: selectedDeliveryOption,
        department: selectedDepartment,
        // paymentMethod: selectedPaymentOptionData,
      };

      dispatch(addOrder(newOrder));
      setOrder([...order, newOrder]);
      saveToStorage('formData', newOrder);
      console.log(newOrder);
      removeItem('step');
    }
  };

  const restoreFormDataFromLocalStorage = () => {
    const savedFormData = getFromStorage('formData');
    if (savedFormData) {
      setFormData(savedFormData);
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

    saveToStorage('formData', formData);
  };

  return (
    <Payment>
      {/* <PaymentOptionBox> */}
      <PaymentBlockOptionsLable onClick={() => handlePaymentOptionClick(0)}>
        <PaymentBlockOptionsInput type="radio" name="payment" />
        <LIQPAY />

        <DeliveryBlockOptionsLableBox>
          <DeliveryBlockOptionsTitle>
            Terms of payment
          </DeliveryBlockOptionsTitle>
          {/* <DeliveryBlockOptionsTitleDiscr>
                Visa, Master Card, Apple Pay, Google Pay
              </DeliveryBlockOptionsTitleDiscr> */}
        </DeliveryBlockOptionsLableBox>
      </PaymentBlockOptionsLable>
      {/* </PaymentOptionBox> */}

      {/* <PaymentOptionBox> */}
      <PaymentBlockOptionsLable
        onClick={() => handlePaymentOptionClick(1)}
        onChange={handleInputChange}
      >
        <PaymentBlockOptionsInput type="radio" name="payment" />
        <Wallet style={{ width: 65 }} />

        <DeliveryBlockOptionsLableBox>
          <DeliveryBlockOptionsTitle>
            Cash on delivery
          </DeliveryBlockOptionsTitle>
          {/* <DeliveryBlockOptionsTitleDiscr>
                Only on delivery by courier Meest
              </DeliveryBlockOptionsTitleDiscr> */}
        </DeliveryBlockOptionsLableBox>
      </PaymentBlockOptionsLable>
      {/* </PaymentOptionBox> */}

      {/* <PaymentOptionBox> */}
      <PaymentBlockOptionsLable
        onClick={() => handlePaymentOptionClick(2)}
        onChange={handleInputChange}
      >
        <PaymentBlockOptionsInput type="radio" name="payment" />
        <Wallet style={{ width: 65 }} />

        <DeliveryBlockOptionsLableBox>
          <DeliveryBlockOptionsTitle>
            Payment on account
          </DeliveryBlockOptionsTitle>
          {/* <DeliveryBlockOptionsTitleDiscr>
                Only on delivery by courier Meest
              </DeliveryBlockOptionsTitleDiscr> */}
        </DeliveryBlockOptionsLableBox>
      </PaymentBlockOptionsLable>
      {/* </PaymentOptionBox> */}

      <PaymentFormBtnBox>
        <Link to={`/checkout/step2`}>
          <PaymentFormBtn
            type="button"
            //   onClick={goBackToDeliveryInfo}
          >
            Back
          </PaymentFormBtn>
        </Link>

        <Link to={`/checkout/step4`}>
          <PaymentFormBtnFinish
            type="submit"
            // onClick={handleAddOrder}
            onClick={saveToStorage('step', '4')}
          >
            Total
          </PaymentFormBtnFinish>
        </Link>
      </PaymentFormBtnBox>
    </Payment>
  );
};

export default Step3;
