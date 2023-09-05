import React from 'react';
import { Health } from '../Health/Health';
import { Care } from '../Care/Care';
import { FeedbackComp } from '../Feedback/Feedback';
import { ProductsBox } from '../Products/Products.styled';

export const HomeComp = () => {
  return (
    <ProductsBox>
      <Health />
      <Care />
      <FeedbackComp />
    </ProductsBox>
  );
};
