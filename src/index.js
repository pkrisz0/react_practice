import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import BuyAcorn from './containers/BuyAcorn';
import EatAcorn from './containers/EatAcorn';
import DisplayAcorn from './containers/DisplayAcorn';
import store from './store';

const App = (props) => (
  <main>
    <BuyAcorn />
    <DisplayAcorn />
    <EatAcorn />
  </main>
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

export default App;