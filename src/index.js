import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import reducers from "./redux/reducers";
import { Provider } from 'react-redux'
import store_ from "./redux/store"
const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store_}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

