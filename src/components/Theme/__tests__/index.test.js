import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import Theme from '../index';

describe('Theme Test Suite', () => {
  it('snapshot', () => {
    const tree = renderer.create(<Theme id="test">Test</Theme>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('snapshot when the data is loading', () => {
    const tree = renderer
      .create(
        <Theme id="test" loading={true}>
          Test
        </Theme>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('snapshot when there is an error', () => {
    const tree = renderer
      .create(
        <Theme id="test" error="error">
          Test
        </Theme>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders the Theme component', () => {
    const component = render(<Theme id="test">Test</Theme>);
    expect(component).toBeTruthy();
  });
});
