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

export const Basket = () => {
  // const { t } = useTranslation();
  // const userComment = useSelector(selectComment);
  const auth = useSelector(getUser);
  const basket = useSelector(selectBasket);
  // const orders = useSelector(selectOrders);
  // const dispatch = useDispatch();
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

            <TotalPrice basket={basket[0]?.optionData} />
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

        {/* {orders.map(order => (
          <OrderBox key={order.id}>
            <OrderBoxContainer>
              <OrderBoxTitle>Selected delivery</OrderBoxTitle>
              <DataContainerText>
                {order.selectedDeliveryOption}
              </DataContainerText>
              <DataContainerText>{order.cityDelivery}</DataContainerText>
              <DataContainerText>{order.department}</DataContainerText>
            </OrderBoxContainer>

            <OrderBoxContainer>
              <OrderBoxTitle>Selected address</OrderBoxTitle>

              <DataContainerTextGreen>
                {order.name} {order.surname}
              </DataContainerTextGreen>
              <DataContainerText>{order.company}</DataContainerText>
              <DataContainerText>{order.city}</DataContainerText>
              <DataContainerText>{order.state}</DataContainerText>
              <DataContainerText>{order.zipCode}</DataContainerText>
              <DataContainerText>{order.address1}</DataContainerText>
              <DataContainerText>{order.address2}</DataContainerText>
              <DataContainerText>{order.email}</DataContainerText>
              <DataContainerText>{order.phone}</DataContainerText>
            </OrderBoxContainer>

            <OrderBoxContainer>
              <OrderBoxTitle>Selected payment</OrderBoxTitle>
              <DataContainerText>
                {order.selectedPaymentOption}
              </DataContainerText>
            </OrderBoxContainer>

            <OrderBoxContainer>
              <OrderBoxTitle> Comments to order</OrderBoxTitle>
              <DataContainerPensil
                onClick={() => setShowAddAddress(!showAddAddress)}
              >
                {showAddAddress ? (
                  <DataContainerCheckMark
                    onClick={() => {
                      const orderId = order.id;
                      const commentUser = comment;
                      handleAddComment(orderId, commentUser);
                    }}
                  />
                ) : (
                  <PensilStyle />
                )}
              </DataContainerPensil>

              <DataContainerText>{order.comment}</DataContainerText>

              {showAddAddress && (
                <form>
                  <label>
                    <textarea
                      name="comment"
                      value={comment}
                      onChange={handleCommentChange}
                      id="comment"
                      cols="30"
                      rows="10"
                    ></textarea>
                  </label>
                </form>
              )}
            </OrderBoxContainer>
          </OrderBox>
        ))} */}

        {auth._id ? (
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
        ) : (
          <AuthCheckOutBox></AuthCheckOutBox>
        )}
      </BasketContainer>
    </BasketSection>
  );
};
