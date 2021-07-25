import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import NotFound from '../index';

describe('NotFound Test Suite', () => {
  it('snapshot', () => {
    const tree = renderer.create(<NotFound />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the Works component', () => {
    const component = render(<NotFound />);
    expect(component).toBeTruthy();
  });
});
