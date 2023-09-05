import React, { useState } from 'react';
import { toast } from 'react-toastify';

const useBasket = () => {
  const [basket, setBasket] = useState([]);

  const addToBasket = async ({
    _id,
    name,
    oldPrice,
    currentPrice,
    currency,
    optionData,
    images,
  }) => {
    try {
      setBasket([
        ...basket,
        {
          _id,
          name,
          oldPrice,
          currentPrice,
          currency,
          optionData,
          images,
        },
      ]);
      console.log(basket);

      toast.success('Added to the basket successfully', {
        hideProgressBar: true,
      });
    } catch (error) {
      console.log({ error });
    }
  };

  const removeProduct = (_id, size) => {
    try {
      const updatedBasket = basket.filter(
        product => product._id !== _id || product.optionData.title !== size,
      );
      setBasket(updatedBasket);
    } catch (error) {
      console.log(error);
    }
  };
  return { basket, addToBasket, removeProduct };
};

export default useBasket;
