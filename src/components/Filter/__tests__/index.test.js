import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Filter from '../index';

const onFilterClick = jest.fn();
const onReset = jest.fn();
const filter = (
  <Filter
    title="test filter"
    onChange={onFilterClick}
    onReset={onReset}
    value=""
    options={['test1', 'test2']}
    id="test-filter"
  />
);
describe('Filter Test Suite', () => {
  it('snapshot', () => {
    const tree = renderer.create(filter).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the Filter component', () => {
    const component = render(filter);
    expect(component).toBeTruthy();
  });

  it('Reset button should be clickable', () => {
    render(filter);
    fireEvent.click(document.querySelector('#test-filter-reset-button'));
    expect(onReset).toHaveBeenCalledTimes(1);
  });

  it('Reset button should be clickable', () => {
    render(filter);
    fireEvent.click(document.querySelector('.ant-radio-input'));
    expect(onFilterClick).toHaveBeenCalledTimes(1);
  });
});
