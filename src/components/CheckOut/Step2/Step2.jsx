import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import { saveToStorage, getFromStorage } from 'services/localStorService';
// import { addPayment } from 'redux/payment/operations';
// import { makeOrder } from 'services/APIservice';
// import { getUser, selectId } from 'redux/auth/selectors';
// import {
//   selectBasket,
//   selectTotalAmount,
//   selectTotalDiscount,
//   selectTotalPayment,
// } from 'redux/basket/selectors';
// import { selectDelivery } from 'redux/delivery/selectors';
// import { selectPayment } from 'redux/payment/selectors';
// import { onSuccess } from 'components/helpers/Messages/NotifyMessages';
// import {
//   FormContainer,
//   Legend,
//   Label,
//   Input,
//   PostContainer,
// } from './Step2.styled';
// import { CheckoutBtn } from '../Checkout.styled';

import { PensilStyle } from 'components/UserComp/UserData/UserData.styled';
import {
  DataContainer,
  Btnwrapper,
  DeliveryInfoBlock,
  DataContainerText,
  DataContainerPensil,
  DataContainerCheckMark,
  DeliveryFormLableText,
  DeliveryFormBtnFinish,
  DeliveryForm,
  DeliveryFormInput,
  DeliveryFormLable,
  DeliveryFormBtn,
} from '../Order/Order.styled';
import { useAuth } from 'hooks/useAuth';
import { getUser } from 'redux/auth/selectors';
import { getFromStorage, saveToStorage } from 'services/localStorService';

const Step2 = () => {
  const [showAddAddress, setShowAddAddress] = useState(false);
  const [isDisabled, setDisabled] = useState(true);

  const auth = useSelector(getUser);
  let { userIn } = useAuth();

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

  useEffect(() => {
    const requiredFields = [
      'name',
      'surname',
      'address1',
      'city',
      'state',
      'zipCode',
      'email',
      'phone',
    ];

    const isFilled = requiredFields.every(field => !!formData[field]);
    setDisabled(!isFilled);
  }, [formData]);

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

  const nextStep = () => {
    saveToStorage('step', '3');
  };

  return (
    <DeliveryInfoBlock>
      {auth._id ? (
        <>
          <DataContainer>
            <DataContainerText>
              {formData.name} {formData.surname}
            </DataContainerText>
            <DataContainerText>{formData.company}</DataContainerText>
            <DataContainerText>{formData.city}</DataContainerText>
            <DataContainerText>{formData.state}</DataContainerText>
            <DataContainerText>{formData.zipCode}</DataContainerText>
            <DataContainerText>{formData.address1}</DataContainerText>
            <DataContainerText>{formData.address2}</DataContainerText>
            <DataContainerText>{formData.email}</DataContainerText>
            <DataContainerText>{formData.phone}</DataContainerText>

            <DataContainerPensil
              onClick={() => setShowAddAddress(!showAddAddress)}
            >
              {showAddAddress ? <DataContainerCheckMark /> : <PensilStyle />}
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
                  // placeholder="+123456789"
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
                  // placeholder="george.washington@gmail.com"
                />
              </DeliveryFormLable>
            </DeliveryForm>
          )}
        </>
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
              // placeholder="+123456789"
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
              // placeholder="george.washington@gmail.com"
            />
          </DeliveryFormLable>
        </DeliveryForm>
      )}

      <Btnwrapper>
        <Link to={`/checkout/step1`}>
          <DeliveryFormBtn
            type="button"
            // onClick={goBackToDelivery}
          >
            Back
          </DeliveryFormBtn>
        </Link>

        <Link to={`/checkout/step3`}>
          <DeliveryFormBtnFinish
            disabled={isDisabled}
            type="button"
            isDisabled={isDisabled}
            style={{
              cursor: isDisabled ? 'not-allowed' : 'pointer',
            }}
            // onClick={nextStep}
          >
            Save
          </DeliveryFormBtnFinish>
        </Link>
      </Btnwrapper>
    </DeliveryInfoBlock>
  );
};

export default Step2;

// const [isFetch, setisFetch] = useState(false);
// const [isLoading, setIsLoading] = useState(false);
// const [error, setError] = useState(null);
// const [isDisabled, setDisabled] = useState(true);
// let payment = getFromStorage('payment');
// // const { t } = useTranslation();
// const [prepaidCard, setPrepaidCard] = useState(
//   payment?.prepaidCard ? payment.prepaidCard : false,
// );
// const [accountPayment, setAccountPayment] = useState(
//   payment?.accountPayment ? payment.accountPayment : false,
// );
// const [cashOnDelivery, setCashOnDelivery] = useState(
//   payment?.cashOnDelivery ? payment.cashOnDelivery : false,
// );
// const basket = useSelector(selectBasket);
// const totalAmount = useSelector(selectTotalAmount);
// const totalDiscount = useSelector(selectTotalDiscount);
// const totalPayment = useSelector(selectTotalPayment);
// const user_id = useSelector(selectId);
// const user = useSelector(getUser);
// const delivery = useSelector(selectDelivery);
// const metodPayment = useSelector(selectPayment);
// const dispatch = useDispatch();
// useEffect(() => {
//   if (prepaidCard || accountPayment || cashOnDelivery) {
//     setDisabled(false);
//   } else {
//     setDisabled(true);
//   }
// }, [prepaidCard, accountPayment, cashOnDelivery]);
// const handleChangePayment = e => {
//   switch (e.target.value) {
//     case 'prepaidCard':
//       setPrepaidCard(true);
//       setAccountPayment(false);
//       setCashOnDelivery(false);
//       break;
//     case 'accountPayment':
//       setPrepaidCard(false);
//       setAccountPayment(true);
//       setCashOnDelivery(false);
//       break;
//     case 'cashOnDelivery':
//       setPrepaidCard(false);
//       setAccountPayment(false);
//       setCashOnDelivery(true);
//       break;
//     default:
//       break;
//   }
// };
// useEffect(() => {
//   async function postOrder() {
//     const order = {
//       basket,
//       totalAmount,
//       totalDiscount,
//       totalPayment,
//       delivery,
//       metodPayment,
//       userName: user.userName,
//       userPhone: user.phone,
//       userEmail: user.email,
//     };
//     setIsLoading(true);
//     try {
//       const { data } = await makeOrder(`/order/${user_id}`, order);
//       if (!data) {
//         return onFetchError(t('Whoops, something went wrong'));
//       }
//       onSuccess('Great! Thank you for your order');
//     } catch (error) {
//       setError(error);
//     } finally {
//       setIsLoading(false);
//       setisFetch(false);
//     }
//   }
//   if (isFetch) {
//     postOrder();
//   }
// }, [isFetch]);
// const handleConfirmOrder = e => {
//   e.preventDefault;
//   payment = { prepaidCard, accountPayment, cashOnDelivery };
//   saveToStorage('payment', payment);
//   dispatch(addPayment(payment));
//   setisFetch(true);
//   document.querySelector('.step3Btn').classList.remove('isDisabled');
// };
// return (
//   <FormContainer>
//     <form>
//       <PostContainer>
//         <div>
//           <Legend>Terms of payment</Legend>
//           <Label>
//             <Input
//               type="radio"
//               name="payment"
//               value="prepaidCard"
//               checked={prepaidCard}
//               onChange={e => handleChangePayment(e)}
//             />
//             Prepayment to a bank card
//           </Label>
//           <br />
//           <Label>
//             <Input
//               type="radio"
//               name="payment"
//               value="accountPayment"
//               checked={accountPayment}
//               onChange={e => handleChangePayment(e)}
//             />
//             Payment on account
//           </Label>
//           <br />
//           <Label>
//             <Input
//               type="radio"
//               name="payment"
//               value="cashOnDelivery"
//               checked={cashOnDelivery}
//               onChange={e => handleChangePayment(e)}
//             />
//             Cash on delivery
//           </Label>
//         </div>
//       </PostContainer>
//       <Link
//         to={`/checkout/step3`}
//         style={{ textDecoration: 'none', width: '100%' }}
//       >
//         <CheckoutBtn
//           type="submit"
//           disabled={isDisabled}
//           onClick={e => handleConfirmOrder(e)}
//         >
//           Confirm order
//         </CheckoutBtn>
//         <button
//           type="submit"
//           disabled={isDisabled}
//           onClick={e => handleConfirmOrder(e)}
//         >
//           Confirm order
//         </button>
//       </Link>
//     </form>
//   </FormContainer>
// );
