import React from 'react';
import { ProductCard } from '../components/ProductCard/ProductCard';
import { SEO } from 'utils/SEO';

const ProductCardPage = () => {
  return (
    <>
      <SEO title="Product card" description="Get to know this plant" />
      <ProductCard />
    </>
  );
};

export default ProductCardPage;
