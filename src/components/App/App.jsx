import React from 'react';
import { lazy, useEffect, Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Route, Routes } from 'react-router-dom'; //Navigate
import { RestrictedRoute } from 'routes/RestrictedRoute';
import { PrivateRoute } from 'routes/PrivateRoute';
import { SharedLayout } from '../SharedLayout/SharedLayout';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';
import { selectIsRefreshing, getPermission } from 'redux/auth/selectors';
import { useTranslation } from 'react-i18next';
import NotFoundPage from 'pages/NotFound';

const HomePage = lazy(() => import('pages/Home'));
const UserPage = lazy(() => import('pages/User'));
const CatalogPage = lazy(() => import('pages/Catalog'));
const ProductCardPage = lazy(() => import('pages/ProductCardPage'));
const FavoritePage = lazy(() => import('pages/Favorite'));
const GiftsPage = lazy(() => import('pages/Gifts'));
const CarePage = lazy(() => import('pages/Care'));
const RegisterPage = lazy(() => import('pages/Register'));
const LoginPage = lazy(() => import('pages/Login'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  const permission = useSelector(getPermission);
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

            {permission === 'admin' ? (
              <Route
                path="login"
                element={
                  <RestrictedRoute
                    redirectTo="/admin"
                    component={<LoginPage />}
                  />
                }
              />
            ) : (
              <Route
                path="login"
                element={
                  <RestrictedRoute
                    redirectTo="/user"
                    component={<LoginPage />}
                  />
                }
              />
            )}
            <Route path="catalog" element={<CatalogPage />} />
            <Route path="catalog/:id" element={<ProductCardPage />} />
            <Route
              path="catalog/favorite"
              element={
                <PrivateRoute
                  redirectTo="/register"
                  component={<FavoritePage />}
                />
              }
            />
            <Route path="gifts" element={<GiftsPage />} />
            <Route path="care" element={<CarePage />} />
            <Route
              path="user"
              element={
                <PrivateRoute redirectTo="/register" component={<UserPage />} />
              }
            />

            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </HelmetProvider>
  );
};
