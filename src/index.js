import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

// redux
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import rootReducer from './reducers';

// components
import App from './App';

// styles
import ScrollToTop from './utils/ScrollToTop'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

// redux devtools integration
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// create redux store
const store = createStore(
    rootReducer, 
    composeEnhancers(applyMiddleware(thunk, logger))
);

const rootElement = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
      <Router>
          <ScrollToTop />
          <App />
      </Router>
    </Provider>, 
    rootElement);