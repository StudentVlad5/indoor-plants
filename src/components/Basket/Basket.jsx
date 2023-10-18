import React from 'react';
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
// import { selectComment, selectOrders } from 'redux/order/selectors';
// import {
//   DataContainerCheckMark,
//   DataContainerPensil,
//   DataContainerText,
// } from 'components/CheckOut/Order/Order.styled';
// import { PensilStyle } from 'components/UserComp/UserData/UserData.styled';
// import { useState } from 'react';
// import { addCommentToOrder } from 'redux/order/operations';

// import { useTranslation } from 'react-i18next';

export const Basket = ({ confirm, handleAddOrder }) => {
  // const { t } = useTranslation();
  // const userComment = useSelector(selectComment);
  const auth = useSelector(getUser);
  const basket = useSelector(selectBasket);
  // const orders = useSelector(selectOrders);
  const dispatch = useDispatch();
  // const [showAddAddress, setShowAddAddress] = useState(false);
  // const [comment, setComment] = useState(userComment || '');

  // const handleCommentChange = e => {
  //   setComment(e.target.value);
  // };

  // const handleAddComment = (orderId, comment) => {
  //   dispatch(addCommentToOrder(orderId, comment));
  // };

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

            <TotalPrice confirm={confirm} handleAddOrder={handleAddOrder} />
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

        {basket.length === 0 && !auth._id && (
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
        )}
      </BasketContainer>
    </BasketSection>
  );
};
