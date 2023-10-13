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
} from '../Order/Order.styled';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { selectBasket } from 'redux/basket/selectors';
import { useEffect } from 'react';
import { addOrder } from 'redux/order/operations';

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

  const selectedCity = localStorage.getItem('selectedCity');
  const selectedDepartment = localStorage.getItem('selectedDepartment');
  const selectedDeliveryOption = localStorage.getItem('selectedDeliveryOption');

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
    { value: 'Card or e-wallet', label: 'Card or e-wallet' },
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
      localStorage.setItem('formData', JSON.stringify(newOrderAuth));
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
    <div>
      <PaymentOptionBox>
        <PaymentBlockOptionsLable onClick={() => handlePaymentOptionClick(0)}>
          <PaymentBlockOptionsInput type="radio" name="payment" />
          <LIQPAY />

          <DeliveryBlockOptionsLableBox>
            <DeliveryBlockOptionsTitle>
              Card or e-wallet
            </DeliveryBlockOptionsTitle>
            {/* <DeliveryBlockOptionsTitleDiscr>
                Visa, Master Card, Apple Pay, Google Pay
              </DeliveryBlockOptionsTitleDiscr> */}
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
              Cash on delivery
            </DeliveryBlockOptionsTitle>
            {/* <DeliveryBlockOptionsTitleDiscr>
                Only on delivery by courier Meest
              </DeliveryBlockOptionsTitleDiscr> */}
          </DeliveryBlockOptionsLableBox>
        </PaymentBlockOptionsLable>
      </PaymentOptionBox>

      <PaymentOptionBox>
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
      </PaymentOptionBox>

      <PaymentFormBtnBox>
        <Link to={`/checkout/step2`}>
          <PaymentFormBtn
            type="button"
            //   onClick={goBackToDeliveryInfo}
          >
            Back
          </PaymentFormBtn>
        </Link>

        <Link to={`/basket`}>
          <PaymentFormBtnFinish type="submit" onClick={handleAddOrder}>
            Total
          </PaymentFormBtnFinish>
        </Link>
      </PaymentFormBtnBox>
    </div>
  );
};

export default Step3;
