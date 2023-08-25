import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { persistor, store } from 'redux/store';
import { App } from 'components/App/App';
import { GlobalStyle } from 'components/baseStyles/GlobalStyle';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

window.global = { BASE_URL: 'http://localhost:3030/api' };
// window.global = { BASE_URL: 'https://trefle.io/api/v1/plants?token=Qm4J-FWwgb62cSxboArARECiQLFbnumbTBtv6qLf6RY'};

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
