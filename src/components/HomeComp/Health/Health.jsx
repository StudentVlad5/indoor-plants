import React from 'react';
import { ProductsSection } from '../Products/Products.styled';
import {
  BoxText,
  HealthBox,
  HealthBoxDiscr,
  HealthDiscr,
  HealthHeadTitle,
  HealthTitle,
  ImgBox,
  ReadMore,
} from './Health.styled';
import woman from 'images/hero/products/woman.png';

export const Health = () => {
  return (
    <>
      <ProductsSection>
        <HealthBox>
          <HealthBoxDiscr>
            <HealthHeadTitle>health as part of a lifestyle</HealthHeadTitle>
            <BoxText>
              <HealthTitle>How plants make us happy</HealthTitle>
              <HealthDiscr>
                Here are some of the health benefits of indoor plants. For
                example indoor plants have can help reduce stress and anxiety.
                Studies have shown that just looking at plants can lower blood
                pressure and heart rate.
              </HealthDiscr>
            </BoxText>
            <ReadMore to={'/addition/blogs'}>Read more</ReadMore>
          </HealthBoxDiscr>
          <ImgBox
            src={woman}
            alt="Woman with plants"
            width={355}
            height={222}
          />
        </HealthBox>
      </ProductsSection>
    </>
  );
};
