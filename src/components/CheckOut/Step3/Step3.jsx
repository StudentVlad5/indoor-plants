import { useAuth } from 'hooks/useAuth';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from 'redux/auth/selectors';
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
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { selectBasket } from 'redux/basket/selectors';
import { useEffect } from 'react';
import {
  getFromStorage,
  removeItem,
  saveToStorage,
} from 'services/localStorService';

const Step3 = () => {
  // const basket = useSelector(selectBasket);
  const [selectedPaymentOption, setSelectedPaymentOption] = useState('');
  // const [order, setOrder] = useState([]);
  const [formDataAuth, setFormDataAuth] = useState({});
  const [isDisabled, setDisabled] = useState(true);

  //   const [selectedCity, setSelectedCity] = useState('');
  //   const [selectedDepartment, setSelectedDepartment] = useState('');
  const auth = useSelector(getUser);
  let { userIn } = useAuth();

  // const selectedCity = getFromStorage('selectedCity');
  // const selectedDepartment = getFromStorage('selectedDepartment');
  // const selectedDeliveryOption = getFromStorage('selectedDeliveryOption');
  // const dispatch = useDispatch();

  const handlePaymentOptionClick = index => {
    const selectedPaymentOptionData = paymentOptions[index].label;
    if (selectedPaymentOption !== null) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }

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

  // const handleAddOrder = e => {
  //   e.preventDefault();

  //   if (auth._id) {
  //     const newOrderAuth = {
  //       ...formDataAuth,
  //       basket: basket,
  //       cityDelivery: selectedCity,
  //       department: selectedDepartment,
  //       selectedDeliveryOption: selectedDeliveryOption,
  //       name: formData.name + ' ' + formData.surname,
  //       company: formData.company,
  //       city: formData.city,
  //       state: formData.state,
  //       phone: formData.phone,
  //       email: formData.email,
  //       address1: formData.address1,
  //       address2: formData.address2,
  //       zipCode: formData.zipCode,
  //     };

  //     dispatch(addOrder(newOrderAuth));
  //     saveToStorage('formData', newOrderAuth);
  //     console.log(newOrderAuth);
  //   } else {
  //     const newOrder = {
  //       ...formData,
  //       basket: basket,
  //       cityDelivery: selectedCity,
  //       selectedDeliveryOption: selectedDeliveryOption,
  //       department: selectedDepartment,
  //     };

  //     // dispatch(addOrder(newOrder));
  //     setOrder([...order, newOrder]);
  //     saveToStorage('formData', updatedFormData);
  //     console.log(updatedFormData);
  //     removeItem('step');
  //   }
  // };

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
      <PaymentBlockOptionsLable
        onClick={() => handlePaymentOptionClick(0)}
        onChange={handleInputChange}
      >
        <PaymentBlockOptionsInput type="radio" name="payment" />
        <Wallet style={{ width: 65 }} />

        <DeliveryBlockOptionsLableBox>
          <DeliveryBlockOptionsTitle>
            Terms of payment
          </DeliveryBlockOptionsTitle>
        </DeliveryBlockOptionsLableBox>
      </PaymentBlockOptionsLable>

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
        </DeliveryBlockOptionsLableBox>
      </PaymentBlockOptionsLable>

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
        </DeliveryBlockOptionsLableBox>
      </PaymentBlockOptionsLable>

      <PaymentFormBtnBox>
        <Link to={`/checkout/step2`}>
          <PaymentFormBtn type="button">Back</PaymentFormBtn>
        </Link>

        <Link to={`/basket`}>
          <PaymentFormBtnFinish
            type="submit"
            disabled={isDisabled}
            isDisabled={isDisabled}
            style={{
              cursor: isDisabled ? 'not-allowed' : 'pointer',
            }}
            onClick={() => {
              saveToStorage('step', '4');
              // handleAddOrder;
            }}
          >
            Total
          </PaymentFormBtnFinish>
        </Link>
      </PaymentFormBtnBox>
    </Payment>
  );
};

export default Step3;
