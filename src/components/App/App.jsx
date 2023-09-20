import React from 'react';
import { lazy, useEffect, Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Route, Routes } from 'react-router-dom'; //Navigate
import { RestrictedRoute } from 'routes/RestrictedRoute';
import { PrivateRoute } from 'routes/PrivateRoute';
import { SharedLayout } from '../SharedLayout/SharedLayout';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';
import { selectIsRefreshing } from 'redux/auth/selectors';
import { useTranslation } from 'react-i18next';
import NotFoundPage from 'pages/NotFound';
import { UserData } from 'components/UserComp/UserData/UserData';
import AdditionPage from 'pages/Addition';

const HomePage = lazy(() => import('pages/Home'));
const UserPage = lazy(() => import('pages/User'));
const CatalogPage = lazy(() => import('pages/Catalog'));
const ProductCardPage = lazy(() => import('pages/ProductCard'));
const FavoritePage = lazy(() => import('pages/Favorite'));
const GiftsPage = lazy(() => import('pages/Gifts'));
const CarePage = lazy(() => import('pages/Care'));
const RegisterPage = lazy(() => import('pages/Register'));
const LoginPage = lazy(() => import('pages/Login'));
const CheckOutPage = lazy(() => import('pages/CheckOut'));
const ForgotPasswordPage = lazy(() => import('pages/ForgotPassword'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <></>
  ) : (
    <HelmetProvider>
      <Suspense fallback={<div>{t('Loading...')}</div>}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<HomePage />} />

            <Route
              path="register"
              element={
                <RestrictedRoute
                  redirectTo="/user"
                  component={<RegisterPage />}
                />
              }
            />

            <Route
              path="signin"
              element={
                <RestrictedRoute redirectTo="/user" component={<LoginPage />} />
              }
            />

            <Route
              path="forgot_password"
              element={
                <RestrictedRoute
                  redirectTo="/user"
                  component={<ForgotPasswordPage />}
                />
              }
            />

            <Route path="catalog" element={<CatalogPage />} />
            <Route path="catalog/:category" element={<CatalogPage />} />
            <Route path="catalog/byid/:id" element={<ProductCardPage />} />
            <Route
              path="catalog/favorite"
              element={
                <PrivateRoute
                  redirectTo="/signin"
                  component={<FavoritePage />}
                />
              }
            />
            <Route path="gifts" element={<GiftsPage />} />
            <Route path="care" element={<CarePage />} />
            <Route path="checkout" element={<CheckOutPage />} />

            <Route path="addition" element={<AdditionPage />}>
              <Route
                path="about_company"
                element={<h4>About our company</h4>}
              />
              <Route path="faq" element={<h4>FAQ</h4>} />
              <Route path="blogs" element={<h4>BLOGS</h4>} />
              <Route path="shipping" element={<h4>Shipping & Handling</h4>} />
              <Route path="garantee" element={<h4>Garantee</h4>} />
              <Route path="course" element={<h4>Free Online Course</h4>} />
              <Route path="contact" element={<h4>Contact Us</h4>} />
              <Route
                path="rewards_program"
                element={<h4>Rewards Program</h4>}
              />
            </Route>

            <Route
              path="user"
              element={
                <PrivateRoute redirectTo="/signin" component={<UserPage />} />
              }
            >
              <Route
                path="profile"
                element={
                  <PrivateRoute redirectTo="/signin" component={<UserData />} />
                }
              />
              <Route
                path="orders"
                element={
                  <PrivateRoute
                    redirectTo="/signin"
                    component={<h2>orders information</h2>}
                  />
                }
              />
              <Route
                path="favorites"
                element={
                  <PrivateRoute
                    redirectTo="/signin"
                    component={<FavoritePage />}
                  />
                }
              />
            </Route>

            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </HelmetProvider>
  );
};
