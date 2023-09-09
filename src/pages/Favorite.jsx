import React from 'react';
import { useEffect } from 'react';
import { SEO } from 'utils/SEO';
import { useDispatch } from 'react-redux';
import { addHeaderBottom } from 'redux/header_bottom/operation';
import { Favorites } from 'components/Favorites/Favorites';

const FavoritePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      addHeaderBottom({
        headerBottom: 'addHeaderBottom',
      }),
    );
  }, []);

  return (
    <>
      <SEO title="HomeForest Favorite" description="Favorite of goods" />
      <Favorites />
    </>
  );
};

export default FavoritePage;
