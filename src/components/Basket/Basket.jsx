import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectBasket } from 'redux/basket/selectors';
import { getUser } from 'redux/auth/selectors';
import { BasketList } from 'components/Basket/BasketList/BasketList';
import { TotalPrice } from './Total/TotalPrice';
import {
  BasketSection,
  BasketContainer,
  TitleCheckOut,
  TextCheckOut,
  Btn,
  Legend,
  AuthCheckOutBox,
  BasketCompList,
  BasketWrapper,
  OrderBox,
  OrderBoxTitle,
  DataContainerTextGreen,
  OrderBoxContainer,
} from './Basket.styled';
// import { useTranslation } from 'react-i18next';

export const Basket = ({ confirm, handleAddOrder }) => {
  // const { t } = useTranslation();
  // const userComment = useSelector(selectComment);
  const auth = useSelector(getUser);
  const [basket, setBasket] = useState(useSelector(selectBasket));

  return (
    <BasketSection>
      <BasketContainer>
        <Legend>Basket</Legend>
        {/* {auth._id && basket.length > 0 ? ( */}
        {basket && basket[0]?.optionData?.length !== undefined ? (
          <BasketWrapper>
            <BasketCompList>
              {basket[0]?.optionData?.map((product, idx) => (
                <BasketList
                  key={`${idx}${product._id}`}
                  // {...{ ...product, index: idx }}
                  prod={product}
                />
              ))}
            </BasketCompList>

            <TotalPrice
              basket={basket[0]?.optionData}
              confirm={confirm}
              handleAddOrder={handleAddOrder}
            />
          </BasketWrapper>
        ) : (
          <AuthCheckOutBox>
            <TitleCheckOut>YOUR Basket is empty</TitleCheckOut>
            <TextCheckOut>Please add an item to checkout</TextCheckOut>
            <Link to="/catalog" style={{ textDecoration: 'none' }}>
              <Btn>SHOP</Btn>
            </Link>
          </AuthCheckOutBox>
        )}
        {/* {!auth._id && (
          <AuthCheckOutBox>
            <TitleCheckOut>
              For quick ordering and saving order history
            </TitleCheckOut>
            <TextCheckOut>
              Make sure you’re signed into your account
            </TextCheckOut>
            <Link to="/signin" style={{ textDecoration: 'none' }}>
              <Btn>SIGN IN</Btn>
            </Link>
          </AuthCheckOutBox>
        )} */}
        {!auth._id &&
          basket &&
          basket[0]?.optionData?.length !== undefined &&
          basket[0]?.optionData?.length !== 0 && (
            <AuthCheckOutBox>
              <TitleCheckOut>
                For quick ordering and saving order history
              </TitleCheckOut>
              <TextCheckOut>
                Make sure you’re signed into your account
              </TextCheckOut>
              <Link to="/signin" style={{ textDecoration: 'none' }}>
                <Btn>SIGN IN</Btn>
              </Link>
              {!basket &&
                basket[0]?.optionData?.length == undefined &&
                basket[0]?.optionData?.length == 0 && (
                  <>
                    <TitleCheckOut>YOUR Basket is empty</TitleCheckOut>
                    <TextCheckOut>Please add an item to checkout</TextCheckOut>
                    <Link to="/catalog" style={{ textDecoration: 'none' }}>
                      <Btn>SHOP</Btn>
                    </Link>
                  </>
                )}
            </AuthCheckOutBox>
          )}
      </BasketContainer>
    </BasketSection>
  );
};
