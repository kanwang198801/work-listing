import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import Works from '../index';
import { works } from '../../../testData';

describe('Works Test Suite', () => {
  it('snapshot', () => {
    const tree = renderer.create(<Works works={works} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the Works component', () => {
    const component = render(<Works works={works} />);
    expect(component).toBeTruthy();
  });
});
