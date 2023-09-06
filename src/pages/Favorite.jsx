import React from 'react';
import { useEffect } from 'react';
import { SEO } from 'utils/SEO';
import { useDispatch } from 'react-redux';
import { cleanHeaderBottom } from 'redux/header_bottom/operation';
import { Favorites } from 'components/Favorites/Favorites';

const FavoritePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cleanHeaderBottom());
  }, []);
  return (
    <>
      <SEO title="HomeForest Favorite" description="Favorite of goods" />
      <h3>FavoritePage</h3>
      <Favorites />
    </>
  );
};

export default FavoritePage;
