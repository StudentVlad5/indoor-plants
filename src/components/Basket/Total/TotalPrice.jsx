import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectTotalAmount,
  selectTotalDiscount,
  selectTotalPayment,
  selectCurrency,
  selectBasket,
} from 'redux/basket/selectors';
import {
  DeliverBox,
  DeliverBoxItem,
  Done,
  PaymentBox,
  PaymentBtn,
  PaymentBtnCheckout,
  PaymentTotal,
  PaymentTotalList,
  PaymentTotalListItem,
  PaymentTotalListItemDiscr,
  PaymentTotalListItemTitle,
  PaymentTotalTitle,
  PaymentTotalTitlePrice,
  PaymentTotalTitlePriceDiscr,
  ShippingFast,
} from './TotalPrice.styled';
import {
  clearData,
  getFromStorage,
  removeItem,
  saveToStorage,
} from 'services/localStorService';
import { useAuth } from 'hooks/useAuth';
import { getUser } from 'redux/auth/selectors';
import { useState } from 'react';
import { addOrder } from 'redux/order/operations';
import { onSuccess } from 'components/helpers/Messages/NotifyMessages';
import { selectOrders } from 'redux/order/selectors';
import { useEffect } from 'react';
// import { selectOrders } from 'redux/order/selectors';


export const TotalPrice = () => {
  const totalAmount = useSelector(selectTotalAmount).toFixed(2);
  const totalDiscount = useSelector(selectTotalDiscount).toFixed(2);
  const totalPayment = useSelector(selectTotalPayment).toFixed(2);
  const currency = useSelector(selectCurrency);
  const basket = useSelector(selectBasket);
  const auth = useSelector(getUser);
  let { userIn } = useAuth();
  const orders = useSelector(selectOrders);
  const dispatch = useDispatch();

  const storedData = getFromStorage('formData');
  const ordersData = getFromStorage('orders');
  const ordersDataToSave = [ordersData];
  const dataToSave = [storedData];

  const selectedCity = getFromStorage('selectedCity');
  const selectedDepartment = getFromStorage('selectedDepartment');
  const selectedDeliveryOption = getFromStorage('selectedDeliveryOption');

  const [isDisabled, setDisabled] = useState(true);
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
        dataToSave: dataToSave,
        basket: basket,
        cityDelivery: selectedCity,
        department: selectedDepartment,
      };
      dispatch(addOrder(newOrderAuth));
      onSuccess('Order added successfully');
      console.log(newOrderAuth);
    } else {
      const newOrder = {
        dataToSave: dataToSave,
        cityDelivery: selectedCity,
        department: selectedDepartment,
        basket: basket,
      };
      if (orders.length > 0) {
        // setFormData({
        //   name: '',
        //   surname: '',
        //   company: '',
        //   email: '',
        //   phone: '',
        //   address1: '',
        //   address2: '',
        //   city: '',
        //   state: '',
        //   zipCode: '',
        // });
        // removeItem('selectedCity')
        // removeItem('selectedDepartment')
        // removeItem('')

        removeItem('formData', {
          name: '',
          surname: '',
          company: '',
          email: '',
          phone: '',
          address1: '',
          address2: '',
          city: '',
          state: '',
          zipCode: '',
        });
      }
      dispatch(addOrder(newOrder));
      onSuccess('Order added successfully');
    }
  };

  const handleEnableStep1 = () => {
    document.querySelector('.step1Btn').classList.remove('isDisabled');
  };


  useEffect(() => {
    if (orders.length > 0) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [dataToSave, ordersDataToSave]);
  const isDataAvailable = dataToSave && dataToSave.length > 0;
  console.log(dataToSave);
  console.log(isDataAvailable);
  return (
    <PaymentBox>
      <PaymentTotal>
        <PaymentTotalTitle>Total</PaymentTotalTitle>
        <table>
          <PaymentTotalList>
            <PaymentTotalListItem>
              <PaymentTotalListItemTitle>
                Amount for the product
              </PaymentTotalListItemTitle>
              <PaymentTotalListItemDiscr>
                {currency}
                {totalAmount}
              </PaymentTotalListItemDiscr>
            </PaymentTotalListItem>

            <PaymentTotalListItem>
              <PaymentTotalListItemTitle>
                Discount amount
              </PaymentTotalListItemTitle>
              <PaymentTotalListItemDiscr>
                {currency}
                {totalDiscount}
              </PaymentTotalListItemDiscr>
            </PaymentTotalListItem>

            <PaymentTotalListItem>
              <PaymentTotalListItemTitle>Delivery</PaymentTotalListItemTitle>
              {totalAmount < 150 ? (
                <PaymentTotalListItemDiscr>
                  {currency}
                  {150 - totalAmount}
                </PaymentTotalListItemDiscr>
              ) : (
                <PaymentTotalListItemDiscr>Free</PaymentTotalListItemDiscr>
              )}
            </PaymentTotalListItem>

            <PaymentTotalListItem>
              <PaymentTotalTitlePrice>Payment</PaymentTotalTitlePrice>
              <PaymentTotalTitlePriceDiscr>
                {currency}
                {totalPayment}
              </PaymentTotalTitlePriceDiscr>
            </PaymentTotalListItem>
          </PaymentTotalList>
        </table>
      </PaymentTotal>

      {/* {ordersDataToSave.length > 0 ? ( */}
      {isDataAvailable ? (
        //  ordersDataToSave && ordersDataToSave.length > 0 && (
        <PaymentBtn
          type="submit"
          disabled={isDisabled}
          isDisabled={isDisabled}
          style={{
            cursor: isDisabled ? 'not-allowed' : 'pointer',
          }}
          onClick={handleAddOrder}
        >
          Pay
        </PaymentBtn>
        // )
      ) : (
        <PaymentBtnCheckout to={`/checkout/step1`} onClick={handleEnableStep1}>
          checkout
        </PaymentBtnCheckout>
      )}

      <DeliverBox>
        <DeliverBoxItem>
          <ShippingFast />
          Get free standart shipping when you spend $150 or more.
        </DeliverBoxItem>
        <DeliverBoxItem>
          <Done />
          If your plant dies withing 30 days, we’ll replace it for free.
        </DeliverBoxItem>
      </DeliverBox>
    </PaymentBox>
  );
};
