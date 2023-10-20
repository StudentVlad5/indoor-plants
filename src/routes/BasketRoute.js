import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { selectBasket } from 'redux/basket/selectors';
import PropTypes from 'prop-types';
import { getFromStorage } from 'services/localStorService';
// import { useSelector } from 'react-redux';

export const BasketRoute = ({ component: Component, redirectTo = '/' }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [userAnonimusID, _] = useState(
    getFromStorage('userAnonimusID') ? getFromStorage('userAnonimusID') : '',
  );
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    (async function getItem() {
      setIsLoading(true);
      try {
        const { data } = await getItemInBasket(`/basket/${userAnonimusID}`);
        if (!data) {
          return onFetchError(t('Whoops, something went wrong'));
        }
        setBasket(data.data);
        saveToStorage('basketData', data.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  const shouldRedirect = !basket || basket?.length === 0;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

BasketRoute.propTypes = {
  component: PropTypes.object,
  redirectTo: PropTypes.string,
};
