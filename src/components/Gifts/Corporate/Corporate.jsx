import React from 'react';
import { GiftsSection } from '../Gifts.styled';
import * as SC from './Corporate.styled';

import corp_png from 'images/gifts/corp.png';
import corp_png_2x from 'images/gifts/corp@2x.png';
import corp_webp from 'images/gifts/corp.webp';
import corp_webp_2x from 'images/gifts/corp@2x.webp';

export const Corporate = () => {
  return (
    <GiftsSection>
      <picture>
        <source
          srcSet={`${corp_webp} 1x, ${corp_webp_2x} 2x`}
          type="image/webp"
        />
        <img
          src={corp_png}
          srcSet={`${corp_png} 590w, ${corp_png_2x} 1180w`}
          width={590}
          height={370}
          alt="Woman and man holding potted plants"
          loading="lazy"
        />
      </picture>
      <div>
        <span>great way to show appreciation</span>
        <h3>Corporate Gifting</h3>
        <p>
          Give new employees a warm welcome, express appreciation to valued
          clients, or simply recognize your team’s hard work—with the gift that
          keeps on growing!
        </p>
        <a>Shop gift card</a>
      </div>
    </GiftsSection>
  );
};
