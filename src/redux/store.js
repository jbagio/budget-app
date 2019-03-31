import { createStore, combineReducers } from 'redux';
import expensesReducer from './modules/expenses';
import filtersReducer from './modules/filters';

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer,
  })
);

export default store;
