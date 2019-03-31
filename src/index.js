import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import App from './App';
import store from './redux/store';
import { addExpense } from './redux/modules/expenses';
import { setTextFilter } from './redux/modules/filters';
import { getVisibleExpenses } from './redux/selectors';
import * as serviceWorker from './serviceWorker';

store.dispatch(addExpense({ description: 'first expense' }));
store.dispatch(addExpense({ description: 'second expense' }));
store.dispatch(setTextFilter('second'));

const state = store.getState();
console.log(getVisibleExpenses(state.expenses, state.filters));

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
