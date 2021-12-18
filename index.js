/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
//redux
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
// getting data from reducer
import reducer from './Redux';
// passing reducer
const sto = createStore(reducer, applyMiddleware(thunk));
const AppContainer = () => (
  <Provider store={sto}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => AppContainer);
