import React from 'react';
import { CareBoxDiscr, CareBoxText, CareImg, CareImgBox } from './Care.styled';
import youngWoman from '../../../images/hero/products/young-woman.png';
import {
  HealthDiscr,
  HealthHeadTitle,
  HealthTitle,
  ReadMore,
} from '../Health/Health.styled';
import { ProductsSection } from '../Products/Products.styled';

export const Care = () => {
  return (
    <ProductsSection>
      <CareBoxDiscr>
        <HealthHeadTitle>Care and treatment</HealthHeadTitle>
        <HealthTitle>Spring care for indoor plants</HealthTitle>
        <HealthDiscr>
          Spring is an important time for indoor plants as it marks the
          beginning of their active growth period. It is also the right time to
          repot your plants. Here are some tips on how and when to do it best.
        </HealthDiscr>

        <ReadMore href="#">Read more</ReadMore>
        <CareImgBox>
          <CareImg src={youngWoman} alt="" />
        </CareImgBox>
      </CareBoxDiscr>

      <CareBoxDiscr>
        <div>
          <CareBoxText>
            <HealthHeadTitle>Care and treatment</HealthHeadTitle>
            <HealthTitle>Spring care for indoor plants</HealthTitle>
            <HealthDiscr>
              Spring is an important time for indoor plants as it marks the
              beginning of their active growth period. It is also the right time
              to repot your plants. Here are some tips on how and when to do it
              best.
            </HealthDiscr>

            <ReadMore href="#">Read more</ReadMore>
          </CareBoxText>
        </div>
        <CareImgBox>
          <CareImg src={youngWoman} alt="" />
        </CareImgBox>
      </CareBoxDiscr>
    </ProductsSection>
  );
};