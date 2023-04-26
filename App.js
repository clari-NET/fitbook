import store from './store/store';
import { Provider } from 'react-redux';
import Fitbook from './Fitbook';

export default function App() {
  return (
    <Provider store={store}>
      <Fitbook />
    </Provider>
  );
}
