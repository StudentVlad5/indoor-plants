import React, { useState } from 'react'; //, useEffect
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as SC from './Catalog.styled';
import { Headline } from 'components/baseStyles/CommonStyle.styled';

import { ReactComponent as Open } from 'images/svg/open.svg';

import img1_png from 'images/catalog/img1.png';
import img1_2x_png from 'images/catalog/img1@2x.png';
import img1_webp from 'images/catalog/img1.webp';
import img1_2x_webp from 'images/catalog/img1@2x.webp';
import img2_png from 'images/catalog/img2.png';
import img2_2x_png from 'images/catalog/img2@2x.png';
import img2_webp from 'images/catalog/img2.webp';
import img2_2x_webp from 'images/catalog/img2@2x.webp';
import img3_png from 'images/catalog/img3.png';
import img3_2x_png from 'images/catalog/img3@2x.png';
import img3_webp from 'images/catalog/img3.webp';
import img3_2x_webp from 'images/catalog/img3@2x.webp';

const { BASE_URL_IMG } = window.global;

export const Catalog = ({ products }) => {
  const [showSort, setShowSort] = useState(false);
  const toggleSort = () => setShowSort(state => !state);

  const [showFilter, setShowFilter] = useState(false);
  const toggleFilter = () => setShowFilter(state => !state);

  const getUniqueOptions = key => {
    const unique = [...new Set(products.map(item => item[key]))];
    return unique.sort();
  };

  return (
    <SC.CatalogContainer>
      <SC.CatalogSection>
        <SC.Heading>
          <Headline>Indoor Plants</Headline>
          <SC.HeadingBtnBox>
            <SC.SortBox>
              <SC.Sort onClick={toggleSort}>
                <span>SORT BY</span>
                <SC.IconBtn
                  type="button"
                  aria-label="switch to open sort list"
                  aria-expanded="false"
                >
                  <Open />
                </SC.IconBtn>
              </SC.Sort>
              {showSort && (
                <SC.SortList>
                  <SC.SortItem>Most Popular</SC.SortItem>
                  <SC.SortItem>Name</SC.SortItem>
                  <SC.SortItem>Lowest Price</SC.SortItem>
                  <SC.SortItem>Highest Price</SC.SortItem>
                  <SC.SortItem>% Off</SC.SortItem>
                </SC.SortList>
              )}
            </SC.SortBox>
            <SC.FiltersBox>
              <SC.Sort onClick={toggleFilter}>
                <span>FILTER BY</span>
                <SC.IconBtn
                  type="button"
                  aria-label="switch to open filter list"
                  aria-expanded="false"
                >
                  <Open />
                </SC.IconBtn>
              </SC.Sort>
              {showFilter && (
                <SC.FiltersWrapper>
                  <SC.Filters>
                    <SC.Filter>
                      <SC.FilterHeading>
                        <span>TYPE OF PLANTS</span>
                        <SC.IconBtn
                          type="button"
                          aria-label="switch to open filter"
                          aria-expanded="false"
                          onClick={toggleFilter}
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
                      <SC.FilterHeading>
                        <span>LIGHT</span>
                        <SC.IconBtn
                          type="button"
                          aria-label="switch to open filter"
                          aria-expanded="false"
                          onClick={toggleFilter}
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
                      <SC.FilterHeading>
                        <span>PET FRIENDLY</span>
                        <SC.IconBtn
                          type="button"
                          aria-label="switch to open filter"
                          aria-expanded="false"
                          onClick={toggleFilter}
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
                      <SC.FilterHeading>
                        <span>PRICE</span>
                        <SC.IconBtn
                          type="button"
                          aria-label="switch to open filter"
                          aria-expanded="false"
                          onClick={toggleFilter}
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
                      <SC.FilterHeading>
                        <span>MAINTENANCE</span>
                        <SC.IconBtn
                          type="button"
                          aria-label="switch to open filter"
                          aria-expanded="false"
                          onClick={toggleFilter}
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
                      <SC.FilterHeading>
                        <span>POT SIZE</span>
                        <SC.IconBtn
                          type="button"
                          aria-label="switch to open filter"
                          aria-expanded="false"
                          onClick={toggleFilter}
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
                      <SC.FilterHeading>
                        <span>WATER SCHEDULE</span>
                        <SC.IconBtn
                          type="button"
                          aria-label="switch to open filter"
                          aria-expanded="false"
                          onClick={toggleFilter}
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
                </SC.FiltersWrapper>
              )}
            </SC.FiltersBox>
          </SC.HeadingBtnBox>
        </SC.Heading>
        <SC.GridContainer>
          <SC.FiltersContainer>
            <SC.Filters>
              <SC.Filter>
                <SC.FilterHeading>
                  <span>TYPE OF PLANTS</span>
                  <SC.IconBtn
                    type="button"
                    aria-label="switch to open filter"
                    aria-expanded="false"
                    onClick={toggleFilter}
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
                <SC.FilterHeading>
                  <span>LIGHT</span>
                  <SC.IconBtn
                    type="button"
                    aria-label="switch to open filter"
                    aria-expanded="false"
                    onClick={toggleFilter}
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
                <SC.FilterHeading>
                  <span>PET FRIENDLY</span>
                  <SC.IconBtn
                    type="button"
                    aria-label="switch to open filter"
                    aria-expanded="false"
                    onClick={toggleFilter}
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
                <SC.FilterHeading>
                  <span>PRICE</span>
                  <SC.IconBtn
                    type="button"
                    aria-label="switch to open filter"
                    aria-expanded="false"
                    onClick={toggleFilter}
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
                <SC.FilterHeading>
                  <span>MAINTENANCE</span>
                  <SC.IconBtn
                    type="button"
                    aria-label="switch to open filter"
                    aria-expanded="false"
                    onClick={toggleFilter}
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
                <SC.FilterHeading>
                  <span>POT SIZE</span>
                  <SC.IconBtn
                    type="button"
                    aria-label="switch to open filter"
                    aria-expanded="false"
                    onClick={toggleFilter}
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
                <SC.FilterHeading>
                  <span>WATER SCHEDULE</span>
                  <SC.IconBtn
                    type="button"
                    aria-label="switch to open filter"
                    aria-expanded="false"
                    onClick={toggleFilter}
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
          </SC.FiltersContainer>
          <SC.Grid>
            {products.map(card => {
              return (
                <SC.Card key={card._id}>
                  <NavLink to={`/catalog/${card._id}`}>
                    <SC.CardImage
                      src={BASE_URL_IMG + card.images[0]}
                      alt={card.name}
                      width="285"
                      height="460"
                      loading="lazy"
                    />
                    <SC.CardTitle>
                      <SC.CardName>{card.name}</SC.CardName>
                      <SC.CardPrices>
                        {card.currentPrice && (
                          <SC.CardDiscount>
                            {/* {Math.round(Number(card.currentPrice))} */}
                            {card.currentPrice}
                            {card.currency}
                          </SC.CardDiscount>
                        )}
                        {card.oldPrice && (
                          <SC.CardPrice>
                            {/* {Math.round(Number(card.oldPrice))} */}
                            {card.oldPrice}
                            {card.currency}
                          </SC.CardPrice>
                        )}
                      </SC.CardPrices>
                    </SC.CardTitle>
                    <SC.CardSize>
                      <span>Size</span>
                      <div>
                        {card.options.map(option => {
                          return (
                            option.total != 0 && (
                              <span key={option._id}>{option.title}</span>
                            )
                          );
                        })}
                      </div>
                    </SC.CardSize>
                  </NavLink>
                </SC.Card>
              );
            })}
          </SC.Grid>
        </SC.GridContainer>
      </SC.CatalogSection>
      <SC.BenefitsSection>
        <Headline>Why buy from us</Headline>
        <SC.BenefitsList>
          <SC.BenefitsItem>
            <picture>
              <source
                srcSet={`${img1_webp} 1x, ${img1_2x_webp} 2x`}
                type="image/webp"
              />
              <img
                src={img1_png}
                alt="Girl with flower"
                srcSet={`${img1_png} 159w, ${img1_2x_png} 318w`}
                width="159"
                height="159"
                loading="lazy"
              />
            </picture>
            <SC.BenefitsSubtitle>Fast shipping</SC.BenefitsSubtitle>
            <SC.BenefitsDescription>
              We offer fast and reliable delivery straight to your doorstep.
            </SC.BenefitsDescription>
          </SC.BenefitsItem>
          <SC.BenefitsItem>
            <picture>
              <source
                srcSet={`${img2_webp} 1x, ${img2_2x_webp} 2x`}
                type="image/webp"
              />
              <img
                src={img2_png}
                alt="Girl with flower"
                srcSet={`${img2_png} 159w, ${img2_2x_png} 318w`}
                width="159"
                height="159"
                loading="lazy"
              />
            </picture>
            <SC.BenefitsSubtitle>Quality guaranteed</SC.BenefitsSubtitle>
            <SC.BenefitsDescription>
              We offer a quality guarantee on all of our plants.
            </SC.BenefitsDescription>
          </SC.BenefitsItem>
          <SC.BenefitsItem>
            <picture>
              <source
                srcSet={`${img3_webp} 1x, ${img3_2x_webp} 2x`}
                type="image/webp"
              />
              <img
                src={img3_png}
                alt="Girl with flower"
                srcSet={`${img3_png} 159w, ${img3_2x_png} 318w`}
                width="159"
                height="159"
                loading="lazy"
              />
            </picture>
            <SC.BenefitsSubtitle>Support from specialists</SC.BenefitsSubtitle>
            <SC.BenefitsDescription>
              Our services include assistance and guidance in growing indoor
              plants.
            </SC.BenefitsDescription>
          </SC.BenefitsItem>
        </SC.BenefitsList>
      </SC.BenefitsSection>
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
