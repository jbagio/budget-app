import React from 'react';
import moment from 'moment';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { defaultFilters, filters } from '../fixtures/filters';

let onSetTextFilter;
let onSortByDate;
let onSortByAmount;
let onSetStartDate;
let onSetEndDate;
let wrapper;

beforeEach(() => {
  onSetTextFilter = jest.fn();
  onSortByDate = jest.fn();
  onSortByAmount = jest.fn();
  onSetStartDate = jest.fn();
  onSetEndDate = jest.fn();
  wrapper = shallow(
    <ExpenseListFilters
      filters={filters}
      onSetTextFilter={onSetTextFilter}
      onSortByDate={onSortByDate}
      onSortByAmount={onSortByAmount}
      onSetStartDate={onSetStartDate}
      onSetEndDate={onSetEndDate}
    />
  );
});

it('should render ExpenseListFilters correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

it('should render ExpenseListFilters correctly with new filters', () => {
  wrapper.setProps({ filters });

  expect(wrapper).toMatchSnapshot();
});

it('should handle onSetTextFilter prop', () => {
  wrapper.find('input').simulate('change', {
    target: { value: 'foo' },
  });

  expect(onSetTextFilter).toHaveBeenLastCalledWith('foo');
});

it('should handle onSortByDate prop', () => {
  wrapper.find('select').simulate('change', {
    target: { value: 'date' },
  });

  expect(onSortByDate).toHaveBeenCalled();
  expect(onSortByAmount).toBeCalledTimes(0);
});

it('should handle onSortByAmount prop', () => {
  wrapper.find('select').simulate('change', {
    target: { value: 'amount' },
  });

  expect(onSortByAmount).toHaveBeenCalled();
  expect(onSortByDate).toBeCalledTimes(0);
});

it('should handle onSetStartDate and onSetEndDate props', () => {
  const startDate = moment(0).add(5, 'months');
  const endDate = moment(0).add(10, 'months');

  wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({
    startDate,
    endDate,
  });

  expect(onSetStartDate).toHaveBeenLastCalledWith(startDate);
  expect(onSetEndDate).toHaveBeenLastCalledWith(endDate);
});

it('should set datepicker focus', () => {
  wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')('endDate');

  expect(wrapper.state('focusedDatePicker')).toBe('endDate');
});
