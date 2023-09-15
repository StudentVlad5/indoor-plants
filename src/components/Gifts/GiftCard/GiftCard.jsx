import React from 'react';

import {
  Description,
  GiftsHeadline,
  GiftsSection,
  GiftsInnerContainer,
  GiftsSubtitle,
  LinkBtn,
} from '../Gifts.styled';
import * as SC from './GiftCard.styled';

import green_light from 'images/gifts/card_left.png';
import green_dark from 'images/gifts/card_right.png';
import card from 'images/gifts/gift_card.png';

export const GiftCard = () => {
  return (
    <GiftsSection>
      <GiftsInnerContainer>
        <SC.InnerLeft>
          <GiftsSubtitle>Nature’s gift</GiftsSubtitle>
          <GiftsHeadline>Send the gift that keeps on growing</GiftsHeadline>
          <Description>
            Look no further than our online store gift cards! Choose from a
            variety of amounts and give the gift of endless shopping
            possibilities to your friends and loved ones. Buy now and make
            someone`s day!
          </Description>
          <LinkBtn>Shop gift card</LinkBtn>
        </SC.InnerLeft>
        <SC.InnerRight>
          <img src={green_light} width={590} height={370} alt="light green" />
          <img src={green_dark} width={590} height={370} alt="dark green" />
          <SC.Card>
            {/* <span>Gift Card</span>
            <span>homeforest</span>
            <span>Bring the beauty of nature into your home</span> */}
            <img
              src={card}
              width={460}
              height={300}
              alt="gift card with logo and plant"
            />
          </SC.Card>
        </SC.InnerRight>
      </GiftsInnerContainer>
    </GiftsSection>
  );
};
