import React from 'react';
import { SEO } from 'utils/SEO';
import { Catalog } from '../components/Catalog/Catalog';

const CatalogPage = () => {
  return (
    <>
      <SEO title="HomeForest Catalog" description="Catalog of goods" />
      <Catalog />
    </>
  );
};

export default CatalogPage;
