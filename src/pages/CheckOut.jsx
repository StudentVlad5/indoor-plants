import React from 'react';
import { useEffect } from 'react';
import { SEO } from 'utils/SEO';
import { useDispatch } from 'react-redux';
import { addHeaderBottom } from 'redux/header_bottom/operation';
import CheckOut from 'components/CheckOut/Checkout';

const CheckOutPage = () => {
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
      <CheckOut />
    </>
  );
};

export default CheckOutPage;
