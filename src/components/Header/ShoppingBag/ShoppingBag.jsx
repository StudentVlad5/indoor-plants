import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  selectBasket,
  selectTotalPayment,
  selectTotalAmount,
  selectCurrency,
} from 'redux/basket/selectors';
import { ShoppingBagList } from './ShoppingBagList/ShoppingBagList';
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
} from './ShoppingBag.styled';
import {
  Count,
  IconBasket,
  IconWrapper,
} from 'components/Header/Navigation/Navigation.styled';

import groupPlants from 'images/basket/group-plants.png';
import peaceLily from 'images/basket/peace-lily.png';
import philodendron from 'images/basket/philodendron.png';
import plantGrayPot from 'images/basket/plant-gray-pot.png';

export const ShoppingBag = () => {
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
  const currency = useSelector(selectCurrency);
  // document.querySelector('body').style.overflow = "hidden";

  return (
    <>
      <IconWrapper>
        <IconBasket onClick={() => setIsOpen(!isOpen)} aria-label="Basket" />
        {basket.length > 0 && (
          <Count onClick={() => setIsOpen(!isOpen)}>{basket.length}</Count>
        )}
      </IconWrapper>

      <Overlay isOpen={isOpen} onClick={() => setIsOpen(false)} />

      <BasketBox open={isOpen}>
        <BasketBoxTitle>
          <BasketTitle>Your card</BasketTitle>
          <BasketIconClose onClick={() => setIsOpen(!isOpen)} />
        </BasketBoxTitle>

        <BasketBoxList>
          {basket.length !== 0 ? (
            <OrderBox>
              <div>
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
                    <ShoppingBagList
                      key={`${idx}${product._id}`}
                      {...{ ...product, index: idx }}
                    />
                  ))}
                </OrderList>
              </div>
              <TotalTitleBox>
                <div>
                  <TotalTitle>Total</TotalTitle>
                  <TotalTitlePrice>
                    {currency}
                    {totalPayment}
                  </TotalTitlePrice>
                </div>

                <TotalDiscr>
                  Separate shipping is applicable to the majority of items. Once
                  an order is placed, it cannot be cancelled.
                </TotalDiscr>

                <OrderBtn to="/basket" onClick={() => setIsOpen(!isOpen)}>
                  checkout
                </OrderBtn>
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
                  <ListItem key={idx} onClick={() => setIsOpen(false)}>
                    <NavLink to={item.link}>
                      <ListImage
                        src={item.imageUrl}
                        width={95}
                        height={105}
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
