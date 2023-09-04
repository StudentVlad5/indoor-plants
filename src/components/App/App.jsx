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
import useBasket from 'components/useBasket';

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

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  const { t } = useTranslation();
  const { basket, addToBasket, removeProduct } = useBasket();

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

            <Route path="catalog" element={<CatalogPage />} />
            <Route
              path="catalog/:id"
              element={<ProductCardPage addToBasket={addToBasket} />}
            />
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
            <Route
              path="checkout"
              element={
                <CheckOutPage basket={basket} removeProduct={removeProduct} />
              }
            />

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
                    component={<h2>favorites information</h2>}
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
