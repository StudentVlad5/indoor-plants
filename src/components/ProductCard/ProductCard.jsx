import React from 'react';
import {
  ProductCardContainer,
  ProductCardSection,
  ProductNav,
  ProductNavItem,
  ProductNavLink,
  ProductNavList,
} from './ProductCard.styled';

export const ProductCard = () => {
  return (
    <ProductCardSection>
      <ProductCardContainer>
        <ProductNav>
          <ProductNavList>
            <ProductNavItem>
              <ProductNavLink href="/">Plants</ProductNavLink>
            </ProductNavItem>
            <ProductNavItem>
              <ProductNavLink href="/catalog">Indoor Plants</ProductNavLink>
            </ProductNavItem>
            <ProductNavItem>
              <ProductNavLink href="/catalog/:id" $primary>
                Monstera
              </ProductNavLink>
            </ProductNavItem>
          </ProductNavList>
        </ProductNav>
        <div>
          <div>
            <img />
          </div>
        </div>
      </ProductCardContainer>
    </ProductCardSection>
  );
};
