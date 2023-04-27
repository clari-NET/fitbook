import React, {useEffect} from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Fitbook from './Fitbook';
import generateData from './database/dataScript';

export default function App() {
  // async function something() {
  //   const some = await generateData();
  //   return some;
  // }

  // useEffect(() => {
  //   something();
  // }, []);

  return (
    <Provider store={store}>
      <Fitbook />
    </Provider>
  );
}
