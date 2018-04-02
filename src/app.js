import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore'

import getVisibleExpenses from './selectors/expenses';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();
const visibleExpenses = getVisibleExpenses(store.getState().expenses,store.getState().filters);
console.log(visibleExpenses);

store.dispatch(addExpense({description: 'Water Bill', amount: 200, createdAt: 1001}));
store.dispatch(addExpense({description: 'Gas Bill', amount: 2000, createdAt: 1002}));
store.dispatch(addExpense({description: 'Rent', amount: 12000, createdAt: 500}));
store.dispatch(addExpense({description: 'Internet', amount: 3000, createdAt: 2002}));



const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>

)


ReactDOM.render(jsx, document.getElementById('app'));
