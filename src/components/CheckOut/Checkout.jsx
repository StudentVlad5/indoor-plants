import React from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../../redux/auth/selectors';
import { useSelector } from 'react-redux';
import {
  FormSection,
  FormContainer,
  TitleCheckOut,
  TextCheckOut,
  Btn,
  BasketCompTitle,
  AuthCheckOutBox,
  AuthCheckOutBox2,
  BasketCompList,
} from './Checkout.styled';
import { CustomCheckOut } from 'components/CheckOut/CustomCheckOut';
import { selectBasket } from 'redux/basket/selectors';
import { TotalPrice } from './TotalPrice';
// import { useTranslation } from 'react-i18next';

export const CheckOut = () => {
  const auth = useSelector(getUser);
  // const { t } = useTranslation();
  const basket = useSelector(selectBasket);

  return (
    <FormSection>
      <FormContainer>
        <BasketCompTitle>Basket</BasketCompTitle>
        {basket.length !== 0 ? (
          <div>
            <BasketCompList>
              {basket.map((product, idx) => (
                <CustomCheckOut
                  key={`${idx}${product._id}`}
                  {...{ ...product, index: idx }}
                />
              ))}
            </BasketCompList>

            <TotalPrice />
          </div>
        ) : (
          <AuthCheckOutBox2>
            <TitleCheckOut>YOUR Basket is empty</TitleCheckOut>
            <TextCheckOut>Please add an item to checkout</TextCheckOut>
            <Link to="/catalog" style={{ textDecoration: 'none' }}>
              <Btn>SHOP</Btn>
            </Link>
          </AuthCheckOutBox2>
        )}

        {!auth._id && (
          <AuthCheckOutBox>
            <TitleCheckOut>Do not see selected products?</TitleCheckOut>
            <TextCheckOut>
              Make sure you’re signed into your account
            </TextCheckOut>
            <Link to="/signin" style={{ textDecoration: 'none' }}>
              <Btn>SIGN IN</Btn>
            </Link>
          </AuthCheckOutBox>
        )}
      </FormContainer>
    </FormSection>
  );
};

export default CheckOut;
