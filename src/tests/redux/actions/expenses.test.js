import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import {
  startAddExpense,
  addExpense,
  editExpense,
  removeExpense,
} from '../../../redux/actions/expenses';
import * as types from '../../../redux/actions/actionTypes';
import expenses from '../../fixtures/expenses';
import database from '../../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

describe('Expenses action generators', () => {
  it('should generate action object for add expense', () => {
    const action = addExpense(expenses[0]);

    expect(action).toEqual({
      type: types.ADD_EXPENSE,
      expense: expenses[0],
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

  it('should add an expense to the database and store', done => {
    const store = createMockStore({});
    const expenseData = {
      description: 'foo',
      amount: 1,
      note: 'bar',
      createdAt: 0,
    };

    store
      .dispatch(startAddExpense(expenseData))
      .then(() => {
        const actions = store.getActions();

        expect(actions[0]).toEqual({
          type: types.ADD_EXPENSE,
          expense: {
            id: expect.any(String),
            ...expenseData,
          },
        });

        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
      })
      .then(snapshot => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
      });
  });

  it('should add an expense to the database and store with default values', done => {
    const store = createMockStore({});
    const defaultData = {
      description: '',
      amount: 0,
      note: '',
      createdAt: 0,
    };

    store
      .dispatch(startAddExpense())
      .then(() => {
        const actions = store.getActions();

        expect(actions[0]).toEqual({
          type: types.ADD_EXPENSE,
          expense: {
            id: expect.any(String),
            ...defaultData,
          },
        });

        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
      })
      .then(snapshot => {
        expect(snapshot.val()).toEqual(defaultData);
        done();
      });
  });

  // it('should generate action object for add expense with default values', () => {
  //   const action = addExpense();
  //
  //   expect(action).toEqual({
  //     type: types.ADD_EXPENSE,
  //     expense: {
  //       id: expect.any(String),
  //       description: '',
  //       note: '',
  //       amount: 0,
  //       createdAt: 0,
  //     },
  //   });
  // });

  it('should generate action object for remove expense', () => {
    const action = removeExpense({ id: 'foo' });

    expect(action).toEqual({
      type: types.REMOVE_EXPENSE,
      id: 'foo',
    });
  });
});
