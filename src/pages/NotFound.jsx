import React from 'react';
import { SEO } from 'utils/SEO';

const NotFoundPage = () => {
  return (
    <>
      <SEO title="HomeForest NotFoundPage" description="Not Found Page" />
      <picture>
        <source
          media="(max-width:1199,98px)"
          srcSet="./images/404/404_indoor_plants_tablet_1x.webp 1x, 
                    ./images/404/404_indoor_plants_tablet_2x.webp 2x,
                    ./images/404/404_indoor_plants_tablet_3x.webp"
          type="image/webp"
        />
        <source
          media="(max-width:319.98px)"
          srcSet="./images/404/404_indoor_plants_mobile_1x.webp 1x, 
                    ./images/404/404_indoor_plants_mobile_2x.webp 2x,
                    ./images/404/404_indoor_plants_mobile_3x.webp 3x"
          type="image/webp"
        />
        <source
          media="(min-width:1199,98px)"
          srcSet="./images/404/404_indoor_plants_desktop_1x.webp 1x, ./images/404/404_indoor_plants_desktop_2x.webp 2x,
                    ./images/404/404_indoor_plants_desktop_3x.webp 3x"
          type="image/webp"
        />
        <img
          className="404_image"
          src="./images/404/404_indoor_plants_desktop_1x.png"
          alt="Page not found"
          srcSet="./images/404/404_indoor_plants_desktop_1x.png 440w, 
                ./images/404/404_indoor_plants_desktop_2x.png 880w"
          sizes="(min-width:1199,98px) 440px, (max-width:1199,98px) 343px, 100vw"
          width="343"
          height="529"
          loading="lazy"
        />
      </picture>
    </>
  );
};

export default NotFoundPage;
