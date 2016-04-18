import React from 'react';
import { render } from 'react-dom';
import Todos from './Todos.jsx';
import { Provider } from 'react-redux';
import store from './redux';

const root = (
  <Provider store={store} key="provider">
    <Todos />
  </Provider>
);

render(
  root,
  document.getElementById('app')
);