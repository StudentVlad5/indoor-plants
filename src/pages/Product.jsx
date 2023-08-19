import React from 'react';
import { Hero } from '../components/Hero/Hero';
import { SEO } from 'utils/SEO';

const ProductCardPage = () => {
  return (
    <>
      <SEO title="Product card" description="Get to know this plant" />

      <Hero />
    </>
  );
};

export default ProductCardPage;
