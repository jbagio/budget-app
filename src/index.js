import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './redux/store/configureStore';
import * as serviceWorker from './serviceWorker';
import 'normalize.css';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import numbro from 'numbro';
import languages from 'numbro/dist/languages.min';

Object.values(languages).forEach(lang => numbro.registerLanguage(lang));
numbro.setLanguage('pt-PT');

const store = configureStore();

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
