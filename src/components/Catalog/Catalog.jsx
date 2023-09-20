import React, { useState, useEffect } from 'react';
import { useSearchParams, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { CatalogSort } from './CatalogSort/CatalogSort';
import { CatalogFilter } from './CatalogFilter/CatalogFilter';
import { Benefits } from './Benefits/Benefits';
import { CatalogList } from './CatalogList/CatalogList';
import { Pagination } from 'utils/pagination';
import { fetchData } from 'services/APIservice';
import {
  saveToStorage,
  getFromStorage,
  removeItem,
} from 'services/localStorService';
import { onLoading, onLoaded } from 'components/helpers/Loader/Loader';
import { onFetchError } from 'components/helpers/Messages/NotifyMessages';

import * as SC from './Catalog.styled';
import { ReactComponent as Open } from 'images/svg/open.svg';
import { ReactComponent as Close } from 'images/svg/icon_close.svg';

let perPage = 12;

export const Catalog = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalPage, setTotalPage] = useState(0);
  const [page, setPages] = useState(
    getFromStorage('page') ? getFromStorage('page') : 1,
  );
  const [selectedFilter, setSelectedFilter] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const routeParams = useParams();
  // console.log('Catalog ~ routeParams:', routeParams);
  const [category, setCategory] = useState(
    routeParams.category ? routeParams.category : 'plants',
  );

  const { t } = useTranslation();

  const setPage = toPage => {
    searchParams.set('page', toPage);
    saveToStorage('page', toPage);
    setPages(toPage);
    setSearchParams(searchParams);
  };

  useEffect(() => {
    if (!page || !perPage) {
      const params = { page, perPage };
      setPages(1);
      setSearchParams(params);
    }

    (async function getData() {
      setIsLoading(true);
      try {
        const { data } = await fetchData(
          `/catalog/${category}?${searchParams}`,
        );
        if (!data) {
          return onFetchError(t('Whoops, something went wrong'));
        }
        setProducts(data.catalog);
        setTotalPage(Math.ceil(data.total / perPage));
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [t, page, perPage, searchParams]);

  const [showSort, setShowSort] = useState(false);
  const toggleSort = () => {
    setShowSort(state => !state);
    setShowFilter(false);
  };

  const [showFilter, setShowFilter] = useState(false);
  const toggleFilter = () => {
    setShowFilter(state => !state);
    setShowSort(false);
  };

  const handleClick = () => {
    setShowSort(false);
    setShowFilter(false);
  };

  const removeLocalStor = () => {
    removeItem('category');
    removeItem('typeOfPlants');
    removeItem('rare');
    removeItem('light');
    removeItem('petFriendly');
    removeItem('minPrice');
    removeItem('maxPrice');
    removeItem('hardToKill');
    removeItem('potSize');
    removeItem('waterSchedule');
  };

  const getSelectedFilter = filters => {
    setSelectedFilter(filters);
  };

  // for (const [key, value] of searchParams.entries()) {
  //   console.log(`${key}, ${value}`);
  // }

  return (
    <SC.CatalogContainer>
      <SC.CatalogSection>
        <SC.Heading>
          <a
            href={`/indoor-plants/catalog/${category}?perPage=12&page=1`}
            onClick={() => removeLocalStor()}
          >
            <SC.HeadlineShop>{category}</SC.HeadlineShop>
          </a>
          {category === 'plants' && (
            <SC.HeadingBtnBox>
              <SC.SortBox>
                <SC.Accord onClick={toggleSort}>
                  <span>SORT BY</span>
                  <SC.IconBtn
                    type="button"
                    aria-label="switch to open sort list"
                    aria-expanded="false"
                  >
                    <Open />
                  </SC.IconBtn>
                </SC.Accord>
                {showSort && <CatalogSort />}
              </SC.SortBox>
              <SC.FiltersBox>
                <SC.Accord onClick={toggleFilter}>
                  <span>FILTER BY</span>
                  <SC.IconBtn
                    type="button"
                    aria-label="switch to open filter list"
                    aria-expanded="false"
                  >
                    <Open />
                  </SC.IconBtn>
                </SC.Accord>
                {showFilter && (
                  <SC.FiltersWrapper>
                    <CatalogFilter
                      onSelected={getSelectedFilter}
                      filters={selectedFilter}
                    />
                  </SC.FiltersWrapper>
                )}
              </SC.FiltersBox>
            </SC.HeadingBtnBox>
          )}
        </SC.Heading>
        <SC.SelectedFilters>
          {selectedFilter.map((filter, i) => {
            return (
              <label key={i} data-key={filter}>
                <span>{filter}</span>
                <Close />
              </label>
            );
          })}
        </SC.SelectedFilters>
        <SC.GridContainer onClick={handleClick}>
          <SC.FiltersContainer>
            {category === 'plants' && (
              <CatalogFilter
                onSelected={getSelectedFilter}
                filters={selectedFilter}
              />
            )}
          </SC.FiltersContainer>
          <SC.GridWrapper>
            {isLoading ? onLoading() : onLoaded()}
            {error && onFetchError(t('Whoops, something went wrong'))}
            {products.length > 0 && !error && (
              <CatalogList products={products} />
            )}
            <Pagination
              totalPage={totalPage}
              changePage={setPage}
              page={page}
            />
          </SC.GridWrapper>
        </SC.GridContainer>
      </SC.CatalogSection>
      <Benefits />
    </SC.CatalogContainer>
  );
};
