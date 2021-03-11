import App from './components/app/App';
import React from 'react';
import ReactDOM from 'react-dom';
import middlewareLogger from './middleware/middleware-logger';
import reducer from './reducers/places-reducer';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import './index.css';

const store = createStore(reducer, applyMiddleware(thunkMiddleware, middlewareLogger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);