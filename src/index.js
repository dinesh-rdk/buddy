import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import configureStore from './configureStore';
import { createBrowserHistory } from 'history';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

const history = createBrowserHistory();
const store = configureStore({}, history);

ReactDOM.render(
  <I18nextProvider i18n={i18n}>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
  </I18nextProvider>,
  document.getElementById('root'),
);
