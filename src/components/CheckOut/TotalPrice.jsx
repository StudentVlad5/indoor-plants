import React from 'react';
import {
  DeliverBox,
  DeliverBoxItem,
  DiscrDataListItemInfoTitle,
  Done,
  PaymentBox,
  PaymentBtn,
  PaymentTotalList,
  PaymentTotalListItem,
  PaymentTotalListItemDiscr,
  PaymentTotalTitle,
  PaymentTotalTitlePrice,
  ShippingFast,
} from './Checkout.styled';
import {
  selectTotalAmount,
  selectTotalDiscount,
  selectTotalPayment,
} from 'redux/basket/selectors';
import { useSelector } from 'react-redux';

export const TotalPrice = () => {
  // console.log('IDDDD--',quantity, totalAmount, price, optionData, value );
  const totalAmount = useSelector(selectTotalAmount).toFixed(2);
  const totalDiscount = useSelector(selectTotalDiscount).toFixed(2);
  const totalPayment = useSelector(selectTotalPayment).toFixed(2);
  return (
    <PaymentBox>
      <PaymentTotalTitle>Total</PaymentTotalTitle>
      <div>
        <PaymentTotalList>
          <PaymentTotalListItem>
            <DiscrDataListItemInfoTitle>
              Amount for the product
            </DiscrDataListItemInfoTitle>
            <PaymentTotalListItemDiscr>
              ${totalAmount}
            </PaymentTotalListItemDiscr>
          </PaymentTotalListItem>

          <PaymentTotalListItem>
            <DiscrDataListItemInfoTitle>
              Discount amount
            </DiscrDataListItemInfoTitle>
            <PaymentTotalListItemDiscr>
              ${totalDiscount}
            </PaymentTotalListItemDiscr>
          </PaymentTotalListItem>

          <PaymentTotalListItem>
            <DiscrDataListItemInfoTitle>Delivery</DiscrDataListItemInfoTitle>
            {totalAmount < 150 ? (
              <PaymentTotalListItemDiscr>
                ${150 - totalAmount}
              </PaymentTotalListItemDiscr>
            ) : (
              <PaymentTotalListItemDiscr>Free</PaymentTotalListItemDiscr>
            )}
          </PaymentTotalListItem>

          <PaymentTotalListItem>
            <PaymentTotalTitle>Payment</PaymentTotalTitle>
            <PaymentTotalTitlePrice>${totalPayment}</PaymentTotalTitlePrice>
          </PaymentTotalListItem>
        </PaymentTotalList>


        <DeliverBox>
        <PaymentBtn to="/checkout/order">checkout</PaymentBtn>

          <DeliverBoxItem>
            <ShippingFast />
            Get free standart shipping when you spend $150 or more.
          </DeliverBoxItem>
          <DeliverBoxItem>
            <Done />
            If your plant dies withing 30 days, we’ll replace it for free.
          </DeliverBoxItem>
        </DeliverBox>
      </div>
    </PaymentBox>
  );
};
