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
  ListItemDiscrSize,
  ProductsSection,
} from './Products.styled';
import plant from '../../../images/hero/products/plant.png';
import { fetchData } from 'services/APIservice';
import { Health } from '../Health/Health';
import { Care } from '../Care/Care';
import { FeedbackComp } from '../Feedback/Feedback';

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

  return (
    <ProductsBox>
      <ProductsSection>
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
      </ProductsSection>
      
      <Health />
      <Care />
      <FeedbackComp />
    </ProductsBox>
  );
};
