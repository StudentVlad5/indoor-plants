import React from 'react';
import { Navigate } from 'react-router-dom';
// import { useAuth } from 'hooks/useAuth';
import { selectBasket } from 'redux/basket/selectors';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

export const BasketRoute = ({ component: Component, redirectTo = '/' }) => {
  // const { isLoggedIn } = useAuth();
  const basket = useSelector(selectBasket);
  // !isLoggedIn || 
  return !basket || basket?.length === 0 ? (
    <Navigate to={redirectTo} />
  ) : (
    Component
  );
};

BasketRoute.propTypes = {
  component: PropTypes.object,
  redirectTo: PropTypes.string,
};
