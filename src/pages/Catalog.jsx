import React from 'react';
import { CatalogList } from 'components/CatalogList/CatalogList';
import { Section } from 'components/baseStyles/CommonStyle.styled';
import { SEO } from 'utils/SEO';
import { CatalogFilter } from 'components/CatalogFilter/CatalogFilter';
import { CatalogSortBy } from 'components/CatalogSortBy/CatalogSortBy';

const CatalogPage = () => {
  return (
    <Section>
      <SEO title="HomeForest Catalog" description="Catalog of goods" />
      <CatalogSortBy />
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <CatalogFilter />
        <CatalogList />
      </div>
    </Section>
  );
};

export default CatalogPage;
