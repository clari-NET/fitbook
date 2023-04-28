import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import Fitbook from './Fitbook';

export default function App() {
  return (
    <Provider store={store}>
      <Fitbook />
    </Provider>
  );
}
