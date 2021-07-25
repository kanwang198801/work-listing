import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import Home from '../index';
import { GET_WORKS } from '../../../api/queries';
import { MockedProvider } from '@apollo/client/testing';
import { works } from '../../../testData';

const mocks = [
  {
    request: {
      query: GET_WORKS
    },
    result: {
      data: {
        works
      }
    }
  }
];

describe('Home Test Suite', () => {
  it('snapshot', () => {
    const tree = renderer
      .create(
        <MockedProvider mocks={mocks} addTypename={false}>
          <Home />
        </MockedProvider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the Home component', () => {
    const component = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Home />
      </MockedProvider>
    );
    expect(component).toBeTruthy();
  });
});
