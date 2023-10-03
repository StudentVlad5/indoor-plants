import React from 'react';
import { Link } from 'react-router-dom';
import { getUser } from 'redux/auth/selectors';
import { useSelector } from 'react-redux';
import {
  FormContainer,
  TitleCheckOut,
  TextCheckOut,
  Btn,
  Legend,
  AuthCheckOutBox,
  AuthCheckOutBox2,
  BasketCompList,
} from './Step1.styled';
import { CustomCheckOut } from 'components/CheckOut/CustomCheckOut';
import { selectBasket } from 'redux/basket/selectors';
import { TotalPrice } from '../TotalPrice';

// import { useTranslation } from 'react-i18next';

const Step1 = () => {
  const auth = useSelector(getUser);
  // const { t } = useTranslation();
  const basket = useSelector(selectBasket);
  console.log(auth._id);
  console.log(basket.length > 0);
  return (
    <FormContainer>
      <div>
        <Legend>Basket</Legend>
        {auth._id && basket.length > 0 ? (
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
          <AuthCheckOutBox2>
            <TitleCheckOut>YOUR Basket is empty</TitleCheckOut>
            <TextCheckOut>Please add an item to checkout</TextCheckOut>
            <Link to="/catalog" style={{ textDecoration: 'none' }}>
              <Btn>SHOP</Btn>
            </Link>
          </AuthCheckOutBox2>
        )}
      </div>
    </FormContainer>
  );
};

export default Step1;
