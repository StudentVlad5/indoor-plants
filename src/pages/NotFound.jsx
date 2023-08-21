import React from 'react';
import { SEO } from 'utils/SEO';

import img_tablet_webp_1 from '../images/error/404_indoor_plants_tablet_1x.webp';
import img_tablet_webp_2 from '../images/error/404_indoor_plants_tablet_2x.webp';
import img_tablet_webp_3 from '../images/error/404_indoor_plants_tablet_3x.webp';

import img_mobile_webp_1 from '../images/error/404_indoor_plants_mobile_1x.webp';
import img_mobile_webp_2 from '../images/error/404_indoor_plants_mobile_2x.webp';
import img_mobile_webp_3 from '../images/error/404_indoor_plants_mobile_3x.webp';

import img_desktop_webp_1 from '../images/error/404_indoor_plants_desktop_1x.webp';
import img_desktop_webp_2 from '../images/error/404_indoor_plants_desktop_2x.webp';
import img_desktop_webp_3 from '../images/error/404_indoor_plants_desktop_3x.webp';

const NotFoundPage = () => {
  return (
    <>
      <SEO title="HomeForest NotFoundPage" description="Not Found Page" />
      <picture>
        <source
          media="(max-width:319.98px)"
          srcSet={`${img_mobile_webp_1} 1x, ${img_mobile_webp_2} 2x, ${img_mobile_webp_3} 3x, type="image/webp"`}
        />
        <source
          media="(min-width:1280px)"
          srcSet={`${img_desktop_webp_1} 1x, ${img_desktop_webp_2} 2x, ${img_desktop_webp_3} 3x, type="image/webp"`}
        />
        <source
          media="(max-width:1279,99px) and (min-width: 320px)"
          srcSet={`${img_tablet_webp_1} 1x, ${img_tablet_webp_2} 2x, ${img_tablet_webp_3} 3x, type="image/webp"`}
        />

        <img
          className="404_image"
          src={img_tablet_webp_1}
          srcSet={`${img_mobile_webp_1} 319.98w, ${img_tablet_webp_1} 768w, ${img_desktop_webp_1} 1280w`}
          sizes="(min-width:1280px) 1280px, (max-width:1279,99px) and (min-width: 320px) 768px, (max-width:319.98px) 319.98px, 100vw"
          alt="Page not found"
          width="100%"
          height="100vh"
          loading="lazy"
        />
      </picture>
    </>
  );
};

export default NotFoundPage;
