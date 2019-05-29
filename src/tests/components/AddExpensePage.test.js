import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../../components/AddExpensePage';
import expenses from '../fixtures/expenses';

let onAddExpense;
let history;
let wrapper;

beforeEach(() => {
  onAddExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <AddExpensePage onAddExpense={onAddExpense} history={history} />
  );
});

it('should render AddExpensePage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

it('should handle onAddExpense prop', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);

  expect(onAddExpense).toHaveBeenLastCalledWith(expenses[0]);
  expect(history.push).toHaveBeenLastCalledWith('/');
});
