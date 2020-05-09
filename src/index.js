import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import configureStore from './config-store';
import * as serviceWorker from './serviceWorker';

const initialState = global.window && global.window.__INITIAL_STATE__;
const store = configureStore(initialState);

ReactDOM.hydrate(
    <App store={store} />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
