import React, { useState } from 'react';
import {
  ProductsBox,
  ProductsTitle,
  ProductsBtn,
  ProductsList,
  ProductsListItem,
  ProductsListItemDiscr,
  ProductsListItemDiscrText,
  ListItemDiscrTitle,
  ProductsImg,
  HealthBox,
  HealthHeadTitle,
  HealthTitle,
  HealthDiscr,
  ReadMore,
  ImgBox,
  HealthImgTitle,
  HealthImgDiscr,
  HealthList,
  CareBox,
  Feedback,
  FeedbackDiscr,
  QuotationMarkIcon,
  ArrowIcon,
  FeedbackBox,
  FeedbackUser,
  CareImg,
  ListItemDiscrSize,
  HealthBoxDiscr,
  BoxText,
  HealthListItem,
  CareBoxDiscr,
  CareImgBox,
  CareBoxText,
  FeedbackTitle,
} from './Products.styled';
import plant from '../../../images/hero/products/plant.png';
import woman from '../../../images/hero/products/woman.png';
import dog from '../../../images/hero/products/dog-plants.png';
import pepper from '../../../images/hero/products/pepper.png';
import african from '../../../images/hero/products/african.png';
import packaging from '../../../images/hero/products/plant-packaging.png';
import youngWoman from '../../../images/hero/products/young-woman.png';
import { fetchData } from 'services/APIservice';
// import quotationMark from '../../../images/svg/quotationMark.svg'
// import arrow from '../../../images/svg/arrow.svg'

export const Products = () => {
  //   const [plants, setPlants] = useState([]);

  //   useEffect(() => {
  //     fetch(
  //       'https://trefle.io/api/v1/plants?token=Qm4J-FWwgb62cSxboArARECiQLFbnumbTBtv6qLf6RY',
  //     )
  //       .then(response => response.json())
  //       .then(data => setPlants(data.data))
  //       .catch(error => console.error('Error fetching data:', error));
  //   }, []);

  const [listItem, setListItem] = useState([]);
  async function fetchPlants() {
    // setIsLoading(true);
    try {
      const { data } = await fetchData('');

      if (!data) {
        console.log('error');
      }
      setListItem(data.data);
      // setTotalPage(data.totalPage);
    } catch (error) {
      console.log(error);
    }
    // finally {
    //   setIsLoading(false);
    // }
  }
  fetchPlants();

  const imgArr = [dog, pepper, african, packaging];
  const titleArr = [
    'Pet - friendly plants',
    'Hard to  kill plants',
    'Rar plants',
    'Gifts',
  ];

  const feedbackArr = [
    {
      text: 'Yukka has taken pride of place in his new home and looks beautiful in the sun on a white wall.',
      user: 'Matthew H.',
    },
    {
      text: ' Strelitzia is beautiful! 😍 I got it as a gift from my husband and I think it was from the heart because she has been with us for less than a month and two new leaves are already growing 🙂',
      user: 'Jenny P.',
    },
  ];
  const [currentSlide, setcurrentSlide] = useState(0);

  const nextSlide = () => {
    setcurrentSlide(prevSlide => (prevSlide + 1) % feedbackArr.length);
  };

  const prevSlide = () => {
    setcurrentSlide(prevSlide =>
      prevSlide === 0 ? feedbackArr.length - 1 : prevSlide - 1,
    );
  };

  return (
    <ProductsBox>
      <ProductsTitle>Discounts from 10 to 25%</ProductsTitle>
      <ProductsBtn href="#">See all</ProductsBtn>

      <ProductsList>
        {listItem.slice(0, 4).map(plant => {
          <ProductsListItem key={plant.id}>
            {plant.common_name}
          </ProductsListItem>;
        })}
        <ProductsListItem>
          <ProductsListItemDiscr>
            <ProductsImg src={plant} alt="" />

            <ProductsListItemDiscrText>
              <ListItemDiscrTitle>Ficus lyrata - tree</ListItemDiscrTitle>
              <ListItemDiscrTitle style={{ marginLeft: 'auto' }}>
                44$
              </ListItemDiscrTitle>
            </ProductsListItemDiscrText>

            <ProductsListItemDiscrText>
              <ListItemDiscrSize>SIZE</ListItemDiscrSize>
              <ListItemDiscrSize style={{ marginLeft: 'auto' }}>
                L
              </ListItemDiscrSize>
            </ProductsListItemDiscrText>
          </ProductsListItemDiscr>
        </ProductsListItem>
      </ProductsList>

      <HealthBox>
        <HealthBoxDiscr>
          <HealthHeadTitle>health as part of a lifestyle</HealthHeadTitle>
          <HealthTitle>How plants make us happy</HealthTitle>
          <HealthDiscr>
            Here are some of the health benefits of indoor plants. For example
            indoor plants have can help reduce stress and anxiety. Studies have
            shown that just looking at plants can lower blood pressure and heart
            rate.
          </HealthDiscr>

          <ReadMore href="#">Read more</ReadMore>
          <ImgBox>
            <img src={woman} alt="" />
          </ImgBox>
        </HealthBoxDiscr>

        <HealthBoxDiscr>
          <ImgBox>
            <img src={woman} alt="" />
          </ImgBox>
          <BoxText>
            <HealthHeadTitle>health as part of a lifestyle</HealthHeadTitle>
            <HealthTitle>How plants make us happy</HealthTitle>
            <HealthDiscr>
              Here are some of the health benefits of indoor plants. For example
              indoor plants have can help reduce stress and anxiety. Studies
              have shown that just looking at plants can lower blood pressure
              and heart rate.
            </HealthDiscr>

            <ReadMore href="#">Read more</ReadMore>
          </BoxText>
        </HealthBoxDiscr>
      </HealthBox>

      <HealthBox>
        <HealthImgTitle>New Arrivals</HealthImgTitle>
        <HealthList>
          {imgArr.map((image, idx) => (
            <HealthListItem key={idx}>
              <img src={image} alt="" />
              <HealthImgDiscr>{titleArr[idx]}</HealthImgDiscr>
            </HealthListItem>
          ))}
        </HealthList>
      </HealthBox>

      <CareBox>
        <CareBoxDiscr>
          <HealthHeadTitle>Care and treatment</HealthHeadTitle>
          <HealthTitle>Spring care for indoor plants</HealthTitle>
          <HealthDiscr>
            Spring is an important time for indoor plants as it marks the
            beginning of their active growth period. It is also the right time
            to repot your plants. Here are some tips on how and when to do it
            best.
          </HealthDiscr>

          <ReadMore href="#">Read more</ReadMore>
          <CareImgBox>
            <CareImg src={youngWoman} alt="" />
          </CareImgBox>
        </CareBoxDiscr>

        <CareBoxDiscr>
          <div>
            <CareBoxText>
              <HealthHeadTitle>Care and treatment</HealthHeadTitle>
              <HealthTitle>Spring care for indoor plants</HealthTitle>
              <HealthDiscr>
                Spring is an important time for indoor plants as it marks the
                beginning of their active growth period. It is also the right
                time to repot your plants. Here are some tips on how and when to
                do it best.
              </HealthDiscr>

              <ReadMore href="#">Read more</ReadMore>
            </CareBoxText>
          </div>
          <CareImg src={youngWoman} alt="" />
        </CareBoxDiscr>
      </CareBox>

      <Feedback>
        <FeedbackTitle>What our clients say</FeedbackTitle>

        <FeedbackBox>
          <ArrowIcon onClick={prevSlide} />
          <FeedbackDiscr>
            <QuotationMarkIcon />
            {feedbackArr[currentSlide].text}
            <FeedbackUser>{feedbackArr[currentSlide].user}</FeedbackUser>
          </FeedbackDiscr>
          <ArrowIcon onClick={nextSlide} />
        </FeedbackBox>
      </Feedback>
    </ProductsBox>
  );
};
