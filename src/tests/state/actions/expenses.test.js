import {
  addExpense,
  editExpense,
  removeExpense,
} from '../../../redux/actions/expenses';
import * as types from '../../../redux/actions/actionTypes';

describe('Expenses action generators', () => {
  it('should generate action object for add expense', () => {
    const data = {
      description: 'foo',
      amount: 1,
      createdAt: 2,
      note: 'bar',
    };

    const action = addExpense(data);

    expect(action).toEqual({
      type: types.ADD_EXPENSE,
      expense: {
        ...data,
        id: expect.any(String),
      },
    });
  });

  it('should generate action object for edit expense', () => {
    const action = editExpense('foo', {
      description: 'new description',
    });

    expect(action).toEqual({
      type: types.EDIT_EXPENSE,
      id: 'foo',
      updates: {
        description: 'new description',
      },
    });
  });

  it('should generate action object for add expense with default values', () => {
    const action = addExpense();

    expect(action).toEqual({
      type: types.ADD_EXPENSE,
      expense: {
        id: expect.any(String),
        description: '',
        note: '',
        amount: 0,
        createdAt: 0,
      },
    });
  });

  it('should generate action object for remove expense', () => {
    const action = removeExpense({ id: 'foo' });

    expect(action).toEqual({
      type: types.REMOVE_EXPENSE,
      id: 'foo',
    });
  });
});
