import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { persistor, store } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';

import Main from 'components/Main';
import Header from 'components/Header';

const App: FC = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Header />
      <Main />
    </PersistGate>
  </Provider>
);

export default App;
