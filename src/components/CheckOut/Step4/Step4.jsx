import React, { useState } from 'react';
import { Basket } from '../Basket/Basket';
import { PensilStyle } from 'components/UserComp/UserData/UserData.styled';
import {
  DataContainerText,
  DataContainerPensil,
  DataContainerCheckMark,
} from '../Order/Order.styled';
import {
  DataContainerItem,
  DataTitle,
  DataContainerItems,
  InputComments,
} from './Step4.styled';
import { useNavigate } from 'react-router-dom';
import { getFromStorage, saveToStorage } from 'services/localStorService';

const Step4 = () => {
  const [formData, setFormData] = useState(
    getFromStorage('formData')
      ? getFromStorage('formData')
      : {
          name: auth._id ? userIn?.userName : '',
          surname: auth._id ? userIn?.surname : '',
          email: auth._id ? userIn?.email : '',
          phone: auth._id ? userIn?.phone : '',
          city: '',
          address: '',
        },
  );
  let delivery = '';
  getFromStorage('selectedDeliveryOption')
    ? (delivery = getFromStorage('selectedDeliveryOption'))
    : (delivery = '');

  const [selectedCity] = useState(
    getFromStorage('selectedCity') ? getFromStorage('selectedCity') : '',
  );
  const [selectedDepartment] = useState(
    getFromStorage('selectedDepartment')
      ? getFromStorage('selectedDepartment')
      : '',
  );
  const [selectedCity_UP_NAME] = useState(
    getFromStorage('selectedCity_UP_NAME')
      ? getFromStorage('selectedCity_UP_NAME')
      : '',
  );
  const [selectedDepartment_UP] = useState(
    getFromStorage('selectedDepartment_UP')
      ? getFromStorage('selectedDepartment_UP')
      : '',
  );

  const [selectedPaymentOption] = useState(
    getFromStorage('selectedPaymentOption')
      ? getFromStorage('selectedPaymentOption')
      : '',
  );

  const [comments, setComments] = useState(
    getFromStorage('comments') ? getFromStorage('comments') : '',
  );
  const [showComments, setShowComments] = useState(false);

  const navigate = useNavigate();

  const handleAddOrder = e => {
    e.preventDefault();

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

  return (
    <>
      <Basket></Basket>
      <DataContainerItem>
        {/* Delivery */}
        <DataContainerItems>
          <DataTitle>Selected delivery</DataTitle>
          <DataContainerText>{delivery}</DataContainerText>
          {delivery === 'NovaPoshta' && (
            <>
              <DataContainerText>{selectedCity}</DataContainerText>
              <DataContainerText>{selectedDepartment}</DataContainerText>
            </>
          )}
          {delivery === 'UkrPoshta' && (
            <>
              <DataContainerText>{selectedCity_UP_NAME}</DataContainerText>
              <DataContainerText>{selectedDepartment_UP}</DataContainerText>
            </>
          )}
          <DataContainerPensil
            onClick={() => navigate('/checkout/step1', { replace: true })}
          >
            <PensilStyle />
          </DataContainerPensil>
        </DataContainerItems>

        {/* Reciver */}
        <DataContainerItems>
          <DataTitle>Selected customer options</DataTitle>
          <DataContainerText>
            {formData.name} {formData.surname}
          </DataContainerText>
          <DataContainerText>{formData.phone}</DataContainerText>
          {delivery === '' ||
            (delivery === 'Courier delivery' && (
              <DataContainerText>{formData.city}</DataContainerText>
            ))}

          {delivery === '' ||
            (delivery === 'Courier delivery' && (
              <DataContainerText>{formData.address}</DataContainerText>
            ))}
          <DataContainerText>{formData.email}</DataContainerText>

          <DataContainerPensil
            onClick={() => navigate('/checkout/step2', { replace: true })}
          >
            <PensilStyle />
          </DataContainerPensil>
        </DataContainerItems>

        {/* Payment */}
        <DataContainerItems>
          <DataTitle>Selected payment</DataTitle>
          <DataContainerText>{selectedPaymentOption}</DataContainerText>
          <DataContainerPensil
            onClick={() => navigate('/checkout/step3', { replace: true })}
          >
            <PensilStyle />
          </DataContainerPensil>
        </DataContainerItems>

        {/* Comments */}
        <DataContainerItems style={{ wordBreak: 'break-all' }}>
          <DataTitle>Comments to order</DataTitle>
          {!showComments && <DataContainerText>{comments}</DataContainerText>}
          <DataContainerPensil onClick={() => setShowComments(!showComments)}>
            {showComments ? <DataContainerCheckMark /> : <PensilStyle />}
          </DataContainerPensil>
          {showComments && (
            <label htmlFor="comments">
              <InputComments
                onChange={e => {
                  setComments(e.target.value);
                  saveToStorage('comments', e.target.value);
                }}
                type="text"
                id="comments"
                name="comments"
                value={comments}
                rows="10"
                cols="25"
              />
            </label>
          )}
        </DataContainerItems>
      </DataContainerItem>
    </>
  );
};

export default Step4;
