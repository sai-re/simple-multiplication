import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('renders App', () => {
	const wrapper = shallow(<App />);
	const component = wrapper.find('.App');
	expect(component.length).toBe(1);
});
