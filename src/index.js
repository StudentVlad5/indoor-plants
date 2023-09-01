import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { persistor, store } from 'redux/store';
import { App } from 'components/App/App';
import { GlobalStyle } from 'components/baseStyles/GlobalStyle';
import { I18nextProvider } from 'react-i18next';
import i18n from './utils/i18n';

window.global = {
  BASE_URL: 'http://localhost:3030/api',
  BASE_URL_IMG: 'http://localhost:3030/uploads/',
};
// window.global = {
//   BASE_URL: 'https://indoor-plants-backend.studentvlad5.repl.co/api',
//   BASE_URL_IMG: 'https://indoor-plants-backend.studentvlad5.repl.co/uploads/',
// };

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={'Loading'} persistor={persistor}>
        <BrowserRouter basename="indoor-plants">
          <I18nextProvider i18n={i18n}>
            <GlobalStyle />
            <App />
          </I18nextProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);
