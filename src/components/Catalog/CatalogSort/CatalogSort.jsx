import React from 'react';
import * as SC from './CatalogSort.styled';

export const CatalogSort = () => {
  return (
    <SC.SortList>
      <SC.SortItem>Most Popular</SC.SortItem>
      <SC.SortItem>Name</SC.SortItem>
      <SC.SortItem>Lowest Price</SC.SortItem>
      <SC.SortItem>Highest Price</SC.SortItem>
      <SC.SortItem>% Off</SC.SortItem>
    </SC.SortList>
  );
};
