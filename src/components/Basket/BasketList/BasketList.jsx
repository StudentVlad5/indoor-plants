import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeProduct } from 'redux/basket/operations';
import { setQuantity } from 'redux/basket/slice';
import { selectCurrency } from 'redux/basket/selectors';
import { onSuccess } from '../../helpers/Messages/NotifyMessages';
import {
  BasketCompIconClose,
  BasketCompImg,
  BasketCompItem,
  BoxForDiscrData,
  BtnItem,
  DiscrDataList,
  DiscrDataListItem,
  DiscrDataListItemHeading,
  DiscrDataListItemPrice,
  DiscrDataListItemTitle,
  DiscrDataListItemTitlePrice,
  DiscrDataTable,
  DiscrDataTableData,
  DiscrDataTableHead,
  DiscrDataTableLine,
  IconBtn,
} from './BasketList.styled';

import { ReactComponent as Minus } from 'images/svg/minus.svg';
import { ReactComponent as Plus } from 'images/svg/plus.svg';
import { BASE_URL_IMG } from 'BASE_CONST/Base-const';

export const BasketList = prod => {
  // const dispatch = useDispatch();
  const [optionData, setOptionData] = useState(prod.prod);
  console.log('optionData', optionData);
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

  const removeProductHandler = (_id, size) => {
    // dispatch(removeProduct({ _id, size }));
    onSuccess('Removed');
  };
  // const currency = useSelector(selectCurrency);

  // const initialPrice = optionData.currentPrice * optionData.quantity;
  const [price, setPrice] = useState(currentPrice * quantity);

  const handleDecrease = () => {
    if (quantity > 1) {
      const newValue = quantity - 1;
      const newPrice = newValue * currentPrice;
      setPrice(newPrice);
      // dispatch(setQuantity({ _id, optionData, quantity: newValue }));
    }
  };

  const handleIncrease = () => {
    if (quantity < total) {
      const newValue = quantity + 1;
      const newPrice = newValue * currentPrice;
      setPrice(newPrice);
      // dispatch(setQuantity({ _id, optionData, quantity: newValue }));
    }
  };

  return (
    <BasketCompItem>
      <BasketCompImg
        src={BASE_URL_IMG + images[0]}
        width={107}
        height={140}
        alt="Image"
        loading="lazy"
      />

      <BoxForDiscrData>
        <DiscrDataList>
          <DiscrDataListItem>
            <DiscrDataListItemHeading>
              <DiscrDataListItemTitle>{name}</DiscrDataListItemTitle>
              <DiscrDataListItemTitlePrice>
                {currency}
                {price}
              </DiscrDataListItemTitlePrice>
            </DiscrDataListItemHeading>
          </DiscrDataListItem>
          <table>
            <DiscrDataTable>
              <DiscrDataTableLine>
                <DiscrDataTableHead>Size</DiscrDataTableHead>
                {title === null ? (
                  <DiscrDataTableData>-</DiscrDataTableData>
                ) : (
                  <DiscrDataTableData>{title}</DiscrDataTableData>
                )}
              </DiscrDataTableLine>

              <DiscrDataTableLine>
                <DiscrDataTableHead>Price</DiscrDataTableHead>
                {discount !== 0 ? (
                  <DiscrDataTableData>
                    <DiscrDataListItemPrice $red>
                      {currency}
                      {currentPrice}
                    </DiscrDataListItemPrice>
                    <DiscrDataListItemPrice>
                      {currency}
                      {oldPrice}
                    </DiscrDataListItemPrice>
                  </DiscrDataTableData>
                ) : (
                  <DiscrDataTableData>
                    <DiscrDataListItemPrice>
                      {currency}
                      {currentPrice}
                    </DiscrDataListItemPrice>
                  </DiscrDataTableData>
                )}
              </DiscrDataTableLine>

              <DiscrDataTableLine>
                <DiscrDataTableHead>Quantity</DiscrDataTableHead>
                <DiscrDataTableData>
                  <IconBtn
                    type="button"
                    aria-label="minus"
                    onClick={handleDecrease}
                    disabled={quantity <= 1}
                  >
                    <Minus />
                  </IconBtn>
                  <span>{quantity}</span>
                  <IconBtn
                    type="button"
                    aria-label="plus"
                    onClick={handleIncrease}
                    disabled={quantity >= total}
                  >
                    <Plus />
                  </IconBtn>
                </DiscrDataTableData>
              </DiscrDataTableLine>
            </DiscrDataTable>
          </table>
        </DiscrDataList>

        <BtnItem
          onClick={() => {
            removeProductHandler(_id, title);
          }}
        >
          <BasketCompIconClose />
          remove
        </BtnItem>
      </BoxForDiscrData>
    </BasketCompItem>
  );
};
