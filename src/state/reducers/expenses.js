import * as types from '../actions/actionTypes';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_EXPENSE:
      return [...state, action.expense];
    case types.REMOVE_EXPENSE:
      return state.filter(expense => expense.id !== action.id);
    case types.EDIT_EXPENSE:
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
};
