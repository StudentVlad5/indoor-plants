import React, { useState } from 'react'; //, useEffect
import PropTypes from 'prop-types';
import * as SC from './Catalog.styled';
import { Headline } from 'components/baseStyles/CommonStyle.styled';
import { CatalogSort } from './CatalogSort/CatalogSort';
import { CatalogFilter } from './CatalogFilter/CatalogFilter';
import { Benefits } from './Benefits/Benefits';
import { CatalogList } from './CatalogList/CatalogList';

import { ReactComponent as Open } from 'images/svg/open.svg';

export const Catalog = ({ products }) => {
  const [showSort, setShowSort] = useState(false);
  const toggleSort = () => setShowSort(state => !state);

  const [showFilter, setShowFilter] = useState(false);
  const toggleFilter = () => setShowFilter(state => !state);

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
                  <CatalogFilter products={products} />
                </SC.FiltersWrapper>
              )}
            </SC.FiltersBox>
          </SC.HeadingBtnBox>
        </SC.Heading>
        <SC.GridContainer>
          <SC.FiltersContainer>
            <CatalogFilter products={products} />
          </SC.FiltersContainer>
          <CatalogList products={products} />
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
      potSize: PropTypes.string,
      waterSchedule: PropTypes.string,
      images: PropTypes.array,
    }),
  ),
};
