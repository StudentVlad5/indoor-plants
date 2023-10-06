import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik, Formik } from 'formik';
import { ImEye, ImEyeBlocked } from 'react-icons/im';
import schemas from 'utils/schemas';
import { register } from 'redux/auth/operations';
import theme from 'components/baseStyles/Variables.styled';
import {
  FormRegister,
  FormContainer,
  Input,
  Btn,
  TitleRegister,
  BackButton,
  ShowPassword,
  StyledLink,
  BoxText,
  IconValid,
  IconInValid,
  ErrBox,
  Div,
  FormSection,
  BtnContainer,
  Span,
} from './RegisterForm.styled';

const RegisterForm = () => {
  const [isShown, setIsShown] = useState(true);
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const onSubmit = ({ values }) => {
    setIsLoading(true);
    const { name: userName, email, password, phone, location } = values;
    dispatch(
      register({
        userName,
        email,
        password,
        phone,
        location,
      }),
    );
    setIsLoading(false);
  };

  const showForm = () => {
    setIsShown(false);
  };

  const hideForm = () => {
    setIsShown(true);
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      phone: '',
      location: '',
    },
    validationSchema: schemas.registerSchema,
    onSubmit: (values, action) => {
      onSubmit({ values, action });
    },
  });

  const isValid =
    (formik.errors.email && formik.touched.email) ||
    (formik.errors.password && formik.touched.password) ||
    (formik.errors.confirmPassword && formik.touched.confirmPassword) ||
    formik.values.email === '' ||
    formik.values.confirmPassword === ''
      ? true
      : false;

  const showPassword = () => {
    setShowPass(!showPass);
  };
  const showConfirmPassword = () => {
    setShowConfirmPass(!showConfirmPass);
  };

  const showAccentValidateInput = (hasValue, isValide) => {
    return !hasValue
      ? null
      : isValide
      ? `${theme.colors.red}`
      : `${theme.colors.darkGreen}`;
  };

  return (
    <FormSection>
      <FormContainer>
        <Formik validationSchema={schemas.registerSchema}>
          <FormRegister onSubmit={formik.handleSubmit} autoComplete="off">
            <TitleRegister>{'Register'}</TitleRegister>
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
                  value={formik.values.email}
                  validate={schemas.registerSchema.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />

                {!formik.values.email ? null : !formik.errors.email ? (
                  <IconValid color={theme.colors.green1} />
                ) : (
                  <IconInValid color={theme.colors.red} />
                )}
                {formik.errors.email && formik.touched.email ? (
                  <ErrBox>{formik.errors.email}</ErrBox>
                ) : null}
                <Span className="floating-label">Email</Span>
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
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  onBlur={formik.handleBlur}
                />
                <ShowPassword onClick={showPassword}>
                  {!showPass ? <ImEyeBlocked /> : <ImEye />}
                </ShowPassword>
                {formik.errors.password && formik.touched.password ? (
                  <ErrBox>{formik.errors.password}</ErrBox>
                ) : null}
                <Span className="floating-label">Password</Span>
              </Div>
            )}
            {isShown && (
              <Div>
                <Input
                  style={{
                    borderColor: showAccentValidateInput(
                      formik.values.confirmPassword,
                      formik.errors.confirmPassword,
                    ),
                  }}
                  name="confirmPassword"
                  type={showConfirmPass ? 'text' : 'password'}
                  onChange={formik.handleChange}
                  value={formik.values.confirmPassword}
                  onBlur={formik.handleBlur}
                />
                <ShowPassword onClick={showConfirmPassword}>
                  {!showConfirmPass ? <ImEyeBlocked /> : <ImEye />}
                </ShowPassword>
                {formik.errors.confirmPassword &&
                formik.touched.confirmPassword ? (
                  <ErrBox>{formik.errors.confirmPassword}</ErrBox>
                ) : null}
                <Span className="floating-label">Confirm Password</Span>
              </Div>
            )}
            {isShown && (
              <BtnContainer>
                <Btn type="button" onClick={showForm} disabled={isValid}>
                  {'Next'}
                </Btn>
                <BoxText>
                  <span>{'Already have an account?'}</span>
                  <StyledLink to="/signin">{'Sign In'}</StyledLink>
                </BoxText>
              </BtnContainer>
            )}
            {!isShown && (
              <Div>
                <Input
                  style={{
                    borderColor: showAccentValidateInput(
                      formik.values.name,
                      formik.errors.name,
                    ),
                  }}
                  name="name"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  onBlur={formik.handleBlur}
                />
                {!formik.values.name ? null : !formik.errors.name ? (
                  <IconValid color={theme.colors.green1} />
                ) : (
                  <IconInValid color={theme.colors.red} />
                )}
                {formik.errors.name && formik.touched.name ? (
                  <ErrBox>{formik.errors.name}</ErrBox>
                ) : null}
                <Span className="floating-label">Name</Span>
              </Div>
            )}
            {!isShown && (
              <Div>
                <Input
                  style={{
                    borderColor: showAccentValidateInput(
                      formik.values.location,
                      formik.errors.location,
                    ),
                  }}
                  name="location"
                  type="text"
                  value={formik.values.location}
                  onBlur={formik.handleBlur}
                  onChange={e => {
                    formik.handleChange(e);
                  }}
                />
                {!formik.values.location ? null : !formik.errors.location ? (
                  <IconValid color={theme.colors.green1} />
                ) : (
                  <IconInValid color={theme.colors.red} />
                )}

                {formik.errors.location && formik.touched.location ? (
                  <ErrBox>{formik.errors.location}</ErrBox>
                ) : null}
                <Span className="floating-label">Location, region</Span>
              </Div>
            )}
            {!isShown && (
              <Div>
                <Input
                  style={{
                    borderColor: showAccentValidateInput(
                      formik.values.phone,
                      formik.errors.phone,
                    ),
                  }}
                  id="phone"
                  type="phone"
                  onChange={formik.handleChange}
                  value={formik.values.phone}
                  onBlur={formik.handleBlur}
                  name="phone"
                />
                {!formik.values.phone ? null : !formik.errors.phone ? (
                  <IconValid color={theme.colors.green1} />
                ) : (
                  <IconInValid color={theme.colors.red} />
                )}
                {formik.errors.phone && formik.touched.phone ? (
                  <ErrBox>{formik.errors.phone}</ErrBox>
                ) : null}
                <Span className="floating-label">Mobile phone</Span>
              </Div>
            )}
            {!isShown && (
              <BtnContainer>
                <Btn type="submit" aria-label="submit registration">
                  {isLoading ? 'Loading' : 'Register'}
                </Btn>
                <BackButton
                  type="button"
                  aria-label="back button"
                  onClick={hideForm}
                >
                  {'Back'}
                </BackButton>
                <BoxText>
                  <span>{'Already have an account?'}</span>{' '}
                  <StyledLink to="/signin">{'Sign In'}</StyledLink>
                </BoxText>
              </BtnContainer>
            )}
          </FormRegister>
        </Formik>
      </FormContainer>
    </FormSection>
  );
};

export default RegisterForm;
