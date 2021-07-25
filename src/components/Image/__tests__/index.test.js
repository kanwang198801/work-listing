import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import Image from '../index';
import { works } from '../../../testData';

describe('Image Test Suite', () => {
  it('snapshot', () => {
    const tree = renderer.create(<Image work={works[0]} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the Image component', () => {
    const component = render(<Image work={works[0]} />);
    expect(component).toBeTruthy();
  });
});
