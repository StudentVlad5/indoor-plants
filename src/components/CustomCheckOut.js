import React from 'react';
import {
  BasketCompBox,
  BasketCompIconClose,
  BasketCompImg,
  BasketCompItem,
  BasketCompList,
  BasketCompTitle,
  BasketContainer,
  // BasketSection,
  BoxForData,
  BoxForDiscrData,
  BtnItem,
  DeliverBox,
  DeliverBoxItem,
  DiscrDataList,
  DiscrDataListItem,
  DiscrDataListItemInfo,
  DiscrDataListItemInfoTitle,
  DiscrDataListItemTitle,
  DiscrDataListItemTitlePrice,
  Done,
  PaymentBox,
  PaymentBtn,
  PaymentTotalList,
  PaymentTotalListItem,
  PaymentTotalListItemDiscr,
  PaymentTotalTitle,
  PaymentTotalTitlePrice,
  ShippingFast,
} from './CheckOut/Checkout.styled';
import * as SC from './ProductCard/ProductCard.styled';
import { ReactComponent as Minus } from 'images/svg/minus.svg';
import { ReactComponent as Plus } from 'images/svg/plus.svg';
import { useState } from 'react';

export const CustomCheckOut = ({
  _id,
  name,
  oldPrice,
  currentPrice,
  optionData,
  images,
  removeProduct,
}) => {
  console.log('IDDDD--', _id, name, oldPrice, currentPrice, optionData, images);
  const { BASE_URL_IMG } = window.global;

  const initialQuantity = 1;
  const initialPrice = optionData.currentPrice * initialQuantity;

  const [value, setValue] = useState(initialQuantity);
  const [price, setPrice] = useState(initialPrice);

  const handleDecrease = () => {
    if (value > 1) {
      const newValue = value - 1;
      setValue(newValue);
      setPrice(newValue * optionData.currentPrice);
    }
  };

  const handleIncrease = () => {
    if (value < optionData.total) {
      const newValue = value + 1;
      setValue(newValue);
      setPrice(newValue * optionData.currentPrice);
    }
  };

  return (
    <BasketContainer>
      <BasketCompBox>
        <BasketCompTitle>Basket</BasketCompTitle>
        <BoxForData>
          <BasketCompList>
            <BasketCompItem>
              <BasketCompImg
                src={BASE_URL_IMG + images[0]}
                alt="Image"
                loading="lazy"
              />

              <BoxForDiscrData>
                <DiscrDataList>
                  <DiscrDataListItem>
                    <DiscrDataListItemTitle>{name}</DiscrDataListItemTitle>
                    <DiscrDataListItemTitlePrice>
                      ${price}
                    </DiscrDataListItemTitlePrice>
                  </DiscrDataListItem>

                  <DiscrDataListItem>
                    <DiscrDataListItemInfoTitle>
                      Size
                    </DiscrDataListItemInfoTitle>
                    {optionData.title === null ? (
                      <DiscrDataListItemInfo>S</DiscrDataListItemInfo>
                    ) : (
                      <DiscrDataListItemInfo>
                        {optionData.title}
                      </DiscrDataListItemInfo>
                    )}
                  </DiscrDataListItem>

                  <DiscrDataListItem>
                    <DiscrDataListItemInfoTitle>
                      Price
                    </DiscrDataListItemInfoTitle>
                    <DiscrDataListItemInfo>
                      ${optionData.currentPrice}
                    </DiscrDataListItemInfo>
                  </DiscrDataListItem>

                  <DiscrDataListItem>
                    <DiscrDataListItemInfoTitle>
                      Quantity
                    </DiscrDataListItemInfoTitle>
                    <SC.Quantity>
                      <SC.IconBtn
                        type="button"
                        aria-label="minus"
                        onClick={handleDecrease}
                        disabled={value <= 1}
                      >
                        <Minus />
                      </SC.IconBtn>
                      <span>{value}</span>
                      <SC.IconBtn
                        type="button"
                        aria-label="plus"
                        onClick={handleIncrease}
                        disabled={value >= optionData.total}
                      >
                        <Plus />
                      </SC.IconBtn>
                    </SC.Quantity>
                  </DiscrDataListItem>
                </DiscrDataList>

                <BtnItem
                  onClick={() => {
                    removeProduct(_id, optionData.title);
                  }}
                >
                  <BasketCompIconClose />
                  remove
                </BtnItem>
              </BoxForDiscrData>
            </BasketCompItem>
          </BasketCompList>

          <PaymentBox>
            <PaymentTotalTitle>Total</PaymentTotalTitle>
            <div>
              <PaymentTotalList>
                <PaymentTotalListItem>
                  <DiscrDataListItemInfoTitle>
                    Amount for the product
                  </DiscrDataListItemInfoTitle>
                  <PaymentTotalListItemDiscr>$445</PaymentTotalListItemDiscr>
                </PaymentTotalListItem>

                <PaymentTotalListItem>
                  <DiscrDataListItemInfoTitle>
                    Discount amount
                  </DiscrDataListItemInfoTitle>
                  <PaymentTotalListItemDiscr>$55</PaymentTotalListItemDiscr>
                </PaymentTotalListItem>

                <PaymentTotalListItem>
                  <DiscrDataListItemInfoTitle>
                    Delivery
                  </DiscrDataListItemInfoTitle>
                  <PaymentTotalListItemDiscr>$0</PaymentTotalListItemDiscr>
                </PaymentTotalListItem>

                <PaymentTotalListItem>
                  <PaymentTotalTitle>Payment</PaymentTotalTitle>
                  <PaymentTotalTitlePrice>$390</PaymentTotalTitlePrice>
                </PaymentTotalListItem>
              </PaymentTotalList>

              <PaymentBtn>checkout</PaymentBtn>

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
            </div>
          </PaymentBox>
        </BoxForData>
      </BasketCompBox>
    </BasketContainer>
  );
};
