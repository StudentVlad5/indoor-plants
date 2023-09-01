import React from 'react';
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
import woman from '../../../images/hero/products/woman.png';
import { Discr } from './Discr/Discr';
import { ProductsSection } from '../Products/Products.styled';

export const Health = () => {
  return (
    <>
      <ProductsSection>
        <HealthBox>
          <HealthBoxDiscr>
            <HealthHeadTitle>health as part of a lifestyle</HealthHeadTitle>
            <HealthTitle>How plants make us happy</HealthTitle>
            <HealthDiscr>
              Here are some of the health benefits of indoor plants. For example
              indoor plants have can help reduce stress and anxiety. Studies
              have shown that just looking at plants can lower blood pressure
              and heart rate.
            </HealthDiscr>

            <ReadMore href="#">Read more</ReadMore>
            <ImgBox>
              <img src={woman} alt="" />
            </ImgBox>
          </HealthBoxDiscr>

          <HealthBoxDiscr>
            <ImgBox>
              <img src={woman} alt="" />
            </ImgBox>
            <BoxText>
              <HealthHeadTitle>health as part of a lifestyle</HealthHeadTitle>
              <HealthTitle>How plants make us happy</HealthTitle>
              <HealthDiscr>
                Here are some of the health benefits of indoor plants. For
                example indoor plants have can help reduce stress and anxiety.
                Studies have shown that just looking at plants can lower blood
                pressure and heart rate.
              </HealthDiscr>

              <ReadMore href="#">Read more</ReadMore>
            </BoxText>
          </HealthBoxDiscr>
        </HealthBox>
      </ProductsSection>
      <Discr />
    </>
  );
};
