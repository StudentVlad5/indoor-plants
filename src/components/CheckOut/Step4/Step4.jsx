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
import { Link } from 'react-router-dom';
import { getFromStorage } from 'services/localStorService';

const Step4 = () => {
  const storedData = getFromStorage('formData');
  const ordersData = getFromStorage('orders');

  const [showAddAddress, setShowAddAddress] = useState(false);
  const [comment, setComment] = useState(
    storedData ? storedData.comment || '' : '',
  );
  const orders = useSelector(selectOrders);
  const selectedCity = getFromStorage('selectedCity');
  const selectedDepartment = getFromStorage('selectedDepartment');
  const selectedDeliveryOption = getFromStorage('selectedDeliveryOption');
  const dataToSave = [storedData];
  const ordersDataToSave = [ordersData];


  const handleCommentChange = e => {
    setComment(e.target.value);
  };

  const handleAddCommentToStorage = () => {
    storedData.comment = comment;
    localStorage.setItem('formData', JSON.stringify(storedData));
  };

  return (
    <>
      {/* {storedData.length > 0 ? ( */}
      {orders.length > 0
        ? ordersDataToSave.map(
            order =>
              ordersData &&
              order.map(orderIt =>
                orderIt.dataToSave.map(item => (
                  <OrderBox key={item.id}>
                    <OrderBoxContainer>
                      <OrderBoxTitle>Selected delivery</OrderBoxTitle>
                      {orders.length > 0 ? (
                        <></>
                      ) : (
                        <DataContainerPensil>
                          <Link to={`/checkout/step1`}>
                            <PensilStyle />
                          </Link>
                        </DataContainerPensil>
                      )}

                      <DataContainerText>
                        {selectedDeliveryOption}
                      </DataContainerText>
                      <DataContainerText>{selectedCity}</DataContainerText>
                      <DataContainerText>
                        {selectedDepartment}
                      </DataContainerText>
                    </OrderBoxContainer>

                    <OrderBoxContainer>
                      <OrderBoxTitle>Selected address</OrderBoxTitle>
                      {orders.length > 0 ? (
                        <></>
                      ) : (
                        <DataContainerPensil>
                          <Link to={`/checkout/step2`}>
                            <PensilStyle />
                          </Link>
                        </DataContainerPensil>
                      )}

                      <DataContainerTextGreen>
                        {item.name} {item.surname}
                      </DataContainerTextGreen>
                      <DataContainerText>{item.company}</DataContainerText>
                      <DataContainerText>{item.city}</DataContainerText>
                      <DataContainerText>{item.state}</DataContainerText>
                      <DataContainerText>{item.zipCode}</DataContainerText>
                      <DataContainerText>{item.address1}</DataContainerText>
                      <DataContainerText>{item.address2}</DataContainerText>
                      <DataContainerText>{item.phone}</DataContainerText>
                      <DataContainerText>{item.email}</DataContainerText>
                    </OrderBoxContainer>

                    <OrderBoxContainer>
                      <OrderBoxTitle>Selected payment</OrderBoxTitle>

                      {orders.length > 0 ? (
                        <></>
                      ) : (
                        <DataContainerPensil>
                          <Link to={`/checkout/step3`}>
                            <PensilStyle />
                          </Link>
                        </DataContainerPensil>
                      )}

                      <DataContainerText>
                        {item.selectedPaymentOption}
                      </DataContainerText>
                    </OrderBoxContainer>

                    <OrderBoxContainer>
                      <OrderBoxTitle> Comments to order</OrderBoxTitle>
                      {orders.length > 0 ? (
                        <></>
                      ) : (
                        <DataContainerPensil
                          onClick={() => setShowAddAddress(!showAddAddress)}
                        >
                          {showAddAddress ? (
                            <DataContainerCheckMark
                              onClick={() => {
                                handleAddCommentToStorage();
                              }}
                            />
                          ) : (
                            <PensilStyle />
                          )}
                        </DataContainerPensil>
                      )}
                      <DataContainerText>{item.comment}</DataContainerText>

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
                )),
              ),
          )
        : dataToSave.map(
            order =>
              storedData && (
                <OrderBox key={order.id}>
                  <OrderBoxContainer>
                    <OrderBoxTitle>Selected delivery</OrderBoxTitle>
                    {orders.length > 0 ? (
                      <></>
                    ) : (
                      <DataContainerPensil>
                        <Link to={`/checkout/step1`}>
                          <PensilStyle />
                        </Link>
                      </DataContainerPensil>
                    )}

                    <DataContainerText>
                      {selectedDeliveryOption}
                    </DataContainerText>
                    <DataContainerText>{selectedCity}</DataContainerText>
                    <DataContainerText>{selectedDepartment}</DataContainerText>
                  </OrderBoxContainer>

                  <OrderBoxContainer>
                    <OrderBoxTitle>Selected address</OrderBoxTitle>

                    {orders.length > 0 ? (
                      <></>
                    ) : (
                      <DataContainerPensil>
                        <Link to={`/checkout/step2`}>
                          <PensilStyle />
                        </Link>
                      </DataContainerPensil>
                    )}

                    <DataContainerTextGreen>
                      {order.name} {order.surname}
                    </DataContainerTextGreen>
                    <DataContainerText>{order.company}</DataContainerText>
                    <DataContainerText>{order.city}</DataContainerText>
                    <DataContainerText>{order.state}</DataContainerText>
                    <DataContainerText>{order.zipCode}</DataContainerText>
                    <DataContainerText>{order.address1}</DataContainerText>
                    <DataContainerText>{order.address2}</DataContainerText>
                    <DataContainerText>{order.phone}</DataContainerText>
                    <DataContainerText>{order.email}</DataContainerText>
                  </OrderBoxContainer>

                  <OrderBoxContainer>
                    <OrderBoxTitle>Selected payment</OrderBoxTitle>

                    {orders.length > 0 ? (
                      <></>
                    ) : (
                      <DataContainerPensil>
                        <Link to={`/checkout/step3`}>
                          <PensilStyle />
                        </Link>
                      </DataContainerPensil>
                    )}

                    <DataContainerText>
                      {order.selectedPaymentOption}
                    </DataContainerText>
                  </OrderBoxContainer>

                  <OrderBoxContainer>
                    <OrderBoxTitle> Comments to order</OrderBoxTitle>
                    {orders.length > 0 ? (
                      <></>
                    ) : (
                      <DataContainerPensil
                        onClick={() => setShowAddAddress(!showAddAddress)}
                      >
                        {showAddAddress ? (
                          <DataContainerCheckMark
                            onClick={() => {
                              handleAddCommentToStorage();
                            }}
                          />
                        ) : (
                          <PensilStyle />
                        )}
                      </DataContainerPensil>
                    )}

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
              ),
          )}
    </>
  );
};

export default Step4;
