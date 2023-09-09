import React from 'react';
import {
  BasketIconMinus,
  BasketIconPlus,
  DiscrBox,
  DiscrBoxBtn,
  DiscrBoxDiv,
  DiscrBoxForText,
  DiscrBoxSize,
  DiscrBoxTilte,
  DiscrDataListItemBasket,
  ListImage,
  OrderItem,
  QuantityCheckOutBasket,
  QuantityCheckOutList,
} from '../Basket.styled';
import { useDispatch } from 'react-redux';
import { removeProduct } from 'redux/basket/operations';
import * as SC from '../../../ProductCard/ProductCard.styled';
import { setQuantity } from 'redux/basket/slice';
import { useState } from 'react';

export const BasketList = ({ _id, name, optionData, images, quantity }) => {
  const { BASE_URL_IMG } = window.global;

  const dispatch = useDispatch();

  const removeProductHandler = (_id, size) => {
    dispatch(removeProduct({ _id, size }));
  };

  // const [value, setValue] = useState(optionData.quantity);
  const initialPrice = optionData.currentPrice * optionData.quantity;
  // const [, setPrice] = useState(initialPrice);
  // const quantityData = optionData._id;

  const handleDecrease = () => {
    // if (quantity > 1) {
      // const newValue = quantity - 1;
      // setValue(newValue);
      // const newPrice = newValue * optionData.currentPrice;
      // setPrice(newPrice);
      // // dispatch(setQuantity({ quantityData, quantity: newValue }));
      // dispatch(setQuantity({ _id, optionData, quantity: newValue }));
    
    // }

    if (optionData.quantity > 1) {
      const newValue = optionData.quantity - 1;
      // setValue(newValue);
      // const newPrice = newValue * optionData.currentPrice;
      // setPrice(newPrice);
      dispatch(setQuantity({ _id, quantity: newValue }));
    }
  };

  const handleIncrease = () => {
    // if (quantity < optionData.total) {
      // const newValue = quantity + 1;
      // setValue(newValue);
      // const newPrice = newValue * optionData.currentPrice;
      // setPrice(newPrice);
      // // dispatch(setQuantity({ quantityData, quantity: newValue }));
      // dispatch(setQuantity({ _id, optionData, quantity: newValue }));
      
    // }
    if (optionData.quantity < optionData.total) {
      const newValue = optionData.quantity + 1;
      // setValue(newValue);
      // const newPrice = newValue * optionData.currentPrice;
      // setPrice(newPrice);
      dispatch(setQuantity({ _id, quantity: newValue }));
    }
  };

  return (
    <>
      <OrderItem>
        <ListImage src={BASE_URL_IMG + images[0]} alt="Image" loading="lazy" />
        <DiscrBoxDiv>
          <DiscrBox>
            <DiscrBoxForText>
              <DiscrBoxTilte>{name}</DiscrBoxTilte>
              <DiscrBoxTilte>${optionData.currentPrice}</DiscrBoxTilte>
            </DiscrBoxForText>

            {optionData.title === null ? (
              <DiscrBoxSize>S</DiscrBoxSize>
            ) : (
              <DiscrBoxSize>{optionData.title}</DiscrBoxSize>
            )}

            <QuantityCheckOutList>
              <DiscrDataListItemBasket>
                <QuantityCheckOutBasket>
                  <SC.IconBtn
                    type="button"
                    aria-label="minus"
                    onClick={handleDecrease}
                    disabled={optionData.quantity <= 1}
                  >
                    <BasketIconMinus />
                  </SC.IconBtn>
                  <span>{optionData.quantity}</span>
                  <SC.IconBtn
                    type="button"
                    aria-label="plus"
                    onClick={handleIncrease}
                    disabled={optionData.quantity >= optionData.total}
                  >
                    <BasketIconPlus />
                  </SC.IconBtn>
                </QuantityCheckOutBasket>
              </DiscrDataListItemBasket>
            </QuantityCheckOutList>
            <DiscrBoxBtn
              onClick={() => {
                removeProductHandler(_id, optionData.title);
              }}
            >
              remove
            </DiscrBoxBtn>
          </DiscrBox>
        </DiscrBoxDiv>
      </OrderItem>
    </>
  );
};
