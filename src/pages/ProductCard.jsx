import React from 'react';
import { ProductCard } from '../components/ProductCard/ProductCard';
import { SEO } from 'utils/SEO';

const ProductCardPage = () => {
  return (
    <>
      <SEO title="HomeForest Product card" description="Product Card Page" />
      <ProductCard />
    </>
  );
};

export default ProductCardPage;
