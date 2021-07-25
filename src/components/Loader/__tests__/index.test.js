import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import Loader from '../index';

describe('Loader Test Suite', () => {
  it('snapshot', () => {
    const tree = renderer.create(<Loader />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the Loader component', () => {
    const component = render(<Loader />);
    expect(component).toBeTruthy();
  });
});
