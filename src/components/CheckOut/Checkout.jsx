import React from 'react';
import {
  FormSection,
  FormContainer,
  TitleCheckOut,
  TextCheckOut,
  Btn,
} from './Checkout.styled';
import { Link } from 'react-router-dom';
import { getUser } from '../../redux/auth/selectors';
import { useSelector } from 'react-redux';

// import { useTranslation } from 'react-i18next';

export const CheckOut = () => {
  const auth = useSelector(getUser);

  // const { t } = useTranslation();

  return (
    <FormSection>
      <FormContainer>
        <TitleCheckOut>YOUR Basket is empty</TitleCheckOut>
        <TextCheckOut>Please add an item to checkout</TextCheckOut>
        <Link to="/catalog" style={{ textDecoration: 'none' }}>
          <Btn>SHOP</Btn>
        </Link>
        {!auth._id && (
          <>
            <TitleCheckOut>Do not see selected products?</TitleCheckOut>
            <TextCheckOut>
              Make sure you’re signed into your account
            </TextCheckOut>
            <Link to="/signin" style={{ textDecoration: 'none' }}>
              <Btn>SIGN IN</Btn>
            </Link>
          </>
        )}
      </FormContainer>
    </FormSection>
  );
};

export default CheckOut;
