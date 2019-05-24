import expensesReducer from '../../../redux/reducers/expenses';
import * as types from '../../../redux/actions/actionTypes';
import expenses from '../../fixtures/expenses';

describe('Expenses reducer', () => {
  it('should setup default expenses state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });

    expect(state).toEqual([]);
  });

  it('should add an expense', () => {
    const expense = {
      id: '1',
      description: 'foo',
      note: '',
      amount: 10,
      createdAt: 100,
    };

    const state = expensesReducer(expenses, {
      type: types.ADD_EXPENSE,
      expense,
    });

    expect(state).toEqual([...expenses, expense]);
  });

  it('should remove expense by id', () => {
    const state = expensesReducer(expenses, {
      type: types.REMOVE_EXPENSE,
      id: expenses[1].id,
    });

    expect(state).toEqual([expenses[0], expenses[2]]);
  });

  it('should not remove expense if id not found', () => {
    const state = expensesReducer(expenses, {
      type: types.REMOVE_EXPENSE,
      id: -1,
    });

    expect(state).toEqual(expenses);
  });

  it('should edit an expense', () => {
    const amount = 666;

    const state = expensesReducer(expenses, {
      type: types.EDIT_EXPENSE,
      id: expenses[1].id,
      updates: { amount },
    });

    expect(state[1].amount).toBe(amount);
  });

  it('should not edit expense if id not found', () => {
    const amount = 666;

    const state = expensesReducer(expenses, {
      type: types.EDIT_EXPENSE,
      id: -1,
      updates: { amount },
    });

    expect(state).toEqual(expenses);
  });
});
