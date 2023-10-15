import React from 'react';
import { Navigate } from 'react-router-dom';
import { selectBasket } from 'redux/basket/selectors';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

export const BasketRoute = ({ component: Component, redirectTo = '/' }) => {
  const basket = useSelector(selectBasket);
  const shouldRedirect = !basket || basket?.length === 0;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

BasketRoute.propTypes = {
  component: PropTypes.object,
  redirectTo: PropTypes.string,
};
