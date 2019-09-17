import * as React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';

describe('Test for RequerimentAge Component when there is a value for Age', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<App />);

    expect(component).toMatchSnapshot();
  });
});
