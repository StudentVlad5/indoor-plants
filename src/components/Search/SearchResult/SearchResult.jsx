import React, { useState, useEffect } from 'react';
import { NavLink, useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

import { fetchData } from 'services/APIservice';
import { onFetchError } from 'components/helpers/Messages/NotifyMessages';
import { onLoaded, onLoading } from 'components/helpers/Loader/Loader';

import * as SC from './SearchResult.styled';
import { Subtitle } from 'components/baseStyles/CommonStyle.styled';

const { BASE_URL_IMG } = window.global;

export const SearchResult = ({ toggleSearchForm, searchQuery }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();

  const { t } = useTranslation();

  useEffect(() => {
    (async function getData() {
      setIsLoading(true);
      try {
        const { data } = await fetchData(`/catalog`);
        setProducts(data);
        if (!data) {
          return onFetchError(t('Whoops, something went wrong'));
        }
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [t]);

  const getUniqueOptions = key => {
    const unique = [...new Set(products?.map(item => item[key]))];
    return unique.sort();
  };

  return (
    <SC.SearchResult>
      <SC.ButtonClose
        type="button"
        onClick={toggleSearchForm}
        aria-label="Close modal"
      >
        <SC.IconClose />
      </SC.ButtonClose>
      <SC.Wrapper>
        <SC.InnerLeftWrapper>
          <Subtitle>recommend</Subtitle>
          {isLoading ? onLoading() : onLoaded()}
          {error && onFetchError(t('Whoops, something went wrong'))}
          {products.length > 0 && !error && (
            <SC.Products>
              {products.slice(0, 4).map(card => {
                return (
                  <SC.CardSearch key={card._id}>
                    <NavLink to={`/catalog/${card._id}`}>
                      <SC.CardImageSearch
                        src={BASE_URL_IMG + card.images[0]}
                        alt={card.name}
                        width="93"
                        height="150"
                        loading="lazy"
                      />
                      <SC.CardTitleSearch>
                        <SC.CardNameSearch>{card.name}</SC.CardNameSearch>
                        <SC.CardPricesSearch>
                          {card.currentPrice && (
                            <SC.CardDiscountSearch>
                              {card.currentPrice}
                              {card.currency}
                            </SC.CardDiscountSearch>
                          )}
                          {card.oldPrice && (
                            <SC.CardPriceSearch>
                              {card.oldPrice}
                              {card.currency}
                            </SC.CardPriceSearch>
                          )}
                        </SC.CardPricesSearch>
                        <SC.CardSizeSearch>
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
                        </SC.CardSizeSearch>
                      </SC.CardTitleSearch>
                    </NavLink>
                  </SC.CardSearch>
                );
              })}
            </SC.Products>
          )}
          <SC.LinkToCatalog to={`/catalog`}>See more</SC.LinkToCatalog>
        </SC.InnerLeftWrapper>
        <SC.InnerRightWrapper>
          <Subtitle>Type of plants</Subtitle>
          <SC.Category>
            {getUniqueOptions('typeOfPlants').map((card, i) => {
              return (
                <NavLink key={i} to={`/catalog/?typeOfPlants=${card}`}>
                  <span>{card}</span>
                </NavLink>
              );
            })}
          </SC.Category>
        </SC.InnerRightWrapper>
      </SC.Wrapper>
    </SC.SearchResult>
  );
};

SearchResult.propTypes = {
  searchQuery: PropTypes.string,
  toggleSearchForm: PropTypes.func,
};
