import React from 'react';

// render from `testUtils.js` is a custom method built on @testing-library/react
// custom render method wraps test components in providers for the redux store and react-router
import { render } from '../utils/testUtils.js'
import App from '../App';

it('renders without crashing', () => {
  render(<App />)
});