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
  TotalDiscr,
  TotalTitle,
  TotalTitleBox,
  OrderBox,
  OrderList,
  TotalTitlePrice,
  ProgressBarBox,
  ProgressBarTitle,
  ProgressBar,
} from './Basket.styled';
import { NavLink } from 'react-router-dom';
import groupPlants from '../../../images/basket/group-plants.png';
import peaceLily from '../../../images/basket/peace-lily.png';
import philodendron from '../../../images/basket/philodendron.png';
import plantGrayPot from '../../../images/basket/plant-gray-pot.png';
import { useSelector } from 'react-redux';
import { selectBasket, selectTotalPayment } from 'redux/basket/selectors';
import { BasketList } from './BasketList/BasketList';

export const Basket = () => {
  const [isOpen, setIsOpen] = useState(false);

  const dataArr = [
    {
      imageUrl: plantGrayPot,
      title: 'Pet - friendly plants',
      link: '/catalog?perPage=12&page=1&petFriendly=pet+friendly',
    },
    {
      imageUrl: peaceLily,
      title: 'Rare plants',
      link: '/catalog?perPage=12&page=1&rare=rare',
    },
    {
      imageUrl: philodendron,
      title: 'Hard to kill plants',
      link: '/catalog?perPage=12&page=1&hardToKill=easy+to+care',
    },
    {
      imageUrl: groupPlants,
      title: 'Gifts',
      link: '/gifts',
    },
  ];
  const basket = useSelector(selectBasket);
  const totalPayment = useSelector(selectTotalPayment).toFixed(2);

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
          {basket.length !== 0 ? (
            <OrderBox>
              {totalPayment < 150 ? (
                <>
                  <ProgressBarTitle>
                    You’re ${(150 - totalPayment).toFixed(2)} away from Free
                    Shipping!
                  </ProgressBarTitle>
                  <ProgressBarBox>
                    <ProgressBar
                      style={{
                        width: `${(totalPayment / 150) * 100}%`,
                      }}
                    ></ProgressBar>
                  </ProgressBarBox>
                </>
              ) : (
                <ProgressBarTitle>
                  Great! You have free shipping!
                </ProgressBarTitle>
              )}

              <OrderList>
                {basket.map((product, idx) => (
                  <BasketList
                    key={`${idx}${product._id}`}
                    {...{ ...product, index: idx }}
                  />
                ))}
              </OrderList>
              <TotalTitleBox>
                <div style={{ position: 'relative' }}>
                  <TotalTitle>Total</TotalTitle>
                  <TotalTitlePrice>{totalPayment}</TotalTitlePrice>
                </div>

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
                We recommend checking out:
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
