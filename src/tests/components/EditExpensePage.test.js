import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let onEditExpense;
let onRemoveExpense;
let history;
let wrapper;
let expense;

beforeEach(() => {
  onEditExpense = jest.fn();
  onRemoveExpense = jest.fn();
  history = { push: jest.fn() };
  expense = expenses[0];
  wrapper = shallow(
    <EditExpensePage
      onEditExpense={onEditExpense}
      onRemoveExpense={onRemoveExpense}
      history={history}
      expense={expense}
    />
  );
});

it('should render EditExpensePage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

it('should handle onEditExpense prop', () => {
  const updates = {
    description: 'foo',
  };

  wrapper.find('ExpenseForm').prop('onSubmit')(updates);

  expect(onEditExpense).toHaveBeenLastCalledWith(expense.id, updates);
  expect(history.push).toHaveBeenLastCalledWith('/');
});

it('should handle onRemoveExpense prop', () => {
  wrapper.find('button').simulate('click');

  expect(onRemoveExpense).toHaveBeenLastCalledWith(expense);
  expect(history.push).toHaveBeenLastCalledWith('/');
});
