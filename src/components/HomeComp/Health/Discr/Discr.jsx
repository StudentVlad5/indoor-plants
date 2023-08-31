import React from 'react';
import dog from '../../../../images/hero/products/dog-plants.png';
import pepper from '../../../../images/hero/products/pepper.png';
import african from '../../../../images/hero/products/african.png';
import packaging from '../../../../images/hero/products/plant-packaging.png';
import {
  HealthImgDiscr,
  HealthImgTitle,
  HealthList,
  HealthListItem,
} from '../Health.styled';
import { ProductsSection } from 'components/HomeComp/Products/Products.styled';

export const Discr = () => {
  const imgArr = [dog, pepper, african, packaging];
  const titleArr = [
    'Pet - friendly plants',
    'Hard to  kill plants',
    'Rar plants',
    'Gifts',
  ];
  return (
    <ProductsSection>
      <HealthImgTitle>New Arrivals</HealthImgTitle>
      <HealthList>
        {imgArr.map((image, idx) => (
          <HealthListItem key={idx}>
            <img src={image} alt="" />
            <HealthImgDiscr>{titleArr[idx]}</HealthImgDiscr>
          </HealthListItem>
        ))}
      </HealthList>
    </ProductsSection>
  );
};
