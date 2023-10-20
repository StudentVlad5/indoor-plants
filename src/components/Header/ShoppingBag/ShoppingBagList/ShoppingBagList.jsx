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
import { removeItemInBasket } from 'services/APIservice';
import { getFromStorage } from 'services/localStorService';

export const ShoppingBagList = ({ optionData, setDatas, datas, idx }) => {
  // const dispatch = useDispatch();
  const {
    _id,
    currency,
    currentPrice,
    discount,
    images,
    name,
    oldPrice,
    quantity,
    title,
    total,
  } = optionData;

  // ----------------------------------------->
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [userAnonimusID] = useState(
    getFromStorage('userAnonimusID') ? getFromStorage('userAnonimusID') : '',
  );

  async function removeItem(_id, size) {
    setIsLoading(true);
    try {
      const { data } = await removeItemInBasket(`/basket/${userAnonimusID}`, {
        size,
        _id,
      });
      if (!data) {
        return onFetchError(t('Whoops, something went wrong'));
      }
      setDatas([data]);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }
  // ----------------------------------------->

  const removeProductHandler = (_id, size) => {
    // dispatch(removeProduct({ _id, size }));
    removeItem(_id, size);
  };
  // const currency = useSelector(selectCurrency);

  const initialPrice = currentPrice * quantity;
  const [price, setPrice] = useState(initialPrice);
  let newData = [];

  const handleDecrease = () => {
    if (quantity > 1) {
      const newValue = quantity - 1;
      const newPrice = newValue * currentPrice;
      setPrice(newPrice);
      newData = { ...datas[0].optionData[idx] };
      newData.quantity = newValue;

      let options = [...datas[0].optionData];
      options[idx] = newData;
      let array = [
        {
          _id,
          optionData: options,
        },
      ];

      setDatas(prev => array);
    }
  };

  const handleIncrease = () => {
    if (quantity < total) {
      const newValue = quantity + 1;
      const newPrice = newValue * currentPrice;
      setPrice(newPrice);
      newData = { ...datas[0].optionData[idx] };
      newData.quantity = newValue;

      let options = [...datas[0].optionData];
      options[idx] = newData;
      let array = [
        {
          _id,
          optionData: options,
        },
      ];

      setDatas(prev => array);
    }
  };

  return (
    <>
      <OrderItem>
        {images && (
          <ListImage
            src={BASE_URL_IMG + images[0]}
            alt="Image"
            loading="lazy"
          />
        )}
        <DiscrBoxDiv>
          <DiscrBox>
            <DiscrBoxForText>
              <DiscrBoxTitle>
                <DiscrTitle>{name}</DiscrTitle>
                <DiscrTitle>
                  {currency}
                  {currentPrice}
                </DiscrTitle>
              </DiscrBoxTitle>
              <DiscrBoxSize>{title}</DiscrBoxSize>
            </DiscrBoxForText>
            <QuantityBox>
              <Quantity>
                <IconQuantityBtn
                  type="button"
                  aria-label="minus"
                  onClick={handleDecrease}
                  disabled={quantity <= 1}
                >
                  <Minus />
                </IconQuantityBtn>
                <span>{quantity}</span>
                <IconQuantityBtn
                  type="button"
                  aria-label="plus"
                  onClick={handleIncrease}
                  disabled={quantity >= total}
                >
                  <Plus />
                </IconQuantityBtn>
              </Quantity>
              <RemoveBtn
                onClick={() => {
                  removeProductHandler(_id, title);
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
