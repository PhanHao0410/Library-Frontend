/* eslint-disable global-require */

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'mobx-react';
import Theme from './themes';
import GlobalStyles from './themes/GlobalStyles';
import App from './App';
import { RootStore } from './mobx/rootStore';
import 'react-toastify/dist/ReactToastify.css';

const loading = () => (
  <div className="animated fadeIn pt-3 text-center">Loading...</div>
);

const root = ReactDOM.createRoot(document.getElementById('root-admin'));

root.render(
  <React.Suspense fallback={loading()}>
    <Provider {...RootStore}>
      <Theme>
        <GlobalStyles />
        <App />
      </Theme>
    </Provider>
  </React.Suspense>,
);

if (module.hot) {
  module.hot.accept('./App', () => {
    const AppContainer = require('./App').default;
    root.render(
      <React.Suspense fallback={loading()}>
        <Provider {...RootStore}>
          <Theme>
            <GlobalStyles />
            <AppContainer />
          </Theme>
        </Provider>
      </React.Suspense>,
    );
  });
}
