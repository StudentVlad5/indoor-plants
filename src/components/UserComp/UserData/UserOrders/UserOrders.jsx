import React, { useEffect, useState } from 'react';
import { getOrder } from '../../../../services/APIservice';
import { useSelector } from 'react-redux';
import { selectId } from 'redux/auth/selectors';

export const UserOrders = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [orderList, setOrderList] = useState([]);
  const user_id = useSelector(selectId);

  useEffect(() => {
    (async function getOrders() {
      setIsLoading(true);
      try {
        const { data } = await getOrder(`/order/${user_id}`);
        setOrderList(data);
        if (!data) {
          return onFetchError(t('Whoops, something went wrong'));
        }
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);
  console.log(orderList);
  return <ul>{orderList && <li>xfgxgxfgxfg</li>}</ul>;
};
