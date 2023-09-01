import React from 'react';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { SEO } from 'utils/SEO';
import { useDispatch } from 'react-redux';
import { addHeaderBottom } from 'redux/header_bottom/operation';
import { useEffect } from 'react';

const Login = () => {
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
      <SEO title="HomeForest Log in" description="Log in to your account" />
      <LoginForm />
    </>
  );
};

export default Login;
