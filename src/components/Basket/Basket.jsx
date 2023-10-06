import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
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
} from './Basket.styled';

// import { useTranslation } from 'react-i18next';

export const Basket = () => {
  const auth = useSelector(getUser);
  // const { t } = useTranslation();
  const basket = useSelector(selectBasket);

  return (
    <BasketSection>
      <BasketContainer>
        <Legend>Basket</Legend>
        {auth._id && basket.length > 0 ? (
          <BasketWrapper>
            <BasketCompList>
              {basket.map((product, idx) => (
                <BasketList
                  key={`${idx}${product._id}`}
                  {...{ ...product, index: idx }}
                />
              ))}
            </BasketCompList>

            <TotalPrice />
          </BasketWrapper>
        ) : !auth._id ? (
          <AuthCheckOutBox>
            <TitleCheckOut>Do not see selected products?</TitleCheckOut>
            <TextCheckOut>
              Make sure you’re signed into your account
            </TextCheckOut>
            <Link to="/signin" style={{ textDecoration: 'none' }}>
              <Btn>SIGN IN</Btn>
            </Link>
          </AuthCheckOutBox>
        ) : (
          <AuthCheckOutBox>
            <TitleCheckOut>YOUR Basket is empty</TitleCheckOut>
            <TextCheckOut>Please add an item to checkout</TextCheckOut>
            <Link to="/catalog" style={{ textDecoration: 'none' }}>
              <Btn>SHOP</Btn>
            </Link>
          </AuthCheckOutBox>
        )}
      </BasketContainer>
    </BasketSection>
  );
};