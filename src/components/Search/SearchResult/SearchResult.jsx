import React, { useState, useEffect } from 'react';
import { NavLink, useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

import { fetchData } from 'services/APIservice';
import { onFetchError } from 'components/helpers/Messages/NotifyMessages';
import { onLoaded, onLoading } from 'components/helpers/Loader/Loader';

import * as SC from './SearchResult.styled';
import {
  Card,
  CardDiscount,
  CardImage,
  CardName,
  CardPrice,
  CardPrices,
  CardSize,
  CardTitle,
} from 'components/Catalog/CatalogList/CatalogList.styled';
import { Headline, Subtitle } from 'components/baseStyles/CommonStyle.styled';

// const { BASE_URL_IMG } = window.global;
const { BASE_URL_IMG } = 'http://localhost:3030/uploads/';

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
        const { data } = await fetchData(`/catalog?${searchParams}`);
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
  }, [t, searchParams]);

  const productsSlice = products.slice(0, 4);

  const getUniqueOptions = key => {
    const unique = [...new Set(products.map(item => item[key]))];
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
        {isLoading ? onLoading() : onLoaded()}
        {error && onFetchError(t('Whoops, something went wrong'))}
        {products.length > 0 && !error && (
          <SC.Products>
            {productsSlice.map(card => {
              return (
                <Card key={card._id}>
                  <NavLink to={`/catalog/${card._id}`}>
                    <CardImage
                      src={BASE_URL_IMG + card.images[0]}
                      alt={card.name}
                      width="285"
                      height="460"
                      loading="lazy"
                    />
                    <CardTitle>
                      <CardName>{card.name}</CardName>
                      <CardPrices>
                        {card.currentPrice && (
                          <CardDiscount>
                            {card.currentPrice}
                            {card.currency}
                          </CardDiscount>
                        )}
                        {card.oldPrice && (
                          <CardPrice>
                            {card.oldPrice}
                            {card.currency}
                          </CardPrice>
                        )}
                      </CardPrices>
                    </CardTitle>
                    <CardSize>
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
                    </CardSize>
                  </NavLink>
                </Card>
              );
            })}
          </SC.Products>
        )}
        <SC.Category>
          <Subtitle>Type of plants</Subtitle>
          {getUniqueOptions('typeOfPlants').map((card, i) => {
            return (
              <p key={i}>
                <span>{card}</span>
              </p>
            );
          })}
        </SC.Category>
      </SC.Wrapper>
    </SC.SearchResult>
  );
};

SearchResult.propTypes = {
  searchQuery: PropTypes.string,
  toggleSearchForm: PropTypes.func,
};
