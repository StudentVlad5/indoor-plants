import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik, Formik } from 'formik';
import { ImEye, ImEyeBlocked } from 'react-icons/im';
import schemas from 'components/Schemas/schemas';
import theme from 'components/baseStyles/Variables.styled';

import {
  FormSection,
  FormContainer,
  FormLogin,
  ShowPassword,
  Input,
  Btn,
  StyledLink,
  BoxText,
  IconValid,
  IconInValid,
  ErrorBox,
  Div,
  TitleLogin,
  TitleLogo,
  BtnContainer,
} from './LoginForm.styled';
import { logIn } from 'redux/auth/operations';
// import { useTranslation } from 'react-i18next';

export const LoginForm = () => {
  const [isShown, setIsShown] = useState(true); //
  const [showPass, setShowPass] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  // const { t } = useTranslation();

  const hideForm = () => {
    setIsShown(true);
  };

  const onSubmit = values => {
    setIsLoading(true);
    const { email, password } = values;
    dispatch(
      logIn({
        email,
        password,
      }),
      hideForm(),
    );
  };
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: schemas.schemasLogin,
    onSubmit,
  });

  const isValid =
    (formik.errors.email && formik.touched.email) ||
    (formik.errors.password && formik.touched.password) ||
    formik.values.email === ''
      ? true
      : false;

  const showPassword = () => {
    setShowPass(!showPass);
  };

  const showAccentValidateInput = (hasValue, isValide) => {
    return !hasValue ? null : isValide ? '#E2001A' : '#3CBC81';
  };
  return (
    <FormSection>
      <FormContainer>
        <Formik validationSchema={schemas.schemasLogin}>
          <FormLogin onSubmit={formik.handleSubmit} autoComplete="off">
            <TitleLogo>{'homeforest'}</TitleLogo>
            <TitleLogin>{'Login Page'}</TitleLogin>
            {isShown && (
              <Div>
                <Input
                  style={{
                    borderColor: showAccentValidateInput(
                      formik.values.email,
                      formik.errors.email,
                    ),
                  }}
                  name="email"
                  type="email"
                  placeholder={'Email'}
                  validate={schemas.schemasLogin.email}
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  onBlur={formik.handleBlur}
                />
                {!formik.values.email ? null : !formik.errors.email ? (
                  <IconValid color={theme.colors.green} />
                ) : (
                  <IconInValid color={theme.colors.red} />
                )}
                {formik.errors.email || formik.touched.email ? (
                  <ErrorBox>{formik.errors.email}</ErrorBox>
                ) : null}
              </Div>
            )}

            {isShown && (
              <Div>
                <Input
                  style={{
                    borderColor: showAccentValidateInput(
                      formik.values.password,
                      formik.errors.password,
                    ),
                  }}
                  name="password"
                  type={showPass ? 'text' : 'password'}
                  placeholder={'Password'}
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  onBlur={formik.handleBlur}
                />

                <ShowPassword onClick={showPassword}>
                  {!showPass ? <ImEyeBlocked /> : <ImEye />}
                </ShowPassword>
                {formik.errors.password && formik.touched.password ? (
                  <ErrorBox>{formik.errors.password}</ErrorBox>
                ) : null}
              </Div>
            )}
            <BtnContainer>
              {isShown && (
                <Btn type="submit" disabled={isValid}>
                  {'Sign In'}
                </Btn>
              )}

              {!isShown && <Btn type="submit">{'Sign In'}</Btn>}
              <BoxText>
                <StyledLink to="/register">{'Create acount'}</StyledLink>
                <StyledLink to="/">{'Forgot your password?'}</StyledLink>
              </BoxText>
            </BtnContainer>
          </FormLogin>
        </Formik>
        {isLoading && <h1 style={{ textAlign: 'center' }}>{'Loading...'}</h1>}
      </FormContainer>
    </FormSection>
  );
};

export default LoginForm;
