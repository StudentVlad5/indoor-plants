import React from 'react';
import { useSelector } from 'react-redux';
import {
  selectTotalAmount,
  selectTotalDiscount,
  selectTotalPayment,
  selectCurrency,
} from 'redux/basket/selectors';
import {
  DeliverBox,
  DeliverBoxItem,
  Done,
  PaymentBox,
  PaymentBtn,
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
// import { selectOrders } from 'redux/order/selectors';

export const TotalPrice = (basket, confirm, handleAddOrder) => {
  const totalPayment = basket.basket
    .reduce((payment, item) => {
      return payment + item.currentPrice * item.quantity;
    }, 0)
    .toFixed(2);
  const totalAmount = basket.basket
    .reduce((payment, item) => {
      return payment + item.oldPrice * item.quantity;
    }, 0)
    .toFixed(2);
  const totalDiscount = basket.basket
    .reduce((payment, item) => {
      return payment + item.discount * item.quantity;
    }, 0)
    .toFixed(2);

  const currency = basket.basket[0].currency;

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
      {confirm ? (
        <PaymentBtn onClick={() => handleAddOrder()} id="paymentBtn">
          confirm
        </PaymentBtn>
      ) : (
        <PaymentBtn to={`/checkout/step1`} id="paymentBtn">
          checkout
        </PaymentBtn>
      )}
      {!confirm && (
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
      )}
    </PaymentBox>
  );
};
