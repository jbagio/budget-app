import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../../components/AddExpensePage';
import expenses from '../fixtures/expenses';

let onStartAddExpense;
let history;
let wrapper;

beforeEach(() => {
  onStartAddExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <AddExpensePage onStartAddExpense={onStartAddExpense} history={history} />
  );
});

it('should render AddExpensePage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

it('should handle onStartAddExpense prop', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);

  expect(onStartAddExpense).toHaveBeenLastCalledWith(expenses[0]);
  expect(history.push).toHaveBeenLastCalledWith('/');
});
