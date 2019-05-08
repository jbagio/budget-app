import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import store from './redux/store';
import * as serviceWorker from './serviceWorker';
import 'normalize.css';

import { addExpense } from './redux/modules/expenses';
import { setTextFilter } from './redux/modules/filters';
import { getVisibleExpenses } from './redux/selectors';

store.dispatch(addExpense({ description: 'first expense' }));
store.dispatch(addExpense({ description: 'second expense' }));
store.dispatch(setTextFilter('second'));

const state = store.getState();
console.log(getVisibleExpenses(state.expenses, state.filters));

const app = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
