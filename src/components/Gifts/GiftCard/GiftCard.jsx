import React from 'react';
import { GiftsSection } from '../Gifts.styled';
import * as SC from './GiftCard.styled';

export const GiftCard = () => {
  return (
    <GiftsSection>
      <div>
        <span>Nature’s gift</span>
        <h3>Send the gift that keeps on growing</h3>
        <p>
          Look no further than our online store gift cards! Choose from a
          variety of amounts and give the gift of endless shopping possibilities
          to your friends and loved ones. Buy now and make someone`s day!
        </p>
        <a>Shop gift card</a>
      </div>
      <div>
        <div>
          <span>Gift Card</span>
          <span>homeforest</span>
          <span>Bring the beauty of nature into your home</span>
        </div>
      </div>
    </GiftsSection>
  );
};
