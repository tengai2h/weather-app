import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import persistStore from 'redux-persist/es/persistStore';
import { composeWithDevTools } from 'redux-devtools-extension';

import { rootReducer } from './rootReducer';

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export const persistor = persistStore(store);
