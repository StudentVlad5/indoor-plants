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
import {
  getFromStorage,
  removeItem,
  saveToStorage,
} from 'services/localStorService';
import { makeOrder } from '../../../services/APIservice';
import { getUser } from 'redux/auth/selectors';
import { onFetchError, onSuccess } from '../../helpers/Messages/NotifyMessages';
import { useSelector } from 'react-redux';
import { selectBasket } from 'redux/basket/selectors';
import { onLoaded, onLoading } from 'components/helpers/Loader/Loader';

const Step4 = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const auth = useSelector(getUser);
  const [formData] = useState(
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

  const basket = useSelector(selectBasket);

  let cityDelivery = '';
  let departmentDelivery = '';
  if (delivery === 'NovaPoshta') {
    cityDelivery = selectedCity;
    departmentDelivery = selectedDepartment;
  } else if (delivery === 'NovaPoshta') {
    cityDelivery = selectedCity_UP_NAME;
    departmentDelivery = selectedDepartment_UP;
  } else {
    cityDelivery = formData.city;
    departmentDelivery = formData.address;
  }

  const newOrder = {
    basket,
    deliveryOrder: { delivery, cityDelivery, departmentDelivery },
    name: formData.name + ' ' + formData.surname,
    phone: formData.phone,
    email: formData.email,
    selectedPaymentOption,
    comments,
    user_id: auth._id,
  };

  const navigate = useNavigate();

  async function createOrder() {
    setIsLoading(true);
    try {
      const { data } = await makeOrder(`/order/`, newOrder);
      if (!data) {
        return onFetchError(t('Whoops, something went wrong'));
      }
      onSuccess('Thank you for order');
      removeItem('step');
      removeItem('selectedCity');
      removeItem('selectedCity_UP_NAME');
      removeItem('comments');
      removeItem('selectedCity_UP');
      removeItem('selectedDepartment_UP');
      removeItem('basketData');
      removeItem('selectedDeliveryOption');
      removeItem('selectedDepartment');
      removeItem('formData');
      removeItem('selectedPaymentOption');
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }

  const handleAddOrder = e => {
    e.preventDefault();
    createOrder();
  };

  return (
    <>
      <Basket handleAddOrder={handleAddOrder}></Basket>
      {isLoading ? onLoading() : onLoaded()}
      {error && onFetchError('Whoops, something went wrong')}
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
