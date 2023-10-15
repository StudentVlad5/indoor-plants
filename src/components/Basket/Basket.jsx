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
import Step4 from 'components/CheckOut/Step4/Step4';

// import { useTranslation } from 'react-i18next';

export const Basket = () => {
  // const { t } = useTranslation();
  const auth = useSelector(getUser);
  const basket = useSelector(selectBasket);

  return (
    <BasketSection>
      <BasketContainer>
        <Legend>Basket</Legend>

        {/* {auth._id && basket.length > 0 ? ( */}
        {basket.length > 0 ? (
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
        ) : (
          <AuthCheckOutBox>
            <TitleCheckOut>YOUR Basket is empty</TitleCheckOut>
            <TextCheckOut>Please add an item to checkout</TextCheckOut>
            <Link to="/catalog" style={{ textDecoration: 'none' }}>
              <Btn>SHOP</Btn>
            </Link>
          </AuthCheckOutBox>
        )}

        <Step4 />

        {basket.length === 0 && !auth._id ? (
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
          <AuthCheckOutBox></AuthCheckOutBox>
        )}
      </BasketContainer>
    </BasketSection>
  );
};
