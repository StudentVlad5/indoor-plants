import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css';
import {
  ProductGallery,
  ProductCardContainer,
  ProductCardSection,
  ProductContent,
  ProductImage,
  ProductNav,
  ProductNavItem,
  ProductNavLink,
  ProductNavList,
  ControlsList,
  ControlsItem,
  DeliveryInfo,
  DeliveryInfoItem,
  ProductInfo,
  Heading,
  Prices,
  Discount,
  Price,
  Description,
  Options,
  Option,
  ProductSubTitle,
  OptionsList,
  Quantity,
  IconBtn,
  TextBtn,
  InfoSection,
  Accord,
  AccordCareList,
  AccordCareItem,
  AccordIncludedList,
  AccordIncludedItem,
} from './ProductCard.styled';
import { Headline } from 'components/baseStyles/CommonStyle.styled';

import img from 'images/product/i-ladna-monstera-deliciosa-dziurawa-filodendron 1.png';
import img1 from 'images/product/Ellipse 175.png';
import img2 from 'images/product/Ellipse 176.png';
import img3 from 'images/product/Ellipse 177.png';
import img4 from 'images/product/Ellipse 178.png';
import img5 from 'images/product/Ellipse 179.png';
import img6 from 'images/product/Ellipse 180.png';

import { ReactComponent as Car } from 'images/svg/shipping.svg';
import { ReactComponent as Done } from 'images/svg/done.svg';
import { ReactComponent as Plus } from 'images/svg/plus.svg';
import { ReactComponent as Minus } from 'images/svg/minus.svg';
import { ReactComponent as Open } from 'images/svg/open.svg';
import { ReactComponent as Cat } from 'images/svg/cat.svg';
import { ReactComponent as Evenodd } from 'images/svg/evenodd.svg';
import { ReactComponent as Oil } from 'images/svg/oil.svg';
import { ReactComponent as Sun } from 'images/svg/sun.svg';

export const ProductCard = () => {
  return (
    <ProductCardContainer>
      <ProductCardSection>
        <ProductNav>
          <ProductNavList>
            <ProductNavItem>
              <ProductNavLink href="/">Plants</ProductNavLink>
            </ProductNavItem>
            <ProductNavItem>
              <ProductNavLink href="/catalog">Indoor Plants</ProductNavLink>
            </ProductNavItem>
            <ProductNavItem>
              <ProductNavLink href="/catalog/:id" $primary>
                Monstera
              </ProductNavLink>
            </ProductNavItem>
          </ProductNavList>
        </ProductNav>
        <ProductContent>
          <ProductGallery>
            {/* <Swiper
              direction={'vertical'}
              modules={[Navigation, Pagination, Mousewheel, Keyboard]}
              // spaceBetween={47}
              slidesPerView={6}
              navigation
              pagination={{ clickable: true }}
              mousewheel={true}
              keyboard={true}
              loop={true}
              loopPreventsSliding={true}
              loopedSlides={1}
              scrollbar={{ draggable: true }}
            >
              <SwiperSlide>
                <img src={img1} alt="Image 1" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img2} alt="Image 2" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img3} alt="Image 3" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img4} alt="Image 4" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img5} alt="Image 5" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={img6} alt="Image 6" />
              </SwiperSlide>
            </Swiper> */}

            <ControlsList>
              <ControlsItem>
                <img src={img1} alt="Image 1" />
              </ControlsItem>
              <ControlsItem>
                <img src={img2} alt="Image 2" />
              </ControlsItem>
              <ControlsItem>
                <img src={img3} alt="Image 3" />
              </ControlsItem>
              <ControlsItem>
                <img src={img4} alt="Image 4" />
              </ControlsItem>
              <ControlsItem>
                <img src={img5} alt="Image 5" />
              </ControlsItem>
              <ControlsItem>
                <img src={img6} alt="Image 6" />
              </ControlsItem>
            </ControlsList>
            <div>
              <ProductImage width={347} src={img} alt="Product image" />
              <DeliveryInfo>
                <DeliveryInfoItem>
                  <Car width={32} height={32} />
                  <span>Free shipping</span>
                  <p>Get free standard shipping when you spend $150 or more.</p>
                </DeliveryInfoItem>
                <DeliveryInfoItem>
                  <Done width={32} height={32} />
                  <span>Guarantee</span>
                  <p>
                    If your plant dies withing 30 days, we’ll replace it for
                    free.
                  </p>
                </DeliveryInfoItem>
              </DeliveryInfo>
            </div>
          </ProductGallery>
          <ProductInfo>
            <div>
              <Heading>
                <Headline> Monstera</Headline>
                <Prices>
                  <Discount>165$</Discount>
                  <Price>222$</Price>
                </Prices>
              </Heading>
              <Description>
                have attractive leathery leaves that are often cut into lobes
              </Description>
            </div>
            <Options>
              <ProductSubTitle>Option:</ProductSubTitle>
              <OptionsList>
                <Option type="button" aria-label="4“ plastic grow pot">
                  4“ plastic grow pot
                </Option>
                <Option type="button" aria-label="6“ horti white pot">
                  6“ horti white pot
                </Option>
              </OptionsList>
            </Options>
            <Options>
              <ProductSubTitle>Quantity:</ProductSubTitle>
              <Quantity>
                <IconBtn type="button" aria-label="plus">
                  <Plus />
                </IconBtn>
                <span>1</span>
                <IconBtn type="button" aria-label="minus">
                  <Minus />
                </IconBtn>
              </Quantity>
            </Options>
            <TextBtn type="button" aria-label="Add to card">
              ADD to card
            </TextBtn>
            <InfoSection>
              <Accord>
                <ProductSubTitle marginBottom="0">
                  Care and Maintenance
                </ProductSubTitle>
                <IconBtn type="button" aria-label="switch to open description">
                  <Open />
                </IconBtn>
              </Accord>
              <AccordCareList>
                <AccordCareItem>
                  <Sun width={24} height={24} />
                  <span>
                    Put it in a place where the sun`s rays pierce through some
                    cover, e.g. a curtain or a tree outside the window
                  </span>
                </AccordCareItem>
                <AccordCareItem>
                  <Oil width={24} height={24} />
                  <span>
                    Wait until half of the substrate in the pot is dry before
                    watering again
                  </span>
                </AccordCareItem>
                <AccordCareItem>
                  <Evenodd width={24} height={24} />
                  <span>
                    It tolerates home humidity well and you don`t have to worry
                    about it
                  </span>
                </AccordCareItem>
                <AccordCareItem>
                  <Cat width={24} height={24} />
                  <span>
                    Keep away from pets - nibbling on leaves can harm pets
                  </span>
                </AccordCareItem>
              </AccordCareList>
            </InfoSection>
            <InfoSection>
              <Accord>
                <ProductSubTitle marginBottom="0">
                  Care and Maintenance
                </ProductSubTitle>
                <IconBtn type="button" aria-label="switch to open description">
                  <Open />
                </IconBtn>
              </Accord>
              <AccordIncludedList>
                <AccordIncludedItem>
                  Healthy plant pre-potted with premium soil
                </AccordIncludedItem>
                <AccordIncludedItem>Ecopots pot and saucer</AccordIncludedItem>
                <AccordIncludedItem>
                  All the tips and tricks for expert-level care
                </AccordIncludedItem>
              </AccordIncludedList>
            </InfoSection>
          </ProductInfo>
        </ProductContent>
      </ProductCardSection>
    </ProductCardContainer>
  );
};
