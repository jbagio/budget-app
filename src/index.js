import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureCenas from './state/store/configureStore';
import * as serviceWorker from './serviceWorker';
import 'normalize.css';

import { addExpense } from './state/actions/expenses';

const store = configureCenas();

store.dispatch(
  addExpense({ description: 'Electricity bill', amount: 5000, createdAt: 2000 })
);
store.dispatch(
  addExpense({ description: 'Water bill', amount: 3000, createdAt: 1500 })
);
store.dispatch(
  addExpense({ description: 'Food shopping', amount: 105000, createdAt: 1500 })
);

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
