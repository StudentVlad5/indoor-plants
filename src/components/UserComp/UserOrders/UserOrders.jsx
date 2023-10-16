import React, { useEffect, useState } from 'react';
import { getOrder } from '../../../services/APIservice';
import { useSelector } from 'react-redux';
import { selectId } from 'redux/auth/selectors';
import { BASE_URL_IMG } from 'BASE_CONST/Base-const';
import {
  ImgItem,
  ListContainer,
  OrderItem,
  OrderItemDetails,
  OrderItemWrap,
  OrderItemDetailsContainer,
} from './UserOrders.styled';
import { onLoaded, onLoading } from 'components/helpers/Loader/Loader';
import { onFetchError } from 'components/helpers/Messages/NotifyMessages';
import { Pagination } from 'utils/pagination';
import { useSearchParams } from 'react-router-dom';

export const UserOrders = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [orderList, setOrderList] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const [page, setPages] = useState(1);
  const user_id = useSelector(selectId);
  const [searchParams, setSearchParams] = useSearchParams();
  let perPage = 5;

  useEffect(() => {
    if (!page || !perPage) {
      const params = { page: 1, perPage };
      setPages(1);
      setSearchParams(params);
    }
    (async function getOrders() {
      setIsLoading(true);
      try {
        const { data } = await getOrder(`/order/${user_id}?${searchParams}`);
        let array = [];
        data?.data.map(it => array.push(it.createdAt));
        array.sort(function (a, b) {
          var c = new Date(a);
          var d = new Date(b);
          return d - c;
        });
        let newData = [];
        array.forEach(it =>
          data?.data.map(item => {
            if (item.createdAt === it) {
              newData.push(item);
            }
          }),
        );
        setOrderList(newData);
        setTotalPage(Math.ceil(data.total / perPage));
        if (!data) {
          return onFetchError(t('Whoops, something went wrong'));
        }
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [page, perPage, searchParams]);

  useEffect(() => {
    if (page === 1) {
      setSearchParams({ page: 1, perPage });
    }
  }, []);

  const setPage = toPage => {
    searchParams.set('page', toPage);
    setPages(toPage);
    setSearchParams(searchParams);
  };

  return (
    <ListContainer>
      {orderList &&
        orderList.map((order, index) => (
          <OrderItem key={order._id}>
            <OrderItemDetailsContainer>
              <OrderItemWrap>
                <p>
                  Date:{' '}
                  {order?.createdAt
                    .split('T')[0]
                    .split('-')
                    .reverse()
                    .join('.')}
                </p>
                <br />
                <p>
                  Total amount: {order?.totalAmount}
                  {order?.basket[0]?.currency}
                </p>
                <p>
                  Discount: {order?.totalDiscount}
                  {order?.basket[0]?.currency}
                </p>
                <p>
                  Payment: {order?.totalPayment}
                  {order?.basket[0]?.currency}
                </p>
              </OrderItemWrap>
              <div style={{ padding: '12px' }}>
                <p>{order?.deliveryOrder?.delivery}</p>
                <p>City: {order?.deliveryOrder?.cityDelivery}</p>
                <p>Adress: {order?.deliveryOrder?.departmentDelivery}</p>
                <p>{order?.selectedPaymentOption}</p>
              </div>
              {order?.basket.map(item => (
                <OrderItemDetails key={item.optionData._id}>
                  <ImgItem
                    src={BASE_URL_IMG + item?.images[0]}
                    alt="Image item"
                    loading="lazy"
                  ></ImgItem>
                  <div style={{ padding: '12px' }}>
                    <p>Name: {item?.name}</p>
                    <p>Size: {item?.optionData.title}</p>
                    <p>Quantity: {item?.optionData.quantity}</p>
                    <p>Price: {item?.optionData.currentPrice}</p>
                  </div>
                </OrderItemDetails>
              ))}
            </OrderItemDetailsContainer>
          </OrderItem>
        ))}
      {isLoading ? onLoading() : onLoaded()}
      {error && onFetchError('Whoops, something went wrong')}
      <Pagination totalPage={totalPage} changePage={setPage} page={page} />
    </ListContainer>
  );
};
