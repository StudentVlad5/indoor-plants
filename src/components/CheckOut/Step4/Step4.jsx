import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectComment, selectOrders } from 'redux/order/selectors';
import {
  OrderBox,
  OrderBoxTitle,
  DataContainerTextGreen,
  OrderBoxContainer,
  OrderForm,
  OrderFormTextarea,
} from 'components/Basket/Basket.styled';
import {
  DataContainerCheckMark,
  DataContainerPensil,
  DataContainerText,
} from 'components/CheckOut/Order/Order.styled';
import { PensilStyle } from 'components/UserComp/UserData/UserData.styled';
import { addCommentToOrder } from 'redux/order/operations';

const Step4 = () => {
  const orders = useSelector(selectOrders);
  const userComment = useSelector(selectComment);
  const dispatch = useDispatch();
  const [showAddAddress, setShowAddAddress] = useState(false);
  const [comment, setComment] = useState(userComment || '');

  const handleCommentChange = e => {
    setComment(e.target.value);
  };

  const handleAddComment = (orderId, comment) => {
    dispatch(addCommentToOrder(orderId, comment));
  };
  return (
    <>
      {orders.map(order => (
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
            <DataContainerText>{order.selectedPaymentOption}</DataContainerText>
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
              <OrderForm>
                <label>
                  <OrderFormTextarea
                    name="comment"
                    value={comment}
                    onChange={handleCommentChange}
                    id="comment"
                    cols="30"
                    rows="10"
                  ></OrderFormTextarea>
                </label>
              </OrderForm>
            )}
          </OrderBoxContainer>
        </OrderBox>
      ))}
    </>
  );
};

export default Step4;
