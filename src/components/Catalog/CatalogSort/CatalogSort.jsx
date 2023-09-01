import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import * as SC from './CatalogSort.styled';

export const CatalogSort = () => {
  const [sort, setSort] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const setParams = () => {
    let params = Object.fromEntries(searchParams);
    params.sort = sort;
    setSearchParams(params);
  };

  const handleClick = type => {
    setSort(type);
    localStorage.setItem('sort', type);
    setParams();
  };

  return (
    <SC.SortList>
      <SC.SortItem
        data-name="rating"
        onClick={e => {
          handleClick(e.target.dataset.name);
        }}
      >
        Most Popular
      </SC.SortItem>
      <SC.SortItem
        data-name="name"
        onClick={e => {
          handleClick(e.target.dataset.name);
        }}
      >
        Name
      </SC.SortItem>
      <SC.SortItem
        data-name="minMaxPrice"
        onClick={e => {
          handleClick(e.target.dataset.name);
        }}
      >
        Lowest Price
      </SC.SortItem>
      <SC.SortItem
        data-name="maxMinPrice"
        onClick={e => {
          handleClick(e.target.dataset.name);
        }}
      >
        Highest Price
      </SC.SortItem>
      <SC.SortItem
        data-name="discount"
        onClick={e => {
          handleClick(e.target.dataset.name);
        }}
      >
        % Off
      </SC.SortItem>
    </SC.SortList>
  );
};
