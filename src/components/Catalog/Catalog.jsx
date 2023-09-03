import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { CatalogSort } from './CatalogSort/CatalogSort';
import { CatalogFilter } from './CatalogFilter/CatalogFilter';
import { Benefits } from './Benefits/Benefits';
import { CatalogList } from './CatalogList/CatalogList';
import { Pagination } from 'utils/pagination';
import { ReactComponent as Open } from 'images/svg/open.svg';
import { fetchData } from 'services/APIservice';
import { onLoading, onLoaded } from 'components/helpers/Loader/Loader';
import { onFetchError } from 'components/helpers/Messages/NotifyMessages';
import * as SC from './Catalog.styled';
import { Headline } from 'components/baseStyles/CommonStyle.styled';

let perPage = 12;

export const Catalog = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalPage, setTotalPage] = useState(0);
  const [page, setPages] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();

  const { t } = useTranslation();

  const setPage = toPage => {
    searchParams.set('page', toPage);
    setPages(toPage);
    setSearchParams(searchParams);
  };

  useEffect(() => {
    if (!page || !perPage) {
      const params = { page: 1, perPage };
      setPages(1);
      setSearchParams(params);
    }

    (async function getData() {
      setIsLoading(true);
      try {
        const { data } = await fetchData(`/catalog?${searchParams}`);
        if (!data) {
          return onFetchError(t('Whoops, something went wrong'));
        }
        setProducts(data);
        setTotalPage(Math.ceil(data.total / perPage));
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [t, page, perPage, searchParams]);

  const [showSort, setShowSort] = useState(false);
  const toggleSort = () => setShowSort(state => !state);

  const [showFilter, setShowFilter] = useState(false);
  const toggleFilter = () => setShowFilter(state => !state);

  const handleClick = () => {
    setShowSort(false);
    setShowFilter(false);
  };

  return (
    <SC.CatalogContainer>
      <SC.CatalogSection>
        <SC.Heading>
          <Headline>Indoor Plants</Headline>
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
        </SC.Heading>
        <SC.GridContainer onClick={handleClick}>
          <SC.FiltersContainer>
            <CatalogFilter />
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

Catalog.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      oldPrice: PropTypes.number.isRequired,
      currentPrice: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      options: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string,
          oldPrice: PropTypes.number,
          currentPrice: PropTypes.number,
          total: PropTypes.number,
        }),
      ),
      totalQuantity: PropTypes.number,
      typeOfPlants: PropTypes.string,
      light: PropTypes.string,
      petFriendly: PropTypes.string,
      maintenance: PropTypes.string,
      potSize: PropTypes.arrayOf(
        PropTypes.shape({
          size: PropTypes.number,
          potSizeItem: PropTypes.string,
        }),
      ),
      hardToKill: PropTypes.string,
      rare: PropTypes.string,
      waterSchedule: PropTypes.string,
      images: PropTypes.array,
    }),
  ),
};
