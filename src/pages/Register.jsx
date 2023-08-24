import React from 'react';
import RegisterForm from 'components/RegisterForm/RegisterForm';
import { SEO } from 'utils/SEO';

const Register = () => {
  return (
    <>
      <SEO title="HomeForest Register" description="Register your account" />
      <RegisterForm />
    </>
  );
};

export default Register;