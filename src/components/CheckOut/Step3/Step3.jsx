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
  // const basket = useSelector(selectBasket);
  const [selectedPaymentOption, setSelectedPaymentOption] = useState(
    getFromStorage('selectedPaymentOption')
      ? getFromStorage('selectedPaymentOption')
      : '',
  );
  // const [order, setOrder] = useState([]);
  // const [formDataAuth, setFormDataAuth] = useState({});
  const navigate = useNavigate();
  const [isDisabled, setDisabled] = useState(false);
  //   const [selectedCity, setSelectedCity] = useState('');
  //   const [selectedDepartment, setSelectedDepartment] = useState('');
  // const dispatch = useDispatch();
  // const auth = useSelector(getUser);
  // let { userIn } = useAuth();
  // const selectedCity = getFromStorage('selectedCity');
  // const selectedDepartment = getFromStorage('selectedDepartment');
  // const selectedDeliveryOption = getFromStorage('selectedDeliveryOption');

  // const handlePaymentOptionClick = index => {
  //   const selectedPaymentOptionData = paymentOptions[index].label;
  //   setSelectedPaymentOption(index);
  // setFormData({
  //   ...formData,
  //   selectedPaymentOption: selectedPaymentOptionData,
  // });
  // setFormDataAuth({
  //   ...formDataAuth,
  //   selectedPaymentOption: selectedPaymentOptionData,
  // });
  // };

  // const paymentOptions = [
  //   { value: 'Payment by bank card', label: 'Payment by bank card' },
  //   { value: 'Payment on account', label: 'Payment on account' },
  //   { value: 'Cash on delivery', label: 'Cash on delivery' },
  // ];

  // const [formData, setFormData] = useState({
  //   name: auth._id ? userIn.address.userName : '',
  //   surname: auth._id ? userIn.address.surname : '',
  //   company: auth._id ? userIn.address.company : '',
  //   email: auth._id ? userIn.address.email : '',
  //   phone: auth._id ? userIn.address.phone : '',
  //   address1: auth._id ? userIn.address.address1 : '',
  //   address2: auth._id ? userIn.address.address2 : '',
  //   city: auth._id ? userIn.address.city : '',
  //   state: auth._id ? userIn.address.state : '',
  //   zipCode: auth._id ? userIn.address.zipCode : '',
  // });

  useEffect(() => {
    selectedPaymentOption !== '' ? setDisabled(false) : setDisabled(true);
  }, [selectedPaymentOption]);

  const handleAddOrder = e => {
    e.preventDefault();
    saveToStorage('step', '4');
    navigate('/checkout/step4', { replace: true });
    // const selectedDeliveryOption = deliveryOptions[selectedOption].label;
    // const selectedPaymentOptionData =
    //   paymentOptions[selectedPaymentOption].label;

    // if (auth._id) {
    //   const newOrderAuth = {
    //     ...formDataAuth,
    //     basket: basket,
    //     cityDelivery: selectedCity,
    //     department: selectedDepartment,
    //     selectedDeliveryOption: selectedDeliveryOption,
    //     name: formData.name + ' ' + formData.surname,
    //     company: formData.company,
    //     city: formData.city,
    //     state: formData.state,
    //     phone: formData.phone,
    //     email: formData.email,
    //     address1: formData.address1,
    //     address2: formData.address2,
    //     zipCode: formData.zipCode,
    //   };

    //   dispatch(addOrder(newOrderAuth));
    //   setOrder([...order, newOrderAuth]);
    //   saveToStorage('formData', newOrderAuth);
    //   console.log(newOrderAuth);
    // } else {
    //   const newOrder = {
    //     ...formData,
    //     basket: basket,
    //     cityDelivery: selectedCity,
    //     selectedDeliveryOption: selectedDeliveryOption,
    // deliveryMethod: selectedDeliveryOption,
    // department: selectedDepartment,
    // paymentMethod: selectedPaymentOptionData,
    // };

    //   dispatch(addOrder(newOrder));
    //   setOrder([...order, newOrder]);
    //   saveToStorage('formData', newOrder);
    //   console.log(newOrder);
    //   removeItem('step');
    // }
  };

  // const restoreFormDataFromLocalStorage = () => {
  //   const savedFormData = getFromStorage('formData');
  //   if (savedFormData) {
  //     setFormData(savedFormData);
  //   }
  // };

  // useEffect(() => {
  //   restoreFormDataFromLocalStorage();
  // }, []);

  const handleInputChange = e => {
    console.log(e.target.value);
    // const inputName = e.target.name;
    // const inputValue = e.target.value;
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
          type="submit"
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
