// import React from 'react';
// import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { selectComment, selectOrders } from 'redux/order/selectors';
// import {
//   OrderBox,
//   OrderBoxTitle,
//   DataContainerTextGreen,
//   OrderBoxContainer,
//   OrderForm,
//   OrderFormTextarea,
// } from 'components/Basket/Basket.styled';
// import {
//   DataContainerCheckMark,
//   DataContainerPensil,
//   DataContainerText,
// } from 'components/CheckOut/Order/Order.styled';
// import { PensilStyle } from 'components/UserComp/UserData/UserData.styled';
// import { addCommentToOrder } from 'redux/order/operations';
// import { Link } from 'react-router-dom';
// import { getFromStorage } from 'services/localStorService';

// const Step4 = () => {
//   const storedData = getFromStorage('formData');
//   const ordersData = getFromStorage('orders');

//   const [showAddAddress, setShowAddAddress] = useState(false);
//   const [comment, setComment] = useState(
//     storedData ? storedData.comment || '' : '',
//   );
//   const orders = useSelector(selectOrders);
//   const selectedCity = getFromStorage('selectedCity');
//   const selectedDepartment = getFromStorage('selectedDepartment');
//   const selectedDeliveryOption = getFromStorage('selectedDeliveryOption');
//   const dataToSave = [storedData];
//   const ordersDataToSave = [ordersData];


//   const handleCommentChange = e => {
//     setComment(e.target.value);
//   };

//   const handleAddCommentToStorage = () => {
//     storedData.comment = comment;
//     localStorage.setItem('formData', JSON.stringify(storedData));

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
import { useDispatch, useSelector } from 'react-redux';
import { selectBasket } from 'redux/basket/selectors';
import { onLoaded, onLoading } from 'components/helpers/Loader/Loader';
import { clearBasket } from 'redux/basket/operations';

const Step4 = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const auth = useSelector(getUser);
  const [formData] = useState(
    getFromStorage('formData')
      ? getFromStorage('formData')
      : {
          name: auth._id ? auth?.userName : '',
          surname: auth._id ? auth?.surname : '',
          email: auth._id ? auth?.email : '',
          phone: auth._id ? auth?.phone : '',
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
      dispatch(clearBasket());
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }

  const handleAddOrder = e => {
    createOrder();
  };

  return (
    <>
      {/* {storedData.length > 0 ? ( */}
      {/* // {orders.length > 0
      //   ? ordersDataToSave.map(
      //       order =>
      //         ordersData &&
      //         order.map(orderIt =>
      //           orderIt.dataToSave.map(item => (
      //             <OrderBox key={item.id}>
      //               <OrderBoxContainer>
      //                 <OrderBoxTitle>Selected delivery</OrderBoxTitle>
      //                 {orders.length > 0 ? (
      //                   <></>
      //                 ) : (
      //                   <DataContainerPensil>
      //                     <Link to={`/checkout/step1`}>
      //                       <PensilStyle />
      //                     </Link>
      //                   </DataContainerPensil>
      //                 )}

      //                 <DataContainerText>
      //                   {selectedDeliveryOption}
      //                 </DataContainerText>
      //                 <DataContainerText>{selectedCity}</DataContainerText>
      //                 <DataContainerText>
      //                   {selectedDepartment}
      //                 </DataContainerText>
      //               </OrderBoxContainer>

      //               <OrderBoxContainer>
      //                 <OrderBoxTitle>Selected address</OrderBoxTitle>
      //                 {orders.length > 0 ? (
      //                   <></>
      //                 ) : (
      //                   <DataContainerPensil>
      //                     <Link to={`/checkout/step2`}>
      //                       <PensilStyle />
      //                     </Link>
      //                   </DataContainerPensil>
      //                 )}

      //                 <DataContainerTextGreen>
      //                   {item.name} {item.surname}
      //                 </DataContainerTextGreen>
      //                 <DataContainerText>{item.company}</DataContainerText>
      //                 <DataContainerText>{item.city}</DataContainerText>
      //                 <DataContainerText>{item.state}</DataContainerText>
      //                 <DataContainerText>{item.zipCode}</DataContainerText>
      //                 <DataContainerText>{item.address1}</DataContainerText>
      //                 <DataContainerText>{item.address2}</DataContainerText>
      //                 <DataContainerText>{item.phone}</DataContainerText>
      //                 <DataContainerText>{item.email}</DataContainerText>
      //               </OrderBoxContainer>

      //               <OrderBoxContainer>
      //                 <OrderBoxTitle>Selected payment</OrderBoxTitle>

      //                 {orders.length > 0 ? (
      //                   <></>
      //                 ) : (
      //                   <DataContainerPensil>
      //                     <Link to={`/checkout/step3`}>
      //                       <PensilStyle />
      //                     </Link>
      //                   </DataContainerPensil>
      //                 )}

      //                 <DataContainerText>
      //                   {item.selectedPaymentOption}
      //                 </DataContainerText>
      //               </OrderBoxContainer>

      //               <OrderBoxContainer>
      //                 <OrderBoxTitle> Comments to order</OrderBoxTitle>
      //                 {orders.length > 0 ? (
      //                   <></>
      //                 ) : (
      //                   <DataContainerPensil
      //                     onClick={() => setShowAddAddress(!showAddAddress)}
      //                   >
      //                     {showAddAddress ? (
      //                       <DataContainerCheckMark
      //                         onClick={() => {
      //                           handleAddCommentToStorage();
      //                         }}
      //                       />
      //                     ) : (
      //                       <PensilStyle />
      //                     )}
      //                   </DataContainerPensil>
      //                 )}
      //                 <DataContainerText>{item.comment}</DataContainerText>

      //                 {showAddAddress && (
      //                   <OrderForm>
      //                     <label>
      //                       <OrderFormTextarea
      //                         name="comment"
      //                         value={comment}
      //                         onChange={handleCommentChange}
      //                         id="comment"
      //                         cols="30"
      //                         rows="10"
      //                       ></OrderFormTextarea>
      //                     </label>
      //                   </OrderForm>
      //                 )}
      //               </OrderBoxContainer>
      //             </OrderBox>
      //           )),
      //         ),
      //     )
      //   : dataToSave.map(
      //       order =>
      //         storedData && (
      //           <OrderBox key={order.id}>
      //             <OrderBoxContainer>
      //               <OrderBoxTitle>Selected delivery</OrderBoxTitle>
      //               {orders.length > 0 ? (
      //                 <></>
      //               ) : (
      //                 <DataContainerPensil>
      //                   <Link to={`/checkout/step1`}>
      //                     <PensilStyle />
      //                   </Link>
      //                 </DataContainerPensil>
      //               )}

      //               <DataContainerText>
      //                 {selectedDeliveryOption}
      //               </DataContainerText>
      //               <DataContainerText>{selectedCity}</DataContainerText>
      //               <DataContainerText>{selectedDepartment}</DataContainerText>
      //             </OrderBoxContainer>

      //             <OrderBoxContainer>
      //               <OrderBoxTitle>Selected address</OrderBoxTitle>

      //               {orders.length > 0 ? (
      //                 <></>
      //               ) : (
      //                 <DataContainerPensil>
      //                   <Link to={`/checkout/step2`}>
      //                     <PensilStyle />
      //                   </Link>
      //                 </DataContainerPensil>
      //               )}

      //               <DataContainerTextGreen>
      //                 {order.name} {order.surname}
      //               </DataContainerTextGreen>
      //               <DataContainerText>{order.company}</DataContainerText>
      //               <DataContainerText>{order.city}</DataContainerText>
      //               <DataContainerText>{order.state}</DataContainerText>
      //               <DataContainerText>{order.zipCode}</DataContainerText>
      //               <DataContainerText>{order.address1}</DataContainerText>
      //               <DataContainerText>{order.address2}</DataContainerText>
      //               <DataContainerText>{order.phone}</DataContainerText>
      //               <DataContainerText>{order.email}</DataContainerText>
      //             </OrderBoxContainer>

      //             <OrderBoxContainer>
      //               <OrderBoxTitle>Selected payment</OrderBoxTitle>

      //               {orders.length > 0 ? (
      //                 <></>
      //               ) : (
      //                 <DataContainerPensil>
      //                   <Link to={`/checkout/step3`}>
      //                     <PensilStyle />
      //                   </Link>
      //                 </DataContainerPensil>
      //               )}

      //               <DataContainerText>
      //                 {order.selectedPaymentOption}
      //               </DataContainerText>
      //             </OrderBoxContainer>

      //             <OrderBoxContainer>
      //               <OrderBoxTitle> Comments to order</OrderBoxTitle>
      //               {orders.length > 0 ? (
      //                 <></>
      //               ) : (
      //                 <DataContainerPensil
      //                   onClick={() => setShowAddAddress(!showAddAddress)}
      //                 >
      //                   {showAddAddress ? (
      //                     <DataContainerCheckMark
      //                       onClick={() => {
      //                         handleAddCommentToStorage();
      //                       }}
      //                     />
      //                   ) : (
      //                     <PensilStyle />
      //                   )}
      //                 </DataContainerPensil>
      //               )}

      //               <DataContainerText>{order.comment}</DataContainerText>

      //               {showAddAddress && (
      //                 <OrderForm>
      //                   <label>
      //                     <OrderFormTextarea
      //                       name="comment"
      //                       value={comment}
      //                       onChange={handleCommentChange}
      //                       id="comment"
      //                       cols="30"
      //                       rows="10"
      //                     ></OrderFormTextarea>
      //                   </label>
      //                 </OrderForm>
      //               )}
      //             </OrderBoxContainer>
      //           </OrderBox>
      //         ),
      //     )} */}
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
