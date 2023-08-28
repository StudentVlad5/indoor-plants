import React, { useState } from 'react';
import {
  ProductsBox,
  ProductsTitle,
  ProductsBtn,
  ProductsList,
  // ProductsListItem,
  // ProductsListItemDiscr,
  // ProductsListItemDiscrText,
  // ListItemDiscrTitle,
  ProductsImg,
  // ListItemDiscrSize,
  ProductsSection,
  ItemWraper,
  NameWraper,
} from './Products.styled';
// import plant from '../../../images/hero/products/plant.png';
import { fetchData } from 'services/APIservice';
import { Health } from '../Health/Health';
import { Care } from '../Care/Care';
import { FeedbackComp } from '../Feedback/Feedback';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { onFetchError } from 'components/helpers/Messages/NotifyMessages';

export const Products = () => {
  const [listOfGoods, setListOfGoods] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [, setError] = useState(null);
  const [searchParams] = useSearchParams();

  const { BASE_URL_IMG } = window.global;
  // const BASE_URL_IMG = 'http://localhost:3030/uploads/';

  useEffect(() => {
    async function fetchListOfGoods() {
      setIsLoading(true);
      try {
        const { data } = await fetchData(`/catalog?${searchParams}`);
        if (!data) {
          return onFetchError('Whoops, something went wrong');
        }
        // console.log(data);
        setListOfGoods(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchListOfGoods();
  }, []);

  // console.log(listOfGoods);

  return (
    <ProductsBox>
      <ProductsSection>
        <ProductsTitle>Discounts from 10 to 25%</ProductsTitle>
        <ProductsBtn href="#">See all</ProductsBtn>

        <ProductsList>
          {listOfGoods?.length === 0 && !isLoading ? (
            <h3>Whoops! Can&apost find anything...</h3>
          ) : (
            listOfGoods.splice(0, 4).map(item => (
              // <ProductsListItem key={item._id}>
              //   <ProductsListItemDiscr>
              //     <ProductsImg
              //       src={BASE_URL_IMG + item.images[0]}
              //       alt={item.name}
              //     />

              //     <ProductsListItemDiscrText>
              //       <ListItemDiscrTitle>{item.name}</ListItemDiscrTitle>
              //       <ListItemDiscrSize>SIZE</ListItemDiscrSize>
              //       {item.options.map(data => (
              //         // <li style={{ margin: 'auto' }} key={data.title}>

              //         <ListItemDiscrSize
              //           key={data.title}
              //           style={{ marginLeft: 'auto' }}
              //         >
              //           {data.title} {/* SIZE  */}
              //         </ListItemDiscrSize>

              //         //  <ListItemDiscrTitle style={{ marginLeft: 'auto' }}>
              //         //   {Math
              //         //     .round
              //         //     // Number(data.price.split(',').join('.')) -
              //         //     //   Number(data.discount.split(',').join('.')),
              //         //     // 2,
              //         //     ()}
              //         //   {item.currency}
              //         // </ListItemDiscrTitle>
              //         // </li>
              //       ))}
              //     </ProductsListItemDiscrText>
              //   </ProductsListItemDiscr>
              // </ProductsListItem>

              <ItemWraper key={item._id}>
                <ProductsImg
                  src={BASE_URL_IMG + item.images[0]}
                  alt={item.name}
                />
                <h4 style={{ margin: '4px auto' }}>{item.name}</h4>
                <NameWraper>
                  {item.options.map(data => (
                    <li style={{ margin: 'auto' }} key={data.title}>
                      {data.title} - 122
                      {/* {Math.round(
                        // Number(data.price.split(',').join('.')) -
                        //   Number(data.discount.split(',').join('.')),
                        // 2,
                      )} */}
                      {item.currency}
                    </li>
                  ))}
                </NameWraper>
              </ItemWraper>
            ))
          )}

          {/*<ProductsListItem>
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
          </ProductsListItem> */}
        </ProductsList>
      </ProductsSection>

      <Health />
      <Care />
      <FeedbackComp />
    </ProductsBox>
  );
};
