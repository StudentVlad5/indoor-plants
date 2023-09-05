import React from 'react';
import { useEffect } from 'react';
import { SEO } from 'utils/SEO';
import { useDispatch } from 'react-redux';
import { addHeaderBottom } from 'redux/header_bottom/operation';
import CheckOut from 'components/CheckOut/Checkout';

const CheckOutPage = ({ basket, removeProduct }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      addHeaderBottom({
        headerBottom: 'addHeaderBottom',
      }),
    );
  }, []);

  return (
    <>
      <SEO
        title="HomeForest CheckOut"
        description="CheckOut for making order"
      />
      <CheckOut basket={basket} removeProduct={removeProduct} />
    </>
  );
};

export default CheckOutPage;
