import React, { useState } from 'react';
import {
  ProductsBox,
  ProductsTitle,
  ProductsBtn,
  ProductsList,
  ProductsListItem,
  ListItemDiscrTitle,
  ProductsImg,
  ProductsSection,
  ProductsListItemLink,
  ProductsArrowIcon,
  ProductsArrowIconBox,
} from './Products.styled';
import * as SC from '../../Catalog/CatalogList/CatalogList.styled';
import { Health } from '../Health/Health';
import { Care } from '../Care/Care';
import { FeedbackComp } from '../Feedback/Feedback';

export const Products = ({ products }) => {
  const { BASE_URL_IMG } = window.global;
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;
  const handleNextSlide = () => {
    setCurrentIndex(prevIndex =>
      prevIndex + itemsPerPage >= products.length
        ? 0
        : prevIndex + itemsPerPage,
    );
  };

  const handlePrevSlide = () => {
    setCurrentIndex(prevIndex =>
      prevIndex - itemsPerPage < 0
        ? products.length - itemsPerPage
        : prevIndex - itemsPerPage,
    );
  };

  const slideProducs = products.slice(currentIndex);

  return (
    <ProductsBox>
      <ProductsSection>
        <ProductsTitle>Discounts from 10 to 25%</ProductsTitle>
        <ProductsBtn to="/catalog">See all</ProductsBtn>
        {/* products.splice(0, 4) */}
        <ProductsList>
          {slideProducs.map(card => {
            return (
              <ProductsListItem key={card._id}>
                <ProductsListItemLink to={`/catalog/${card._id}`}>
                  <ProductsImg
                    src={BASE_URL_IMG + card.images[0]}
                    alt={card.name}
                    width="285"
                    height="460"
                    loading="lazy"
                  />
                  <SC.CardTitle>
                    <ListItemDiscrTitle>{card.name}</ListItemDiscrTitle>
                    <SC.CardPrices>
                      {card.currentPrice && (
                        <SC.CardDiscount>
                          {card.currentPrice}
                          {card.currency}
                        </SC.CardDiscount>
                      )}
                      {card.oldPrice && (
                        <SC.CardPrice>
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
                </ProductsListItemLink>
              </ProductsListItem>
            );
          })}
        </ProductsList>
        <ProductsArrowIconBox>
          <ProductsArrowIcon onClick={handlePrevSlide} />
          <ProductsArrowIcon onClick={handleNextSlide} />
        </ProductsArrowIconBox>
      </ProductsSection>

      <Health />
      <Care />
      <FeedbackComp />
    </ProductsBox>
  );
};
