import React from 'react';
import { Provider } from 'react-redux';
import Home from './components/Home';
import './App.css';

function App({ store }) {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
