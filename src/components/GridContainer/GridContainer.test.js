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
        const mockArr = [
            {num: 1, active: false},
            {num: 2, active: false},
            {num: 3, active: false},
            {num: 4, active: false},
            {num: 5, active: false},
            {num: 6, active: false},
            {num: 7, active: false},
            {num: 8, active: false},
            {num: 9, active: false},
            {num: 10, active: false}
        ];

        mockArr.forEach(item => (item.num % 5 === 0) ? item.active = true : item.active = false);

        expect(mockArr[4].active).toBe(true);
        expect(mockArr[9].active).toBe(true);
    });

    it('toggles all numbers active property to false', () => {
        const mockArr = [
            {num: 1, active: false},
            {num: 2, active: false}
        ];

        mockArr.forEach(item => item.active = false);

        expect(mockArr[0].active).toBe(false);
        expect(mockArr[1].active).toBe(false);
    });
});
