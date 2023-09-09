import React from 'react';
import {
  BasketCompIconClose,
  BasketCompImg,
  BasketCompItem,
  BoxForDiscrData,
  BtnItem,
  DiscrDataList,
  DiscrDataListItem,
  DiscrDataListItemInfo,
  DiscrDataListItemInfoTitle,
  DiscrDataListItemTitle,
  DiscrDataListItemTitlePrice,
  QuantityCheckOut,
} from './Checkout.styled';
import * as SC from '../ProductCard/ProductCard.styled';
import { ReactComponent as Minus } from 'images/svg/minus.svg';
import { ReactComponent as Plus } from 'images/svg/plus.svg';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeProduct } from 'redux/basket/operations';
import { setQuantity } from 'redux/basket/slice';
import { onSuccess } from '../helpers/Messages/NotifyMessages';

export const CustomCheckOut = ({ _id, name, optionData, images, quantity }) => {
  // console.log('IDDDD--', _id, name, oldPrice, currentPrice, optionData, images);
  const { BASE_URL_IMG } = window.global;

  const dispatch = useDispatch();

  const removeProductHandler = (_id, size) => {
    dispatch(removeProduct({ _id, size }));
    onSuccess('Removed');
  };

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
            <DiscrDataListItemTitlePrice>${price}</DiscrDataListItemTitlePrice>
          </DiscrDataListItem>

          <DiscrDataListItem>
            <DiscrDataListItemInfoTitle>Size</DiscrDataListItemInfoTitle>
            {optionData.title === null ? (
              <DiscrDataListItemInfo>S</DiscrDataListItemInfo>
            ) : (
              <DiscrDataListItemInfo>{optionData.title}</DiscrDataListItemInfo>
            )}
          </DiscrDataListItem>

          <DiscrDataListItem>
            <DiscrDataListItemInfoTitle>Price</DiscrDataListItemInfoTitle>
            <DiscrDataListItemInfo>
              ${optionData.currentPrice}
            </DiscrDataListItemInfo>
          </DiscrDataListItem>

          <DiscrDataListItem>
            <DiscrDataListItemInfoTitle>Quantity</DiscrDataListItemInfoTitle>
            <QuantityCheckOut>
              <SC.IconBtn
                type="button"
                aria-label="minus"
                onClick={handleDecrease}
                disabled={optionData.quantity <= 1}
              >
                <Minus style={{ cursor: 'pointer' }} />
              </SC.IconBtn>
              <span>{optionData.quantity}</span>
              <SC.IconBtn
                type="button"
                aria-label="plus"
                onClick={handleIncrease}
                disabled={optionData.quantity >= optionData.total}
              >
                <Plus />
              </SC.IconBtn>
            </QuantityCheckOut>
          </DiscrDataListItem>
        </DiscrDataList>

        <BtnItem
          onClick={() => {
            removeProductHandler(_id, optionData.title);
          }}
        >
          <BasketCompIconClose />
          remove
        </BtnItem>
      </BoxForDiscrData>
    </BasketCompItem>
  );
};
