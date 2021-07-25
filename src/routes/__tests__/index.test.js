import { render } from '@testing-library/react';
import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import '@testing-library/jest-dom/extend-expect';
import { MockedProvider } from '@apollo/client/testing';
import Routes from '../index';

test('should render route', () => {
  const history = createMemoryHistory();
  render(
    <MockedProvider>
      <Router history={history}>
        <Routes />
      </Router>
    </MockedProvider>
  );
  expect(history.location.pathname).toBe('/');
});
