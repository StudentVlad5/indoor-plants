import React from 'react';
import { useEffect } from 'react';
import { SEO } from 'utils/SEO';
import { useDispatch } from 'react-redux';
import { cleanHeaderBottom } from 'redux/header_bottom/operation';
import Delivery from 'components/Delivery/Delivery';

const CarePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cleanHeaderBottom());
  }, []);

  return (
    <>
      <SEO title="HomeForest Care" description="Care of your plants" />
      <Delivery />
    </>
  );
};

export default CarePage;
