import React from 'react';
import { CareBox } from './Care.styled';
import {
  HealthBoxDiscr,
  HealthDiscr,
  BoxText,
  HealthHeadTitle,
  HealthTitle,
  ImgBox,
  ReadMore,
} from '../Health/Health.styled';
import { ProductsSection } from '../Products/Products.styled';
import youngWoman from 'images/hero/products/young-woman.png';

export const Care = () => {
  return (
    <ProductsSection>
      <CareBox>
        <HealthBoxDiscr>
          <HealthHeadTitle>Care and treatment</HealthHeadTitle>
          <BoxText>
            <HealthTitle>Spring care for indoor plants</HealthTitle>
            <HealthDiscr>
              Spring is an important time for indoor plants as it marks the
              beginning of their active growth period. It is also the right time
              to repot your plants. Here are some tips on how and when to do it
              best.
            </HealthDiscr>
            <ReadMore to={'/addition/blogs'}>Read more</ReadMore>
          </BoxText>
        </HealthBoxDiscr>
        <ImgBox
          src={youngWoman}
          alt="Wipes leaves with hands"
          width={355}
          height={222}
        />
      </CareBox>
    </ProductsSection>
  );
};
