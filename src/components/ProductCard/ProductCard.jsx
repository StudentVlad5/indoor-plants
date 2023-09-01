import React, { useState } from 'react'; //, useEffect
import PropTypes from 'prop-types';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css';
import * as SC from './ProductCard.styled';
import { Headline } from 'components/baseStyles/CommonStyle.styled';

import { ReactComponent as Car } from 'images/svg/shipping.svg';
import { ReactComponent as Done } from 'images/svg/done.svg';
import { ReactComponent as Plus } from 'images/svg/plus.svg';
import { ReactComponent as Minus } from 'images/svg/minus.svg';
import { ReactComponent as Open } from 'images/svg/open.svg';
import { ReactComponent as Cat } from 'images/svg/cat.svg';
import { ReactComponent as Evenodd } from 'images/svg/evenodd.svg';
import { ReactComponent as Oil } from 'images/svg/oil.svg';
import { ReactComponent as Sun } from 'images/svg/sun.svg';

const { BASE_URL_IMG } = window.global;

export const ProductCard = ({ product }) => {
  const {
    _id,
    name,
    typeOfPlants,
    oldPrice,
    currentPrice,
    currency,
    description,
    options,
    totalQuantity,
    images,
  } = product;

  // get data from selected option
  const [optionData, setOptionData] = useState({
    title: null,
    oldPrice: oldPrice ? oldPrice : currentPrice || 0,
    currentPrice: currentPrice ? currentPrice : oldPrice || 0,
    total: totalQuantity || 0,
  });

  const getOptionData = e => {
    e.preventDefault();
    const selectedOption = e.currentTarget.dataset.option;
    const selectedData = options.find(
      option => option.title === selectedOption,
    );
    setOptionData(selectedData);
  };

  //get selected value
  const [value, setValue] = useState(1);

  // open details for the info section
  const [showCareDetails, setCareShowDetails] = useState(false);
  const toggleCareDetails = () => setCareShowDetails(state => !state);
  const [showIncludedDetails, setShowIncludedDetails] = useState(false);
  const toggleIncludedDetails = () => setShowIncludedDetails(state => !state);

  return (
    <SC.ProductCardContainer>
      <SC.ProductCardSection>
        <SC.ProductNav>
          <SC.ProductNavList>
            <SC.ProductNavItem>
              <SC.ProductNavLink href="/indoor-plants/">
                Plants
              </SC.ProductNavLink>
            </SC.ProductNavItem>
            <SC.ProductNavItem>
              <SC.ProductNavLink href="/indoor-plants/catalog">
                Indoor Plants
              </SC.ProductNavLink>
            </SC.ProductNavItem>
            <SC.ProductNavItem>
              <SC.ProductNavLink
                href={`/indoor-plants/catalog?perPage=12&page=1&typeOfPlants=${typeOfPlants}`}
              >
                {typeOfPlants}
              </SC.ProductNavLink>
            </SC.ProductNavItem>
            <SC.ProductNavItem>
              <SC.ProductNavLink
                href={`/indoor-plants/catalog/${_id}`}
                $primary
              >
                {name}
              </SC.ProductNavLink>
            </SC.ProductNavItem>
          </SC.ProductNavList>
        </SC.ProductNav>
        <SC.ProductContent>
          <SC.ProductGallery>
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

            <SC.ControlsList>
              {images?.map((img, i) => {
                return (
                  <SC.ControlsItem key={i}>
                    <img src={BASE_URL_IMG + img} alt="Image" loading="lazy" />
                  </SC.ControlsItem>
                );
              })}
            </SC.ControlsList>
            <div>
              <SC.ProductImage
                width={347}
                height={600}
                src={BASE_URL_IMG + images[0]}
                alt="Product image"
                loading="lazy"
              />
              <SC.DeliveryInfo>
                <SC.DeliveryInfoItem>
                  <Car width={32} height={32} />
                  <span>Free shipping</span>
                  <p>Get free standard shipping when you spend $150 or more.</p>
                </SC.DeliveryInfoItem>
                <SC.DeliveryInfoItem>
                  <Done width={32} height={32} />
                  <span>Guarantee</span>
                  <p>
                    If your plant dies withing 30 days, we’ll replace it for
                    free.
                  </p>
                </SC.DeliveryInfoItem>
              </SC.DeliveryInfo>
            </div>
          </SC.ProductGallery>
          <SC.ProductInfo>
            <div>
              <SC.Heading>
                <Headline> {name}</Headline>
                {currentPrice ? (
                  <SC.Prices>
                    <SC.Discount>
                      {optionData.currentPrice}
                      {currency}
                    </SC.Discount>
                    <SC.Price>
                      {optionData.oldPrice}
                      {currency}
                    </SC.Price>
                  </SC.Prices>
                ) : (
                  <SC.Prices>
                    <SC.Discount>
                      {optionData.oldPrice}
                      {currency}
                    </SC.Discount>
                  </SC.Prices>
                )}
              </SC.Heading>
              <SC.Description>{description}</SC.Description>
            </div>
            {options.length !== 0 && (
              <SC.Options>
                <SC.ProductSubTitle>Option:</SC.ProductSubTitle>
                <SC.OptionsList>
                  {options.map((option, i) => {
                    return (
                      <SC.Option
                        key={i}
                        type="button"
                        aria-label={option.title}
                        disabled={0 == option.total}
                        onClick={e => getOptionData(e)}
                        data-option={option.title}
                      >
                        {option.title}
                      </SC.Option>
                    );
                  })}
                </SC.OptionsList>
              </SC.Options>
            )}
            <SC.Options>
              <SC.ProductSubTitle>Quantity:</SC.ProductSubTitle>
              <SC.Quantity>
                <SC.IconBtn
                  type="button"
                  aria-label="minus"
                  onClick={() => setValue(value - 1)}
                  disabled={value <= 0}
                >
                  <Minus />
                </SC.IconBtn>
                <span>{value}</span>
                <SC.IconBtn
                  type="button"
                  aria-label="plus"
                  onClick={() => setValue(value + 1)}
                  disabled={value >= optionData.total}
                >
                  <Plus />
                </SC.IconBtn>
              </SC.Quantity>
            </SC.Options>
            <SC.TextBtn
              type="button"
              aria-label="Add to card"
              disabled={value === 0}
            >
              ADD to card
            </SC.TextBtn>
            <SC.InfoSection>
              <SC.Accord>
                <SC.ProductSubTitle marginBottom="0">
                  Care and Maintenance
                </SC.ProductSubTitle>
                <SC.IconBtn
                  type="button"
                  aria-label="switch to open description"
                  aria-expanded="false"
                  onClick={toggleCareDetails}
                >
                  <Open />
                </SC.IconBtn>
              </SC.Accord>
              {showCareDetails && (
                <SC.AccordCareList>
                  <SC.AccordCareItem>
                    <Sun width={24} height={24} />
                    <span>
                      Put it in a place where the sun`s rays pierce through some
                      cover, e.g. a curtain or a tree outside the window
                    </span>
                  </SC.AccordCareItem>
                  <SC.AccordCareItem>
                    <Oil width={24} height={24} />
                    <span>
                      Wait until half of the substrate in the pot is dry before
                      watering again
                    </span>
                  </SC.AccordCareItem>
                  <SC.AccordCareItem>
                    <Evenodd width={24} height={24} />
                    <span>
                      It tolerates home humidity well and you don`t have to
                      worry about it
                    </span>
                  </SC.AccordCareItem>
                  <SC.AccordCareItem>
                    <Cat width={24} height={24} />
                    <span>
                      Keep away from pets - nibbling on leaves can harm pets
                    </span>
                  </SC.AccordCareItem>
                </SC.AccordCareList>
              )}
            </SC.InfoSection>
            <SC.InfoSection>
              <SC.Accord>
                <SC.ProductSubTitle marginBottom="0">
                  What’s included
                </SC.ProductSubTitle>
                <SC.IconBtn
                  type="button"
                  aria-label="switch to open description"
                  aria-expanded="false"
                  onClick={toggleIncludedDetails}
                >
                  <Open />
                </SC.IconBtn>
              </SC.Accord>
              {showIncludedDetails && (
                <SC.AccordIncludedList>
                  <SC.AccordIncludedItem>
                    Healthy plant pre-potted with premium soil
                  </SC.AccordIncludedItem>
                  <SC.AccordIncludedItem>
                    Ecopots pot and saucer
                  </SC.AccordIncludedItem>
                  <SC.AccordIncludedItem>
                    All the tips and tricks for expert-level care
                  </SC.AccordIncludedItem>
                </SC.AccordIncludedList>
              )}
            </SC.InfoSection>
          </SC.ProductInfo>
        </SC.ProductContent>
      </SC.ProductCardSection>
    </SC.ProductCardContainer>
  );
};

ProductCard.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      oldPrice: PropTypes.number.isRequired,
      currentPrice: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      options: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string,
          oldPrice: PropTypes.number,
          currentPrice: PropTypes.number,
          total: PropTypes.number,
        }),
      ),
      totalQuantity: PropTypes.number,
      typeOfPlants: PropTypes.string,
      light: PropTypes.string,
      petFriendly: PropTypes.string,
      maintenance: PropTypes.string,
      potSize: PropTypes.number,
      potSizeItem: PropTypes.string,
      hardToKill: PropTypes.string,
      rare: PropTypes.string,
      waterSchedule: PropTypes.string,
      images: PropTypes.array,
    }),
  ),
};
