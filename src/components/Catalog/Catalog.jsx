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
import { Headline } from 'components/baseStyles/CommonStyle.styled';

let perPage = 12;
const initialState = {
  typeOfPlants: [],
  rare: [],
  light: [],
  petFriendly: [],
  minPrice: '',
  maxPrice: '',
  hardToKill: [],
  potSize: [],
  waterSchedule: [],
};

export const Catalog = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalPage, setTotalPage] = useState(0);
  const [page, setPages] = useState(
    getFromStorage('page') ? getFromStorage('page') : 1,
  );
  const [searchParams, setSearchParams] = useSearchParams();
  const routeParams = useParams();
  const [category] = useState(
    routeParams.category ? routeParams.category : 'plants',
  ); //, setCategory
  const [selectedFilter, setSelectedFilter] = useState([]);
  const [filters, setFilters] = useState(
    getFromStorage('filters') ? getFromStorage('filters') : initialState,
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
        getSelectedFilter();
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [t, page, perPage, searchParams]);

  useEffect(() => {}, [selectedFilter]);

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
    removeItem('filters');
  };

  const getSelectedFilter = () => {
    const LS = getFromStorage('filters');
    const LSvalues = Object.values(LS);
    const concat = (...arrays) =>
      [].concat(...arrays).filter(item => item !== '');
    const concated = concat(...LSvalues);
    setSelectedFilter(concated);
  };

  const removeSelectedFilter = e => {
    const deletedFilter = e.currentTarget.dataset.key;
    const newFilters = selectedFilter.filter(item => item !== deletedFilter);
    setSelectedFilter(newFilters);

    const LS = getFromStorage('filters');
    const LSentries = Object.entries(LS);

    for (const [key, value] of LSentries) {
      const arr = [key, value];

      if (arr[1].length !== 0) {
        if (Array.isArray(arr[1])) {
          const index = arr[1].findIndex(item => item === deletedFilter);
          if (index > -1) {
            arr[1].splice(index, 1);
            saveToStorage('filters', { ...LS, [arr[0]]: arr[1] });
            setFilters(prevState => ({ ...prevState, [arr[0]]: arr[1] }));
            setParams();
          }
        }
        if (!Array.isArray(arr[1])) {
          if (arr[0] == 'minPrice') {
            saveToStorage('filters', { ...LS, ['minPrice']: '' });
            setFilters(prevState => ({ ...prevState, ['minPrice']: '' }));
            setParams();
          }
          if (arr[0] == 'maxPrice') {
            saveToStorage('filters', { ...LS, ['maxPrice']: '' });
            setFilters(prevState => ({ ...prevState, ['maxPrice']: '' }));
            setParams();
          }
        }
      }
    }

    const checkboxes = document.querySelectorAll(
      `label[data-key="${deletedFilter}"]`,
    );
    checkboxes?.forEach(checkbox => checkbox.classList.remove('active_label'));
  };

  const setParams = () => {
    let params = Object.fromEntries(searchParams);

    if (filters.typeOfPlants !== '') {
      params.typeOfPlants = filters.typeOfPlants;
    }
    if (filters.rare !== '') {
      params.rare = filters.rare;
    }
    if (filters.light !== '') {
      params.light = filters.light;
    }
    if (filters.petFriendly !== '') {
      params.petFriendly = filters.petFriendly;
    }
    if (filters.minPrice !== '') {
      params.minPrice = filters.minPrice;
    }
    if (filters.maxPrice !== '') {
      params.maxPrice = filters.maxPrice;
    }
    if (filters.hardToKill !== '') {
      params.hardToKill = filters.hardToKill;
    }
    if (filters.potSize !== '') {
      params.potSize = filters.potSize;
    }
    if (filters.waterSchedule !== '') {
      params.waterSchedule = filters.waterSchedule;
    }

    setSearchParams(params);
  };

  return (
    <SC.CatalogContainer>
      <SC.CatalogSection>
        <SC.Heading>
          <div>
            <a
              href={`/indoor-plants/catalog`}
              onClick={() => removeLocalStor()}
            >
              <SC.HeadlineShop>Shop / </SC.HeadlineShop>
            </a>
            <a
              href={`/indoor-plants/catalog/${category}?perPage=12&page=1`}
              onClick={() => removeLocalStor()}
            >
              <SC.HeadlineShop $primary>{category}</SC.HeadlineShop>
            </a>
          </div>
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
                    <CatalogFilter />
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
                <Close
                  data-key={filter}
                  onClick={e => removeSelectedFilter(e)}
                />
              </label>
            );
          })}
        </SC.SelectedFilters>
        <SC.GridContainer onClick={handleClick}>
          <SC.FiltersContainer>
            {category === 'plants' && <CatalogFilter />}
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
            {products.length === 0 && !isLoading && !error && (
              <Headline>Nothing found for these parameters...</Headline>
            )}
          </SC.GridWrapper>
        </SC.GridContainer>
      </SC.CatalogSection>
      <Benefits />
    </SC.CatalogContainer>
  );
};
