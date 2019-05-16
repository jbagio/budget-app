import uuid from 'uuid';

const ADD_EXPENSE = 'budget-app/expenses/add-expense';
const REMOVE_EXPENSE = 'budget-app/expenses/remove-expense';
const EDIT_EXPENSE = 'budget-app/expenses/edit-expense';

export const addExpense = ({
  description = '',
  note = '',
  amount = 0,
  createdAt = 0,
} = {}) => ({
  type: ADD_EXPENSE,
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt,
  },
});

export const removeExpense = (id = {}) => ({
  type: REMOVE_EXPENSE,
  id,
});

export const editExpense = (id, updatedExpense) => ({
  type: EDIT_EXPENSE,
  id,
  updatedExpense,
});

const initialState = [];

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_EXPENSE:
      return [...state, action.expense];
    case REMOVE_EXPENSE:
      return state.filter(expense => expense.id !== action.id);
    case EDIT_EXPENSE:
      return state.map(expense => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updatedExpense,
          };
        }
        return expense;
      });
    default:
      return state;
  }
}
