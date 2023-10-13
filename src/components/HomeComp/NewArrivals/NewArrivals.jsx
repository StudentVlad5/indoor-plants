import React from 'react';
import { Link } from 'react-router-dom';
import { ProductsSection } from 'components/HomeComp/Products/Products.styled';
import { saveToStorage, getFromStorage } from 'services/localStorService';

import dog from 'images/hero/products/dog-plants.png';
import pepper from 'images/hero/products/pepper.png';
import african from 'images/hero/products/african.png';
import packaging from 'images/hero/products/plant-packaging.png';
import { ImgDiscr, ImgTitle, List, ListItem } from './NewArrivals.styled';

export const NewArrivals = () => {
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
        '/catalog/cards',
      ],
    },
    {
      filters: [
        { petFriendly: 'pet friendly' },
        { hardToKill: 'easy to care' },
        { rare: 'rare' },
        {},
      ],
    },
  ];

  return (
    <ProductsSection>
      <ImgTitle>New Arrivals</ImgTitle>
      <List>
        {imgArr.map((image, idx) => (
          <ListItem key={idx}>
            <Link
              style={{ textDecoration: 'none' }}
              to={titleArr[1].links[idx]}
            >
              <img src={image} alt={titleArr[0].name[idx]} />
              <ImgDiscr>{titleArr[0].name[idx]}</ImgDiscr>
            </Link>
          </ListItem>
        ))}
      </List>
    </ProductsSection>
  );
};
