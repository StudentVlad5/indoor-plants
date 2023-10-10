import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeProduct } from 'redux/basket/operations';
import { setQuantity } from 'redux/basket/slice';
import { selectCurrency } from 'redux/basket/selectors';
import {
  DiscrBox,
  RemoveBtn,
  DiscrBoxDiv,
  DiscrBoxForText,
  DiscrBoxSize,
  DiscrBoxTitle,
  DiscrTitle,
  OrderItem,
  Quantity,
  QuantityBox,
  IconQuantityBtn,
} from './ShoppingBagList.styled';
import { ListImage } from '../ShoppingBag.styled';

import { ReactComponent as Minus } from 'images/svg/minus.svg';
import { ReactComponent as Plus } from 'images/svg/plus.svg';
import { BASE_URL_IMG } from 'BASE_CONST/Base-const';

export const ShoppingBagList = ({
  _id,
  name,
  optionData,
  images,
  quantity,
}) => {
  const dispatch = useDispatch();

  const removeProductHandler = (_id, size) => {
    dispatch(removeProduct({ _id, size }));
  };
  const currency = useSelector(selectCurrency);

  const initialPrice = optionData.currentPrice * optionData.quantity;
  const [price, setPrice] = useState(initialPrice);

  const handleDecrease = () => {
    if (optionData.quantity > 1) {
      const newValue = optionData.quantity - 1;
      const newPrice = newValue * optionData.currentPrice;
      setPrice(newPrice);
      dispatch(setQuantity({ _id, optionData, quantity: newValue }));
    }
  };

  const handleIncrease = () => {
    if (optionData.quantity < optionData.total) {
      const newValue = optionData.quantity + 1;
      const newPrice = newValue * optionData.currentPrice;
      setPrice(newPrice);
      dispatch(setQuantity({ _id, optionData, quantity: newValue }));
    }
  };

  return (
    <>
      <OrderItem>
        <ListImage src={BASE_URL_IMG + images[0]} alt="Image" loading="lazy" />
        <DiscrBoxDiv>
          <DiscrBox>
            <DiscrBoxForText>
              <DiscrBoxTitle>
                <DiscrTitle>{name}</DiscrTitle>
                <DiscrTitle>
                  {currency}
                  {optionData.currentPrice}
                </DiscrTitle>
              </DiscrBoxTitle>
              <DiscrBoxSize>{optionData.title}</DiscrBoxSize>
            </DiscrBoxForText>
            <QuantityBox>
              <Quantity>
                <IconQuantityBtn
                  type="button"
                  aria-label="minus"
                  onClick={handleDecrease}
                  disabled={optionData.quantity <= 1}
                >
                  <Minus />
                </IconQuantityBtn>
                <span>{optionData.quantity}</span>
                <IconQuantityBtn
                  type="button"
                  aria-label="plus"
                  onClick={handleIncrease}
                  disabled={optionData.quantity >= optionData.total}
                >
                  <Plus />
                </IconQuantityBtn>
              </Quantity>
              <RemoveBtn
                onClick={() => {
                  removeProductHandler(_id, optionData.title);
                }}
              >
                remove
              </RemoveBtn>
            </QuantityBox>
          </DiscrBox>
        </DiscrBoxDiv>
      </OrderItem>
    </>
  );
};
