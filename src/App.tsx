import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { persistor, store } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';

import Router from 'components/Router';
import { BrowserRouter } from 'react-router-dom';

const App: FC = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);

export default App;
