import React, { useState } from 'react';
import { IconBasket } from '../Navigation/Navigation.styled';
import {
  BasketIconClose,
  BasketBox,
  BasketBoxTitle,
  BasketTitle,
  BasketBoxList,
  BasketBoxListTitle,
  BasketBoxListDiscr,
  List,
  ListItem,
  ListImage,
  ListTitle,
  ListTitleBox,
  Overlay,
  Box,
  OrderBtn,
  OrderItem,
  TotalDiscr,
  TotalTitle,
  TotalTitleBox,
  OrderList,
  OrderBox,
} from './Basket.styled';
import { NavLink } from 'react-router-dom';
import groupPlants from '../../../images/basket/group-plants.png';
import peaceLily from '../../../images/basket/peace-lily.png';
import philodendron from '../../../images/basket/philodendron.png';
import plantGrayPot from '../../../images/basket/plant-gray-pot.png';

export const Basket = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOrdered, setIsOrdered] = useState(true);

  const dataArr = [
    {
      imageUrl: plantGrayPot,
      title: 'Pet - friendly plants',
      link: '',
    },
    {
      imageUrl: peaceLily,
      title: 'Rare plants',
      link: '',
    },
    {
      imageUrl: philodendron,
      title: 'Hard to kill plants',
      link: '',
    },
    {
      imageUrl: groupPlants,
      title: 'Gifts',
      link: '/gifts',
    },
  ];

  return (
    <>
      <IconBasket onClick={() => setIsOpen(!isOpen)} />
      <Overlay isOpen={isOpen} onClick={() => setIsOpen(false)} />

      <BasketBox open={isOpen}>
        <BasketBoxTitle>
          <BasketTitle>Your card</BasketTitle>
          <BasketIconClose onClick={() => setIsOpen(!isOpen)} />
        </BasketBoxTitle>

        <BasketBoxList>
          {isOrdered ? (
            <OrderBox>
              <p style={{ marginBottom: 36 }}>
                You’re $15 away from Free Shipping!
              </p>
              <OrderList>
                <OrderItem>
                  <ListImage src={plantGrayPot} alt="Image" loading="lazy" />
                  <div>
                    <p>Sansevieria</p>
                    <p>L plastic grow pot</p>
                    <p>$135</p>
                  </div>
                </OrderItem>
              </OrderList>
              <TotalTitleBox>
                <TotalTitle>Sansevieria</TotalTitle>
                <TotalDiscr>
                  Separate shipping is applicable to the majority of items. Once
                  an order is placed, it cannot be cancelled.
                </TotalDiscr>
                <OrderBtn to="/checkout">checkout</OrderBtn>
              </TotalTitleBox>
            </OrderBox>
          ) : (
            <Box>
              <BasketBoxListTitle>Oh! your card is empty</BasketBoxListTitle>
              <BasketBoxListDiscr>
                We recommend checking out:{' '}
              </BasketBoxListDiscr>
              <List>
                {dataArr.map((item, idx) => (
                  <ListItem key={idx}>
                    <NavLink to={item.link}>
                      <ListImage
                        src={item.imageUrl}
                        alt="Image"
                        loading="lazy"
                      />
                      <ListTitleBox>
                        <ListTitle>{item.title}</ListTitle>
                      </ListTitleBox>
                    </NavLink>
                  </ListItem>
                ))}
              </List>
            </Box>
          )}
        </BasketBoxList>
      </BasketBox>
    </>
  );
};
