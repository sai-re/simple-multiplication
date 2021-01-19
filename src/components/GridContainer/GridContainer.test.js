import React from 'react';
import { shallow, mount } from 'enzyme';
import GridContainer from './GridContainer';

it('renders app container', () => {
	const wrapper = shallow(<GridContainer />);
	const component = wrapper.find('.app-container');
	expect(component.length).toBe(1);
});

describe('multiplication grid', () => {
    it('renders 144 numbers', () => {
        const wrapper = mount(<GridContainer />);
        const component = wrapper.find('.app-grid__item');
        expect(component).toHaveLength(144);
    });

    it('finds multiples of selected number and toggles active property', () => {

    });

    it('toggles all numbers active property to false', () => {

    });
});
