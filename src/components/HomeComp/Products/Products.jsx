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
              <p>SIZE</p>
              <p style={{ marginLeft: 'auto' }}>L</p>
            </ProductsListItemDiscrText>
          </ProductsListItemDiscr>
        </ProductsListItem>
      </ProductsList>

      <HealthBox>
        <div>
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

          <HealthImgTitle>New Arrivals</HealthImgTitle>
          <HealthList>
            {imgArr.map((image, idx) => (
              <li key={idx}>
                <img src={image} alt="" />
                <HealthImgDiscr>{titleArr[idx]}</HealthImgDiscr>
              </li>
            ))}
          </HealthList>
        </div>
      </HealthBox>

      <CareBox>
        <div>
          <HealthHeadTitle>Care and treatment</HealthHeadTitle>
          <HealthTitle>Spring care for indoor plants</HealthTitle>
          <HealthDiscr>
            Spring is an important time for indoor plants as it marks the
            beginning of their active growth period. It is also the right time
            to repot your plants. Here are some tips on how and when to do it
            best.
          </HealthDiscr>

          <ReadMore href="#">Read more</ReadMore>
          <CareImg src={youngWoman} alt="" />
        </div>
      </CareBox>

      <Feedback>
        <HealthTitle>What our clients say</HealthTitle>
        <FeedbackBox>
          <ArrowIcon />
          <FeedbackDiscr>
            <QuotationMarkIcon />
            Yukka has taken pride of place in his new home and looks beautiful
            in the sun on a white wall. <FeedbackUser>Matthew H.</FeedbackUser>
          </FeedbackDiscr>
          <ArrowIcon />
        </FeedbackBox>
      </Feedback>
    </ProductsBox>
  );
};
