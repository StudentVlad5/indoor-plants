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
  // DeliveryBlock,
  // DeliveryBlockOptions,
  // // DeliveryInfoBoxTitle,
  // DeliveryBlockOptionsLable,
  // DeliveryBlockOptionsInput,
  // DeliveryForm,
  // DeliveryFormInput,
  // DeliveryFormLable,
  // DeliveryFormBtn,
  // PaymentBlockOptionsLable,
  // DeliveryFormBtnFinish,
  // DeliverySection,
  // DeliveryFormLableText,
  // DeliveryBlockOptionsTitle,
  // DeliveryBlockOptionsLableBox,
  // DeliveryBlockOptionsTitleDiscr,
  // UkrPoshtaIcon,
  // NovaPoshtaIcon,
  // PoshtaBox,
  // DeliveryBlockOptionsBoxLable,
  // PoshtaBoxTitle,
  // BoxPost,
  // PaymentOptionBox,
  // LIQPAY,
  // Wallet,
  // PaymentFormBtn,
  // PaymentFormBtnFinish,
  // PaymentFormBtnBox,
  // // DeliveryBlockOptionsBtn,
  // PaymentBlockOptionsLable,
  // PaymentBlockOptionsInput,
  // Btnwrapper,
  // DeliveryInfoBlock,
  // DataContainer,
  // DataContainerText,
  // DataContainerPensil,
  // DataContainerCheckMark,
} from './Order.styled';
import { CheckOutTitle } from '../Checkout.styled';
import { Link } from 'react-router-dom';
import {
  PensilStyle,
} from 'components/UserComp/UserData/UserData.styled';

export const Order = () => {
  const basket = useSelector(selectBasket);
  const [selectedPaymentOption, setSelectedPaymentOption] = useState('');
  const [selectedOption, setSelectedOption] = useState(null);
  const [order, setOrder] = useState([]);
  const [showAddAddress, setShowAddAddress] = useState(false);

  const [selectedCity, setSelectedCity] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const dispatch = useDispatch();
  const auth = useSelector(getUser);
  let { userIn } = useAuth();
  // const orderRedux = useSelector(state => state.orders);

  const showDeliveryInfoBlock = () => {
    const deliveryBlock = document.getElementById('deliveryBlock');
    const deliveryInfoBlock = document.getElementById('deliveryInfoBlock');
    // const addressTitle = document.getElementById('addressTitle');
    // const deliveryTitle = document.getElementById('deliveryTitle');

    deliveryBlock.style.display = 'none';
    deliveryInfoBlock.style.display = 'block';
    // addressTitle.style.display = 'block';
    // deliveryTitle.style.display = 'none';
  };

  const goBackToDelivery = () => {
    const deliveryBlock = document.getElementById('deliveryBlock');
    const deliveryInfoBlock = document.getElementById('deliveryInfoBlock');
    // const addressTitle = document.getElementById('addressTitle');
    // const deliveryTitle = document.getElementById('deliveryTitle');

    deliveryBlock.style.display = 'block';
    deliveryInfoBlock.style.display = 'none';
    // addressTitle.style.display = 'none';
    // deliveryTitle.style.display = 'block';
  };

  const showPayment = () => {
    const paymentBlock = document.getElementById('paymentBlock');
    const deliveryInfoBlock = document.getElementById('deliveryInfoBlock');
    // const paymentTitle = document.getElementById('paymentTitle');
    // const addressTitle = document.getElementById('addressTitle');

    paymentBlock.style.display = 'block';
    deliveryInfoBlock.style.display = 'none';
    // paymentTitle.style.display = 'block';
    // addressTitle.style.display = 'none';
  };

  const goBackToDeliveryInfo = () => {
    const paymentBlock = document.getElementById('paymentBlock');
    const deliveryInfoBlock = document.getElementById('deliveryInfoBlock');
    // const paymentTitle = document.getElementById('paymentTitle');
    // const addressTitle = document.getElementById('addressTitle');

    paymentBlock.style.display = 'none';
    deliveryInfoBlock.style.display = 'block';
    // paymentTitle.style.display = 'none';
    // addressTitle.style.display = 'block';
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
        name: formData.name + ' ' + formData.surname,
        company: formData.company,
        city: formData.city,
        state: formData.state,
        phone: formData.phone,
        email: formData.email,
        address1: formData.address1,
        address2: formData.address2,
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
    // <DeliverySection>
    <Container>
      <Delivery>
        <DeliveryInfoBox>
          {/* <CheckOutTitle id="deliveryTitle">Delivery</CheckOutTitle>
            <CheckOutTitle id="addressTitle" style={{ display: 'none' }}>
              ADDRESS
            </CheckOutTitle>
            <CheckOutTitle id="paymentTitle" style={{ display: 'none' }}>
              payment
            </CheckOutTitle> */}

          {/* deliveryBlock */}

        </DeliveryInfoBox>

        {/* deliveryInfoBlock */}


        {/* Payment */}
        {/* <div id="paymentBlock" style={{ display: 'none' }}>
          <PaymentOptionBox>
            <PaymentBlockOptionsLable
              onClick={() => handlePaymentOptionClick(0)}
            >
              <PaymentBlockOptionsInput type="radio" name="payment" />
              <LIQPAY />

              <DeliveryBlockOptionsLableBox>
                <DeliveryBlockOptionsTitle>
                  Card or e-wallet
                </DeliveryBlockOptionsTitle> */}
                {/* <DeliveryBlockOptionsTitleDiscr>
                  Visa, Master Card, Apple Pay, Google Pay
                </DeliveryBlockOptionsTitleDiscr> */}
              {/* </DeliveryBlockOptionsLableBox>
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
                </DeliveryBlockOptionsTitle> */}
                {/* <DeliveryBlockOptionsTitleDiscr>
                  Only on delivery by courier Meest
                </DeliveryBlockOptionsTitleDiscr> */}
              {/* </DeliveryBlockOptionsLableBox>
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
                </DeliveryBlockOptionsTitle> */}
                {/* <DeliveryBlockOptionsTitleDiscr>
                  Only on delivery by courier Meest
                </DeliveryBlockOptionsTitleDiscr> */}
              {/* </DeliveryBlockOptionsLableBox>
            </PaymentBlockOptionsLable>
          </PaymentOptionBox>

          <PaymentFormBtnBox>
            <Link to={`/checkout/step2`}>
              <PaymentFormBtn type="button" onClick={goBackToDeliveryInfo}>
                Back
              </PaymentFormBtn>
            </Link>

            <PaymentFormBtnFinish type="submit" onClick={handleAddOrder}>
              Total
            </PaymentFormBtnFinish>
          </PaymentFormBtnBox>
        </div> */}
      </Delivery>
    </Container>
    // </DeliverySection>
  );
};







// <DeliveryBlock id="deliveryBlock">
// <DeliveryBlockOptions>
//   <DeliveryBlockOptionsBoxLable>
//     <DeliveryBlockOptionsLable
//       onClick={() => handleOptionClick(0)}
//       onChange={handleInputChange}
//     >
//       <DeliveryBlockOptionsInput type="radio" name="delivery" />
//       <NovaPoshtaIcon />

//       <DeliveryBlockOptionsLableBox>
//         <DeliveryBlockOptionsTitle>
//           NovaPoshta
//         </DeliveryBlockOptionsTitle>
//         <DeliveryBlockOptionsTitleDiscr>
//           Cash upon delivery, card payment Visa, Master Card
//         </DeliveryBlockOptionsTitleDiscr>
//       </DeliveryBlockOptionsLableBox>
//     </DeliveryBlockOptionsLable>

//     {selectedOption === 0 && (
//       <BoxPost>
//         <PoshtaBoxTitle>Select point office </PoshtaBoxTitle>

//         <PoshtaBox>
//           <NovaPoshta
//             setSelectedCity={setSelectedCity}
//             setSelectedDepartment={setSelectedDepartment}
//           />
//         </PoshtaBox>
//       </BoxPost>
//     )}
//   </DeliveryBlockOptionsBoxLable>

//   <DeliveryBlockOptionsBoxLable>
//     <DeliveryBlockOptionsLable
//       onClick={() => handleOptionClick(1)}
//       onChange={handleInputChange}
//     >
//       <DeliveryBlockOptionsInput type="radio" name="delivery" />
//       <UkrPoshtaIcon />

//       <DeliveryBlockOptionsLableBox>
//         <DeliveryBlockOptionsTitle>
//           UkrPoshta
//         </DeliveryBlockOptionsTitle>
//         <DeliveryBlockOptionsTitleDiscr>
//           Cash upon delivery, card payment Visa, Master Card
//         </DeliveryBlockOptionsTitleDiscr>
//       </DeliveryBlockOptionsLableBox>
//     </DeliveryBlockOptionsLable>

//     {selectedOption === 1 && (
//       <BoxPost>
//         <PoshtaBoxTitle>Select point office </PoshtaBoxTitle>

//         <PoshtaBox>
//           <UkrPoshta
//             setSelectedCity={setSelectedCity}
//             setSelectedDepartment={setSelectedDepartment}
//           />
//         </PoshtaBox>
//       </BoxPost>
//     )}
//   </DeliveryBlockOptionsBoxLable>

//   <DeliveryBlockOptionsBoxLable>
//     <DeliveryBlockOptionsLable
//       onClick={() => handleOptionClick(2)}
//       onChange={handleInputChange}
//     >
//       <DeliveryBlockOptionsInput type="radio" name="delivery" />
//       {/* <ShippingFast style={{ width: 55 }} /> */}
//       <DeliveryBlockOptionsLableBox>
//         <DeliveryBlockOptionsTitle>
//           Courier delivery
//         </DeliveryBlockOptionsTitle>
//         <DeliveryBlockOptionsTitleDiscr>
//           Cash upon delivery, card payment Visa, Master Card
//         </DeliveryBlockOptionsTitleDiscr>
//       </DeliveryBlockOptionsLableBox>
//     </DeliveryBlockOptionsLable>
//   </DeliveryBlockOptionsBoxLable>

//   <Link to={`/checkout/step2`}>
//     <DeliveryBlockOptionsBtn
//       type="button"
//       onClick={showDeliveryInfoBlock}
//     >
//       Next
//     </DeliveryBlockOptionsBtn>
//   </Link>
// </DeliveryBlockOptions>
// </DeliveryBlock>

// ///////////////////////////////////////PAYMENT

{
  /* <DeliveryInfoBlock id="deliveryInfoBlock" style={{ display: 'none' }}>
{auth._id ? (
  <>
    <DataContainer>
      <DataContainerText>
        {formData.name} {formData.surname}
      </DataContainerText>
      <DataContainerText>{formData.company}</DataContainerText>
      <DataContainerText>{formData.city}</DataContainerText>
      <DataContainerText>{formData.state}</DataContainerText>
      <DataContainerText>{formData.address1}</DataContainerText>
      <DataContainerText>{formData.address2}</DataContainerText>
      <DataContainerText>{formData.phone}</DataContainerText>
      <DataContainerText>{formData.email}</DataContainerText>

      <DataContainerPensil
        onClick={() => setShowAddAddress(!showAddAddress)}
      >
        {showAddAddress ? (
          <DataContainerCheckMark />
        ) : (
          <PensilStyle />
        )}
      </DataContainerPensil>
    </DataContainer>

    {showAddAddress && (
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
            placeholder="George"
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
            placeholder="Washington"
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
            id="city"
            name="city"
            value={formData.city}
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

        {/* <DeliveryFormLable>
<DeliveryFormLableText>Zip code</DeliveryFormLableText>
<DeliveryFormInput
onChange={handleInputChange}
type="text"
id="zipCode"
name="zipCode"
value={formData.zipCode}
required
/>
</DeliveryFormLable> */
}

//         <DeliveryFormLable>
//           <DeliveryFormLableText>Phone</DeliveryFormLableText>
//           <DeliveryFormInput
//             onChange={handleInputChange}
//             type="tel"
//             id="phone"
//             name="phone"
//             value={formData.phone}
//             required
//             placeholder="Phone"
//           />
//         </DeliveryFormLable>

//         <DeliveryFormLable>
//           <DeliveryFormLableText>Email</DeliveryFormLableText>
//           <DeliveryFormInput
//             onChange={handleInputChange}
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             required
//             placeholder="george.washington@gmail.com"
//           />
//         </DeliveryFormLable>
//       </DeliveryForm>
//     )}
//   </>
// ) : (
//   <DeliveryForm>
//     <DeliveryFormLable>
//       <DeliveryFormLableText>First name</DeliveryFormLableText>
//       <DeliveryFormInput
//         onChange={handleInputChange}
//         type="text"
//         id="name"
//         name="name"
//         value={formData.name}
//         required
//         placeholder="George"
//       />
//     </DeliveryFormLable>

//     <DeliveryFormLable>
//       <DeliveryFormLableText>Last name</DeliveryFormLableText>
//       <DeliveryFormInput
//         onChange={handleInputChange}
//         type="text"
//         id="surname"
//         name="surname"
//         value={formData.surname}
//         required
//         placeholder="Washington"
//       />
//     </DeliveryFormLable>

//     <DeliveryFormLable>
//       <DeliveryFormLableText>Company</DeliveryFormLableText>
//       <DeliveryFormInput
//         onChange={handleInputChange}
//         type="text"
//         id="company"
//         value={formData.company}
//         name="company"
//       />
//     </DeliveryFormLable>

//     <DeliveryFormLable>
//       <DeliveryFormLableText>Address 1</DeliveryFormLableText>
//       <DeliveryFormInput
//         onChange={handleInputChange}
//         type="text"
//         id="address1"
//         value={formData.address1}
//         name="address1"
//         required
//       />
//     </DeliveryFormLable>

//     <DeliveryFormLable>
//       <DeliveryFormLableText>Address 2</DeliveryFormLableText>
//       <DeliveryFormInput
//         onChange={handleInputChange}
//         type="text"
//         id="address2"
//         name="address2"
//         value={formData.address2}
//       />
//     </DeliveryFormLable>

//     <DeliveryFormLable>
//       <DeliveryFormLableText>City</DeliveryFormLableText>
//       <DeliveryFormInput
//         onChange={handleInputChange}
//         type="text"
//         id="city"
//         name="city"
//         value={formData.city}
//         required
//       />
//     </DeliveryFormLable>

//     <DeliveryFormLable>
//       <DeliveryFormLableText>State</DeliveryFormLableText>
//       <DeliveryFormInput
//         onChange={handleInputChange}
//         type="text"
//         id="state"
//         name="state"
//         value={formData.state}
//         required
//       />
//     </DeliveryFormLable>

//     <DeliveryFormLable>
//       <DeliveryFormLableText>Zip code</DeliveryFormLableText>
//       <DeliveryFormInput
//         onChange={handleInputChange}
//         type="text"
//         id="zipCode"
//         name="zipCode"
//         value={formData.zipCode}
//         required
//       />
//     </DeliveryFormLable>

//     <DeliveryFormLable>
//       <DeliveryFormLableText>Phone</DeliveryFormLableText>
//       <DeliveryFormInput
//         onChange={handleInputChange}
//         type="tel"
//         id="phone"
//         name="phone"
//         value={formData.phone}
//         required
//         placeholder="Phone"
//       />
//     </DeliveryFormLable>

//     <DeliveryFormLable>
//       <DeliveryFormLableText>Email</DeliveryFormLableText>
//       <DeliveryFormInput
//         onChange={handleInputChange}
//         type="email"
//         id="email"
//         name="email"
//         value={formData.email}
//         required
//         placeholder="george.washington@gmail.com"
//       />
//     </DeliveryFormLable>
//   </DeliveryForm>
// )}

// <Btnwrapper>
//   <Link to={`/checkout/step1`}>
//     <DeliveryFormBtn type="button" onClick={goBackToDelivery}>
//       Back
//     </DeliveryFormBtn>
//   </Link>

//   <Link to={`/checkout/step3`}>
//     <DeliveryFormBtnFinish type="button" onClick={showPayment}>
//       Save
//     </DeliveryFormBtnFinish>
//   </Link>
// </Btnwrapper>
// </DeliveryInfoBlock> */}



// ///////////////////////////////TOTAL


