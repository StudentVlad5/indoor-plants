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
import { Link } from 'react-router-dom';

export const Discr = () => {
  const imgArr = [dog, pepper, african, packaging];
  const titleArr = [
    {
      name: [
        'Pet - friendly plants',
        'Hard to  kill plants',
        'Rar plants',
        'Gifts',
      ],
    },
    {
      links: [
        '/catalog?perPage=12&page=1&petFriendly=pet+friendly',
        '/catalog?page=1&perPage=12&hardToKill=easy+to+care',
        '/catalog?page=1&perPage=12&rare=rare',
        '/gifts?perPage=12&page=1',
      ],
    },
  ];

  return (
    <ProductsSection>
      <HealthImgTitle>New Arrivals</HealthImgTitle>
      <HealthList>
        {imgArr.map((image, idx) => (
          <HealthListItem style={{ cursor: 'pointer' }} key={idx}>
            <Link
              style={{ textDecoration: 'none' }}
              to={titleArr[1].links[idx]}
            >
              <img src={image} alt={titleArr[0].name[idx]} />
              <HealthImgDiscr>{titleArr[0].name[idx]}</HealthImgDiscr>
            </Link>
          </HealthListItem>
        ))}
      </HealthList>
    </ProductsSection>
  );
};
