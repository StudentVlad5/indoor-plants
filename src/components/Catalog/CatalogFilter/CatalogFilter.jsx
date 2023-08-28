import React from 'react';
import PropTypes from 'prop-types';
import * as SC from './CatalogFilter.styled';

import { ReactComponent as Open } from 'images/svg/open.svg';

export const CatalogFilter = ({ products }) => {
  const toggleFilterItem = e => {
    e.stopPropagation();
    e.currentTarget.classList.toggle('active');
  };

  const getUniqueOptions = key => {
    const unique = [...new Set(products.map(item => item[key]))];
    return unique.sort();
  };

  return (
    <>
      <SC.Filters>
        <SC.Filter>
          <SC.FilterHeading
            onClick={e => {
              toggleFilterItem(e);
            }}
          >
            <span>TYPE OF PLANTS</span>
            <SC.IconBtn
              type="button"
              aria-label="switch to open filter"
              aria-expanded="false"
            >
              <Open />
            </SC.IconBtn>
          </SC.FilterHeading>
          <SC.FilterInnerList>
            {getUniqueOptions('typeOfPlants').map((card, i) => {
              return (
                <label key={i}>
                  <SC.FilterInnerListItem
                    type="checkbox"
                    name="typeOfPlants"
                    value={card}
                  />
                  {card}
                </label>
              );
            })}
          </SC.FilterInnerList>
        </SC.Filter>
        <SC.Filter>
          <SC.FilterHeading
            onClick={e => {
              toggleFilterItem(e);
            }}
          >
            <span>LIGHT</span>
            <SC.IconBtn
              type="button"
              aria-label="switch to open filter"
              aria-expanded="false"
            >
              <Open />
            </SC.IconBtn>
          </SC.FilterHeading>
          <SC.FilterInnerList>
            {getUniqueOptions('light').map((card, i) => {
              return (
                <label key={i}>
                  <SC.FilterInnerListItem
                    type="checkbox"
                    name="light"
                    value={card}
                  />
                  {card}
                </label>
              );
            })}
          </SC.FilterInnerList>
        </SC.Filter>
        <SC.Filter>
          <SC.FilterHeading
            onClick={e => {
              toggleFilterItem(e);
            }}
          >
            <span>PET FRIENDLY</span>
            <SC.IconBtn
              type="button"
              aria-label="switch to open filter"
              aria-expanded="false"
            >
              <Open />
            </SC.IconBtn>
          </SC.FilterHeading>
          <SC.FilterInnerList>
            {getUniqueOptions('petFriendly').map((card, i) => {
              return (
                <label key={i}>
                  <SC.FilterInnerListItem
                    type="checkbox"
                    name="light"
                    value={card}
                  />
                  {card}
                </label>
              );
            })}
          </SC.FilterInnerList>
        </SC.Filter>
        <SC.Filter>
          <SC.FilterHeading
            onClick={e => {
              toggleFilterItem(e);
            }}
          >
            <span>PRICE</span>
            <SC.IconBtn
              type="button"
              aria-label="switch to open filter"
              aria-expanded="false"
            >
              <Open />
            </SC.IconBtn>
          </SC.FilterHeading>
          {/* {getUniqueOptions('currentPrice').map((card, i) => {
                      return (
                        <label key={i}>
                          <SC.FilterInnerListItem
                            type="checkbox"
                            name="light"
                            value={card}
                          />
                          {card}
                        </label>
                      );
                    })} */}
        </SC.Filter>
        <SC.Filter>
          <SC.FilterHeading
            onClick={e => {
              toggleFilterItem(e);
            }}
          >
            <span>MAINTENANCE</span>
            <SC.IconBtn
              type="button"
              aria-label="switch to open filter"
              aria-expanded="false"
            >
              <Open />
            </SC.IconBtn>
          </SC.FilterHeading>
          <SC.FilterInnerList>
            {getUniqueOptions('maintenance').map((card, i) => {
              return (
                <label key={i}>
                  <SC.FilterInnerListItem
                    type="checkbox"
                    name="light"
                    value={card}
                  />
                  {card}
                </label>
              );
            })}
          </SC.FilterInnerList>
        </SC.Filter>
        <SC.Filter>
          <SC.FilterHeading
            onClick={e => {
              toggleFilterItem(e);
            }}
          >
            <span>POT SIZE</span>
            <SC.IconBtn
              type="button"
              aria-label="switch to open filter"
              aria-expanded="false"
            >
              <Open />
            </SC.IconBtn>
          </SC.FilterHeading>
          <SC.FilterInnerList>
            {getUniqueOptions('potSize').map((card, i) => {
              return (
                <label key={i}>
                  <SC.FilterInnerListItem
                    type="checkbox"
                    name="light"
                    value={card}
                  />
                  {card}
                </label>
              );
            })}
          </SC.FilterInnerList>
        </SC.Filter>
        <SC.Filter>
          <SC.FilterHeading
            onClick={e => {
              toggleFilterItem(e);
            }}
          >
            <span>WATER SCHEDULE</span>
            <SC.IconBtn
              type="button"
              aria-label="switch to open filter"
              aria-expanded="false"
            >
              <Open />
            </SC.IconBtn>
          </SC.FilterHeading>
          <SC.FilterInnerList>
            {getUniqueOptions('waterSchedule').map((card, i) => {
              return (
                <label key={i}>
                  <SC.FilterInnerListItem
                    type="checkbox"
                    name="light"
                    value={card}
                  />
                  {card}
                </label>
              );
            })}
          </SC.FilterInnerList>
        </SC.Filter>
      </SC.Filters>
      <SC.FilterBtn type="button">CLEAR ALL</SC.FilterBtn>
      <SC.InfoBtnBox>
        <SC.InfoBtn type="button">SIZE GUIDE</SC.InfoBtn>
        <SC.InfoBtn type="button">ABOUT OUR SHIPPING</SC.InfoBtn>
      </SC.InfoBtnBox>
    </>
  );
};

CatalogFilter.propTypes = {
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
