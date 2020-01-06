// testUtils.js rexports @testing-library/react with a customRender method as render
// the customRender method wraps tests in the react-router and redux store providers

import React from 'react';
import { render } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom';

// redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const store = createStore(rootReducer, applyMiddleware(thunk))

const ProviderWrapper = ({ children }) => {
  return (
    <Provider store={store}>
      <Router>
        {children}
      </Router>
    </Provider>
  )
}

const customRender = (ui, options) =>
  render(ui, { wrapper: ProviderWrapper, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }